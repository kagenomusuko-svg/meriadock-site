import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PdfViewer from "../../components/PdfViewer";

const CATALOG_URL =
  "https://raw.githubusercontent.com/kagenomusuko-svg/publicaciones/main/catalogo.json";
const RAW_BASE =
  "https://raw.githubusercontent.com/kagenomusuko-svg/publicaciones/main";

function rawUrl(path) {
  return `${RAW_BASE}/${String(path || "")
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/")}`;
}

export async function getServerSideProps({ params }) {
  const slug = Array.isArray(params?.slug) ? params.slug.join("/") : "";

  try {
    const response = await fetch(CATALOG_URL, {
      headers: { Accept: "application/json" },
    });

    if (!response.ok) return { notFound: true };

    const catalog = await response.json();
    const item = Array.isArray(catalog)
      ? catalog.find((publication) => publication.slug === slug)
      : null;

    if (!item) return { notFound: true };

    return {
      props: {
        publication: {
          ...item,
          coverUrl: rawUrl(item.cover),
          pdfUrl: rawUrl(item.pdf),
        },
      },
    };
  } catch (error) {
    console.error("Error resolviendo publicación:", error);
    return { notFound: true };
  }
}

export default function PublicationReader({ publication }) {
  const fullTitle = [publication.title, publication.subtitle]
    .filter(Boolean)
    .join(": ");

  return (
    <>
      <Head>
        <title>{fullTitle} | Meriadock</title>
        <meta
          name="description"
          content={
            publication.description ||
            `Lee ${fullTitle}, de ${publication.author}, en Meriadock.`
          }
        />
      </Head>

      <Header />

      <main className="publication-reader-page">
        <nav className="publication-reader-breadcrumb" aria-label="Ruta">
          <Link href="/home">Inicio</Link>
          <span>›</span>
          <Link href="/publicaciones">Publicaciones</Link>
          <span>›</span>
          <span>{publication.volume || publication.title}</span>
        </nav>

        <div className="publication-reader-layout">
          <header className="publication-reader-header">
            <div className="publication-reader-cover-wrap">
              <img
                src={publication.coverUrl}
                alt={`Portada de ${fullTitle}`}
                className="publication-reader-cover"
              />
            </div>

            <div className="publication-reader-meta">
              {publication.volume ? (
                <span className="publication-reader-volume">
                  {publication.volume}
                </span>
              ) : null}
              <h1>{publication.title}</h1>
              {publication.subtitle ? <h2>{publication.subtitle}</h2> : null}
              <p className="publication-reader-author">{publication.author}</p>
              <p className="publication-reader-year">{publication.year}</p>
              {publication.description ? (
                <p className="publication-reader-description">
                  {publication.description}
                </p>
              ) : null}
            </div>
          </header>

          <section className="publication-reader-viewer" aria-label="Lector PDF">
            <PdfViewer url={publication.pdfUrl} title={fullTitle} />
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
