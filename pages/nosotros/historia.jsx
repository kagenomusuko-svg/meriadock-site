import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ExternalHtml from "../../components/ExternalHtml";

export default function Historia() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4"></h1>

        {/* Carga el HTML externo en la parte central */}
        <ExternalHtml src="/assets/html/nosotros/historia.html" title="Historia - Meriadock" />
      </main>
      <Footer />
    </>
  );
}