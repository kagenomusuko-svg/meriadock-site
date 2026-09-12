import Head from "next/head";
import Link from "next/link";

const SITE_URL = "https://www.meriadock.org.mx";

function AqorathHeader() {
  return (
    <header className="site-header">
      <div className="container mx-auto flex min-h-[80px] items-center px-4 py-3">
        <Link
          href="/home"
          className="flex items-center gap-3"
          aria-label="Ir al inicio de Meriadock"
        >
          <img
            src="/ac_seal.png"
            alt="Sello del Centro Multidisciplinario Meriadock"
            className="h-12 w-12 rounded-full object-contain"
          />
          <span className="grid leading-tight">
            <strong className="text-sm font-semibold text-[var(--meriadock-silver)]">
              Centro Multidisciplinario Meriadock
            </strong>
            <small className="mt-1 text-xs text-[var(--meriadock-silver)]">
              Formación y Asesoría A.C.
            </small>
          </span>
        </Link>
      </div>
      <div
        className="border-t"
        style={{ borderColor: "rgba(217,217,217,0.08)" }}
      />
    </header>
  );
}

function AqorathFooter() {
  return (
    <footer className="site-footer">
      <div className="mx-auto flex max-w-[1100px] flex-col items-start justify-between gap-4 px-4 py-5 md:flex-row">
        <div className="flex items-start gap-4">
          <a
            href={`${SITE_URL}/home`}
            aria-label="Ir al sitio principal de Centro Multidisciplinario Meriadock"
            className="shrink-0"
          >
            <img
              src={`${SITE_URL}/ac_seal.png`}
              alt="Sello del Centro Multidisciplinario Meriadock"
              style={{
                width: 96,
                height: 96,
                objectFit: "contain",
                borderRadius: "50%",
                imageRendering: "auto",
              }}
            />
          </a>

          <div>
            <div className="font-semibold text-[var(--meriadock-silver)]">
              Centro Multidisciplinario Meriadock
            </div>
            <div className="mb-1 text-sm text-[var(--meriadock-silver)]">
              Formación y Asesoría A.C.
            </div>
            <div className="text-sm italic text-[var(--meriadock-silver)]">
              &quot;La fuerza interior nos impulsa, un pequeño apoyo de los demás nos bendice&quot;
            </div>
          </div>
        </div>

        <div className="text-sm">
          <a
            className="text-[var(--meriadock-silver)] transition hover:text-white"
            href={`${SITE_URL}/aviso-de-privacidad`}
          >
            Aviso de Privacidad
          </a>
        </div>
      </div>

      <div
        className="border-t py-2"
        style={{ borderColor: "rgba(217,217,217,0.08)" }}
      >
        <div className="mx-auto max-w-[1100px] px-4 text-sm text-[var(--meriadock-silver)]">
          © {new Date().getFullYear()} Centro Multidisciplinario Meriadock — Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default function AqorathTechnologyFallback() {
  return (
    <div
      style={{
        minHeight: "100vh",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Head>
        <title>Aqorath | Tecnología Meriadock</title>
        <meta
          name="description"
          content="Aqorath, desarrollo tecnológico de Centro Multidisciplinario Meriadock Formación y Asesoría A.C."
        />
      </Head>
      <AqorathHeader />
      <main style={{ flex: "1 0 auto", display: "flex" }}>
        <section
          style={{
            flex: 1,
            minHeight: "52vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "48px 24px",
          }}
          aria-labelledby="aqorath-title"
        >
          <p
            style={{
              margin: "0 0 8px",
              color: "#1E4C45",
              fontSize: 14,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Tecnología Meriadock
          </p>
          <h1
            id="aqorath-title"
            style={{
              margin: 0,
              color: "#1E4C45",
              fontSize: "clamp(44px, 8vw, 76px)",
              fontWeight: 600,
            }}
          >
            Aqorath
          </h1>
        </section>
      </main>
      <AqorathFooter />
    </div>
  );
}
