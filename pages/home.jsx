import Header from "../components/Header";
import Footer from "../components/Footer";
import ExternalHtml from "../components/ExternalHtml";

export default function Home() {
  return (
    <>
      <Header />

      <main className="container mx-auto px-4 py-8">
        <ExternalHtml
          src="/assets/html/main/index.html"
          title="Inicio - Centro Meriadock"
          minHeight={600}
        />
      </main>

      <Footer />
    </>
  );
}