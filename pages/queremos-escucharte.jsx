import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

function loadReCaptcha(siteKey) {
  return new Promise((resolve) => {
    if (!siteKey) return resolve(false);
    if (typeof window === "undefined") return resolve(false);
    if (window.grecaptcha) return resolve(true);
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.head.appendChild(script);
  });
}

export default function QueremosEscucharte() {
  const [form, setForm] = useState({
    tipo: "",
    descripcion: "",
    lugar: "",
    fecha_evento: "",
    personas_involucradas: "",
    nombre: "",
    correo: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [successFolio, setSuccessFolio] = useState(null);
  const [recaptchaReady, setRecaptchaReady] = useState(false);

  useEffect(() => {
    // cargar reCAPTCHA v3 en background
    loadReCaptcha(RECAPTCHA_SITE_KEY).then((ok) => setRecaptchaReady(ok));
  }, []);

  function update(field) {
    return (e) => setForm((s) => ({ ...s, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccessFolio(null);
    if (!form.tipo) {
      setError("Por favor selecciona el tipo de mensaje.");
      return;
    }
    if (!form.descripcion || form.descripcion.trim().length < 5) {
      setError("Por favor describe los hechos (mínimo 5 caracteres).");
      return;
    }

    setSubmitting(true);

    try {
      // obtener token reCAPTCHA v3 si está disponible
      let recaptchaToken = null;
      if (recaptchaReady && window.grecaptcha) {
        try {
          recaptchaToken = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
            action: "queremos_escucharte_submit",
          });
        } catch (err) {
          console.warn("reCAPTCHA token error:", err);
          // no bloquear al usuario por problemas de recaptcha en entornos cerrados,
          // pero el servidor puede rechazar si desea mayor protección.
        }
      }

      const payload = { ...form, recaptchaToken };

      const resp = await fetch("/api/queremos-escucharte/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await resp.json();
      if (!resp.ok) {
        setError(json?.message || "Ocurrió un error al enviar. Intenta más tarde.");
      } else {
        setSuccessFolio(json.folio);
        setForm({
          tipo: "",
          descripcion: "",
          lugar: "",
          fecha_evento: "",
          personas_involucradas: "",
          nombre: "",
          correo: "",
        });
      }
    } catch (err) {
      console.error(err);
      setError("Error de red. Verifica tu conexión e intenta de nuevo.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
          <h1 className="text-2xl font-semibold mb-4">Queremos escucharte</h1>

          <p className="mb-4 text-sm text-gray-600">
            Si deseas comunicar una queja, sugerencia, felicitación o denuncia, por favor
            completa el siguiente formulario. Puedes enviar este formulario de forma anónima:
            los campos personales no son obligatorios. Revisa nuestro{" "}
            <a
              href="/assets/html/queremosescucharte/aviso_legal.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 underline"
            >
              Aviso Legal
            </a>
            .
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="tipo">
                Tipo de mensaje <span className="text-red-600">*</span>
              </label>
              <select
                id="tipo"
                value={form.tipo}
                onChange={update("tipo")}
                required
                className="w-full border rounded px-3 py-2"
              >
                <option value="">-- Selecciona --</option>
                <option value="Queja">Queja</option>
                <option value="Sugerencia">Sugerencia</option>
                <option value="Felicitación">Felicitación</option>
                <option value="Denuncia">Denuncia</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="descripcion">
                Descripción de los hechos <span className="text-red-600">*</span>
              </label>
              <textarea
                id="descripcion"
                value={form.descripcion}
                onChange={update("descripcion")}
                required
                rows={6}
                className="w-full border rounded px-3 py-2"
                placeholder="Describe con la mayor claridad posible los hechos, lugares y personas involucradas."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="lugar">
                  Lugar del evento
                </label>
                <input
                  id="lugar"
                  value={form.lugar}
                  onChange={update("lugar")}
                  className="w-full border rounded px-3 py-2"
                  placeholder="Ej. Colonia, municipio..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="fecha_evento">
                  Fecha aproximada del evento
                </label>
                <input
                  id="fecha_evento"
                  type="date"
                  value={form.fecha_evento}
                  onChange={update("fecha_evento")}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="personas_involucradas">
                Personas involucradas
              </label>
              <input
                id="personas_involucradas"
                value={form.personas_involucradas}
                onChange={update("personas_involucradas")}
                className="w-full border rounded px-3 py-2"
                placeholder="Nombres o descripciones (opcional)"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="nombre">
                  Nombre del remitente (opcional)
                </label>
                <input
                  id="nombre"
                  value={form.nombre}
                  onChange={update("nombre")}
                  className="w-full border rounded px-3 py-2"
                  placeholder="Tu nombre (opcional)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="correo">
                  Correo electrónico de contacto (opcional)
                </label>
                <input
                  id="correo"
                  type="email"
                  value={form.correo}
                  onChange={update("correo")}
                  className="w-full border rounded px-3 py-2"
                  placeholder="tu@correo.com (opcional)"
                />
              </div>
            </div>

            {error && <div className="text-red-600">{error}</div>}

            {successFolio ? (
              <div className="bg-green-50 border border-green-200 p-4 rounded">
                <p className="font-medium">Envío recibido</p>
                <p className="mt-1">
                  Folio: <strong>{successFolio}</strong>
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Gracias por comunicarte. Guardaremos confidencialidad y procederemos según nuestros
                  protocolos internos.
                </p>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-[#1E4C45] text-white px-4 py-2 rounded disabled:opacity-60"
                >
                  {submitting ? "Enviando..." : "Enviar reporte"}
                </button>

                <button
                  type="button"
                  className="px-4 py-2 border rounded"
                  onClick={() => {
                    setForm({
                      tipo: "",
                      descripcion: "",
                      lugar: "",
                      fecha_evento: "",
                      personas_involucradas: "",
                      nombre: "",
                      correo: "",
                    });
                    setError("");
                    setSuccessFolio(null);
                  }}
                >
                  Limpiar
                </button>
              </div>
            )}
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}