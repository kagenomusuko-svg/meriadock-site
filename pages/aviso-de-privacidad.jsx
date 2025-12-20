import Header from "../components/Header";
import Footer from "../components/Footer";
import ExternalHtml from "../components/ExternalHtml";

export default function AvisoDePrivacidad() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4"></h1>
        <ExternalHtml src="/assets/html/datospersonales/aviso_privacidad.html" title="Aviso de privacidad - Meriadock" />
      </main>
      <Footer />
    </>
  );
}