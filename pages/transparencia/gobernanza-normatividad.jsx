import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ExternalHtml from "../../components/ExternalHtml";

export default function GobernanzaNormatividad() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4"></h1>

        <ExternalHtml src="/assets/html/transparencia/gobernanza_normatividad.html" title="Gobernanza y Normatividad - Meriadock" />
      </main>
      <Footer />
    </>
  );
}