import nodemailer from "nodemailer";

/*
  Endpoint: POST /api/forms/send
  - Verifica reCAPTCHA v3
  - Genera folio pero lo incluye SOLO en el asunto y en el cuerpo del correo
  - No devuelve folio al cliente (por requerimiento)
  - Envía correo a la dirección de Vinculación (configurable via env)
*/

async function verifyRecaptcha(token, remoteip) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.warn("reCAPTCHA secret not configured - rejecting");
    return { success: false, error: "reCAPTCHA no configurado en el servidor" };
  }

  const params = new URLSearchParams();
  params.append("secret", secret);
  params.append("response", token);
  if (remoteip) params.append("remoteip", remoteip);

  const resp = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    body: params,
  });
  return resp.json();
}

function generateFolio(formKey) {
  const now = new Date();
  const year = now.getFullYear();
  const rnd = Math.floor(Math.random() * 1_000_000);
  const padded = String(rnd).padStart(6, "0");
  return `MD-${formKey}-${year}-${padded}`;
}

function escapeHtml(s = "") {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { formKey, formLabel, tipo, descripcion, nombre, correo, recaptchaToken } = req.body || {};

  // Basic validation
  if (!formKey || !["OR", "CO", "PA"].includes(formKey)) {
    return res.status(400).json({ message: "Tipo de formulario inválido." });
  }
  if (!formLabel || typeof formLabel !== "string") {
    return res.status(400).json({ message: "Etiqueta de formulario inválida." });
  }
  if (!tipo || typeof tipo !== "string") {
    return res.status(400).json({ message: "El campo 'Tipo' es obligatorio." });
  }
  if (!descripcion || typeof descripcion !== "string" || descripcion.trim().length < 6) {
    return res.status(400).json({ message: "La descripción es obligatoria y debe tener al menos 6 caracteres." });
  }
  if (!nombre || typeof nombre !== "string" || nombre.trim().length < 2) {
    return res.status(400).json({ message: "El nombre es obligatorio." });
  }
  if (!correo || typeof correo !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
    return res.status(400).json({ message: "El correo electrónico es obligatorio y debe ser válido." });
  }

  // Verify reCAPTCHA (require token)
  if (!recaptchaToken) {
    return res.status(400).json({ message: "reCAPTCHA no verificado. Por favor actualiza la página e intenta de nuevo." });
  }

  let recaptchaResult;
  try {
    recaptchaResult = await verifyRecaptcha(recaptchaToken, req.headers["x-forwarded-for"] || req.socket.remoteAddress);
  } catch (err) {
    console.error("Error verifying reCAPTCHA:", err);
    return res.status(500).json({ message: "Error verificando reCAPTCHA." });
  }

  if (!recaptchaResult || !recaptchaResult.success) {
    console.warn("reCAPTCHA failed:", recaptchaResult);
    return res.status(400).json({ message: "reCAPTCHA no superado. Intenta de nuevo." });
  }
  if (typeof recaptchaResult.score === "number" && recaptchaResult.score < 0.45) {
    // umbral ajustable
    console.warn("reCAPTCHA low score:", recaptchaResult.score);
    return res.status(400).json({ message: "reCAPTCHA indica comportamiento sospechoso (score bajo)." });
  }

  // Prepare email
  const folio = generateFolio(formKey);
  const now = new Date();
  const timestamp = now.toISOString();

  const textBody = `
Folio: ${folio}
Fecha/hora envío: ${timestamp}
Formulario: ${formLabel}
Tipo: ${tipo}

Descripción:
${descripcion}

Nombre remitente: ${nombre}
Correo remitente: ${correo}
`;

  const htmlBody = `
    <h2>${escapeHtml(formLabel)}</h2>
    <p><strong>Folio:</strong> ${folio}</p>
    <p><strong>Fecha/hora envío:</strong> ${timestamp}</p>
    <p><strong>Tipo:</strong> ${escapeHtml(tipo)}</p>
    <hr/>
    <h3>Descripción</h3>
    <p>${escapeHtml(descripcion).replace(/\n/g, "<br/>")}</p>
    <hr/>
    <p><strong>Nombre remitente:</strong> ${escapeHtml(nombre)}</p>
    <p><strong>Correo remitente:</strong> ${escapeHtml(correo)}</p>
  `;

  // SMTP config
  const SMTP_HOST = process.env.SMTP_HOST;
  const SMTP_PORT = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;
  const MAIL_FROM = process.env.EMAIL_FROM || "mail@meriadock.org.mx";

  // Recipient resolution: use specific env for vinculacion if present
  const DEFAULT_TO = process.env.EMAIL_TO || process.env.SMTP_TO || process.env.SMTP_TO_ADDRESS;
  const VINCULACION_TO = process.env.VINCULACION_EMAIL || DEFAULT_TO || "vinculacion@meriadock.org.mx";

  const MAIL_TO = VINCULACION_TO; // these three forms target Vinculación

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.error("Missing SMTP configuration in environment variables.");
    return res.status(500).json({ message: "Configuración de correo no disponible. Contacta al administrador." });
  }

  let transporter;
  try {
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
  } catch (err) {
    console.error("Error creating transporter:", err);
    return res.status(500).json({ message: "Error al configurar el servicio de correo." });
  }

  const subject = `[Folio ${folio}] Nuevo mensaje desde "${formLabel}"`;

  try {
    await transporter.sendMail({
      from: `"Centro Meriadock" <${MAIL_FROM}>`,
      to: MAIL_TO,
      subject,
      text: textBody,
      html: htmlBody,
    });

    // Do not expose folio to sender (per requirement) — return generic OK
    return res.status(200).json({ message: "Enviado" });
  } catch (err) {
    console.error("Error sending mail:", err);
    return res.status(500).json({ message: "No se pudo enviar el correo. Intenta más tarde." });
  }
}