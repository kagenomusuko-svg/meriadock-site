import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

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

export default function Colaboracion() {
  const [form, setForm] = useState({ tipo: "", descripcion: "", nombre: "", correo: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [recaptchaReady, setRecaptchaReady] = useState(false);

  useEffect(() => {
    loadReCaptcha(SITE_KEY).then((ok) => setRecaptchaReady(ok));
  }, []);

  function update(field) {
    return (e) => setForm((s) => ({ ...s, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!form.tipo) return setError("Selecciona el tipo de colaboración.");
    if (!form.descripcion || form.descripcion.trim().length < 10)
      return setError("Describe la colaboración con al menos 10 caracteres.");
    if (!form.nombre || form.nombre.trim().length < 2) return setError("Por favor indica tu nombre.");
    if (!form.correo || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo))
      return setError("Por favor indica un correo válido.");

    setLoading(true);

    try {
      let recaptchaToken = null;
      if (recaptchaReady && window.grecaptcha) {
        try {
          recaptchaToken = await window.grecaptcha.execute(SITE_KEY, { action: "colaboracion_submit" });
        } catch (e) {
          console.warn("reCAPTCHA error:", e);
        }
      }

      const resp = await fetch("/api/forms/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formKey: "CO",
          formLabel: "Colaboración",
          tipo: form.tipo,
          descripcion: form.descripcion,
          nombre: form.nombre,
          correo: form.correo,
          recaptchaToken,
        }),
      });

      const json = await resp.json();
      if (!resp.ok) setError(json?.message || "Error al enviar.");
      else {
        setSuccess(true);
        setForm({ tipo: "", descripcion: "", nombre: "", correo: "" });
      }
    } catch (err) {
      console.error(err);
      setError("Error de red. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
          <h1 className="text-2xl font-semibold mb-4">Colaboración</h1>

          <p className="mb-2 text-gray-700">
            A través de este formulario puedes manifestar tu interés en colaborar con el Centro Multidisciplinario Meriadock Formación y Asesoría, A.C., ya sea mediante donaciones, colaboración externa o vínculos institucionales.
          </p>

          <p className="mb-2 text-gray-700">
            Este medio funciona únicamente como canal de contacto.
          </p>

          <p className="mb-4 text-gray-700">
            Una vez recibida tu información, nos comunicaremos contigo para dar seguimiento. Revisa nuestro <a href="/aviso_privacidad/avisodeprivacidad.pdf" target="_blank" rel="noopener noreferrer" className="text-green-700 underline">Aviso de Privacidad</a>.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Tipo de colaboración <span className="text-red-600">*</span></label>
              <select value={form.tipo} onChange={update("tipo")} className="w-full border rounded px-3 py-2" required>
                <option value="">-- Selecciona --</option>
                <option>Donación monetaria</option>
                <option>Donación en especie</option>
                <option>Colaborador externo</option>
                <option>Colaboración institucional</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Descripción <span className="text-red-600">*</span></label>
              <textarea value={form.descripcion} onChange={update("descripcion")} rows={6} className="w-full border rounded px-3 py-2" required placeholder="Describe tu propuesta o interés..." />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Nombre <span className="text-red-600">*</span></label>
              <input value={form.nombre} onChange={update("nombre")} className="w-full border rounded px-3 py-2" required placeholder="Tu nombre completo" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Correo electrónico <span className="text-red-600">*</span></label>
              <input value={form.correo} onChange={update("correo")} type="email" className="w-full border rounded px-3 py-2" required placeholder="tu@correo.com" />
            </div>

            {error && <div className="text-red-600">{error}</div>}

            {success ? (
              <div className="bg-green-50 border border-green-200 p-4 rounded">
                <p className="font-medium">Mensaje recibido</p>
                <p className="mt-2 text-sm text-gray-600">Gracias, nos comunicaremos a la brevedad.</p>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <button type="submit" disabled={loading} className="bg-[#1E4C45] text-white px-4 py-2 rounded disabled:opacity-60">
                  {loading ? "Enviando..." : "Enviar"}
                </button>
                <button type="button" onClick={() => { setForm({ tipo: "", descripcion: "", nombre: "", correo: "" }); setError(""); setSuccess(false); }} className="px-4 py-2 border rounded">
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