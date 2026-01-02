// pages/api/queremos-escucharte/send.js
import nodemailer from "nodemailer";

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY || "";
const TO_EMAIL = process.env.QUEREMOS_ESCUCHARTE_TO || "denuncias@meriadock.org.mx";
// Use SMTP_USER (authenticated) as default FROM to avoid "Sender verify failed"
const FROM_EMAIL = process.env.SMTP_USER || process.env.QUEREMOS_ESCUCHARTE_FROM || `no-reply@${(process.env.NEXT_PUBLIC_BASE_URL || "meriadock.org.mx").replace(/^https?:\/\//,'')}`;

async function verifyRecaptcha(token) {
  if (!RECAPTCHA_SECRET || !token) return true;
  try {
    const url = "https://www.google.com/recaptcha/api/siteverify";
    const params = new URLSearchParams();
    params.append("secret", RECAPTCHA_SECRET);
    params.append("response", token);

    const resp = await fetch(url, { method: "POST", body: params });
    const json = await resp.json();
    return json.success === true;
  } catch (err) {
    console.warn("reCAPTCHA verify error:", err);
    return false;
  }
}

function createTransporterFromEnv() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE } = process.env;
  if (!SMTP_HOST || !SMTP_PORT) return null;
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true",
    auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
    greetingTimeout: 15000,
    connectionTimeout: 20000,
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, message: "Method not allowed. Use POST." });
  }

  try {
    const body = req.body || {};
    const {
      tipo = "",
      descripcion = "",
      lugar = "",
      fecha_evento = "",
      personas_involucradas = "",
      nombre = "",
      correo = "",
      recaptchaToken = "",
    } = body;

    if (!tipo) return res.status(400).json({ ok: false, message: "Selecciona el tipo de mensaje." });
    if (!descripcion || descripcion.trim().length < 5)
      return res.status(400).json({ ok: false, message: "La descripción debe tener al menos 5 caracteres." });

    const recaptchaOk = await verifyRecaptcha(recaptchaToken);
    if (!recaptchaOk) return res.status(400).json({ ok: false, message: "reCAPTCHA verification failed." });

    const subject = `Queremos escucharte — ${tipo}`;
    const transporter = createTransporterFromEnv();
    if (!transporter) {
      console.error("SMTP no configurado: falta SMTP_HOST/SMTP_PORT en el entorno.");
      return res.status(500).json({ ok: false, message: "SMTP server not configured." });
    }

    // Generar el folio antes del texto/html
    const folio = new Date().toISOString();

    // Agregar el folio al cuerpo del correo
    const textLines = [
      `Tipo: ${tipo}`,
      `Descripción: ${descripcion}`,
      `Lugar: ${lugar || "-"}`,
      `Fecha aproximada: ${fecha_evento || "-"}`,
      `Personas involucradas: ${personas_involucradas || "-"}`,
      `Nombre remitente: ${nombre || "Anónimo"}`,
      `Correo remitente: ${correo || "No proporcionado"}`,
      `Folio: ${folio}`, // Aquí agregamos el folio al texto plano
    ];
    const text = textLines.join("\n");

    const html = `
      <h2>Queremos escucharte — ${tipo}</h2>
      <p><strong>Descripción:</strong><br/>${(descripcion || "").replace(/\n/g, "<br/>")}</p>
      <p><strong>Lugar:</strong> ${lugar || "-"}</p>
      <p><strong>Fecha (aprox):</strong> ${fecha_evento || "-"}</p>
      <p><strong>Personas involucradas:</strong> ${personas_involucradas || "-"}</p>
      <p><strong>Remitente:</strong> ${nombre || "Anónimo"} (${correo || "No proporcionado"})</p>
      <p><strong>Folio:</strong> ${folio}</p> <!-- Aquí agregamos el folio al HTML -->
      <hr/>
      <p style="font-size:0.9em;color:#666">Enviado desde ${FROM_EMAIL}</p>
    `;

    const mailOptions = {
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject,
      text,
      html,
      replyTo: correo || undefined,
      envelope: {
        from: FROM_EMAIL,
        to: TO_EMAIL,
      },
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ ok: true, folio });
  } catch (err) {
    console.error("Error en /api/queremos-escucharte/send:", err);
    return res.status(500).json({ ok: false, message: "Error interno del servidor" });
  }
}
