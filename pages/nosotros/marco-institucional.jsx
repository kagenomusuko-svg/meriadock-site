import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ExternalHtml from "../../components/ExternalHtml";

export default function MarcoInstitucional() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4"></h1>

        {/* Ajusta la ruta según dónde tengas el HTML en /public */}
        <ExternalHtml src="/assets/html/nosotros/marco_institucional.html" title="Marco institucional - Meriadock" />
      </main>
      <Footer />
    </>
  );
}