import Head from "next/head";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";

const pdfUrl = "https://zenodo.org/records/23198619/files/eris.pdf";

export default function ErisReader() {
  return (
    <>
      <Head>
        <title>El Contrato Fiscal: Eris · Meriadock</title>
        <meta
          name="description"
          content="El Contrato Fiscal: Eris, de Miguel Hilario Olvera Aguilar."
        />
      </Head>
      <Header />
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 1.25rem" }}>
        <p style={{ color: "#1E4C45", letterSpacing: ".08em", textTransform: "uppercase" }}>
          Colección: El Contrato Fiscal
        </p>
        <h1>El Contrato Fiscal: Eris</h1>
        <p style={{ fontSize: "1.25rem" }}>La auditoría del contrato</p>
        <p>
          Miguel Hilario Olvera Aguilar · 2026 ·{" "}
          <a href="https://doi.org/10.5281/zenodo.23198619">
            DOI 10.5281/zenodo.23198619
          </a>
        </p>
        <p>
          Una auditoría histórica y comparada del contractualismo, el liberalismo,
          el materialismo histórico, la anarquía y la revolución.
        </p>
        <p>
          <a href={pdfUrl}>Abrir o descargar el PDF desde Zenodo</a>
        </p>
        <div style={{ marginTop: "2rem", aspectRatio: "8.5 / 11", minHeight: "70vh" }}>
          <iframe
            title="El Contrato Fiscal: Eris"
            src={pdfUrl}
            style={{ width: "100%", height: "100%", minHeight: "70vh", border: "1px solid #d8d8d8" }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
