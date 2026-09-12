import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AqorathTechnologyFallback() {
  return (
    <>
      <Head>
        <title>Aqorath | Tecnología Meriadock</title>
        <meta
          name="description"
          content="Aqorath, desarrollo tecnológico de Centro Multidisciplinario Meriadock Formación y Asesoría A.C."
        />
      </Head>
      <Header />
      <main>
        <section
          style={{
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
      <Footer />
    </>
  );
}
