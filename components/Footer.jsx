import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer mt-8">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Columna izquierda: sello grande + nombre + frase */}
        <div className="flex items-start gap-4">
          <img
            src="/logo.svg"
            alt="Logo AC"
            // tamaño mayor para que se vea más nítido; ajusta width/height si quieres más zoom
            style={{
              width: 96,
              height: 96,
              objectFit: "contain",
              // mismo filtro que en header para aproximar plateado (#D9D9D9)
              filter: "grayscale(1) brightness(0.95) invert(0.95) saturate(0%)",
              imageRendering: "optimizeQuality",
              // some browsers respect this
              color: "#D9D9D9",
            }}
          />

          <div>
            <div className="font-semibold" style={{ color: "var(--meriadock-silver)" }}>
              Centro Multidisciplinario Meriadock
            </div>
            <div className="text-sm mb-2" style={{ color: "var(--meriadock-silver)" }}>
              Formación y Asesoría A.C.
            </div>

            <div className="text-sm italic" style={{ color: "var(--meriadock-silver)" }}>
              "La fuerza interior nos impulsa, un pequeño apoyo de los demás nos bendice"
            </div>
          </div>
        </div>

        {/* Columnas de menú */}
        <div className="flex gap-8 text-sm">
          <div>
            <h4 className="font-semibold" style={{ color: "var(--meriadock-silver)" }}>
              Institucional
            </h4>
            <ul className="mt-2" style={{ color: "var(--meriadock-silver)" }}>
              <li>
                <Link href="/transparencia">Transparencia</Link>
              </li>
              <li>
                <Link href="/aviso-de-privacidad">Aviso de Privacidad</Link>
              </li>
              <li>
                <Link href="https://drive.google.com/file/d/1iE31g4YxZgIZ2Z9GIJuSqmh9gX-fyh2F/view?usp=drive_link">Código de Conducta</Link>
              </li>
              <li>
                <Link href="/queremos-escucharte">Queremos escucharte</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold" style={{ color: "var(--meriadock-silver)" }}>
              Contáctanos
            </h4>
            <div className="mt-2" style={{ color: "var(--meriadock-silver)" }}>
              contacto@meriadock.org.mx
            </div>
            <div className="mt-3 flex gap-3" style={{ color: "var(--meriadock-silver)" }}>
              <a
                href="https://www.youtube.com/@CentroMeriadock"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Canal de YouTube de Centro Meriadock"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t py-4" style={{ borderColor: "rgba(217,217,217,0.08)" }}>
        <div className="container mx-auto px-4 text-sm" style={{ color: "var(--meriadock-silver)" }}>
          © {new Date().getFullYear()} Centro Multidisciplinario Meriadock — Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
