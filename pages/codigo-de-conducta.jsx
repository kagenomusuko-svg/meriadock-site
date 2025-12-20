import { useEffect } from "react";

/*
  Esta página redirige directamente al PDF del código de conducta en una nueva pestaña,
  y también muestra un enlace por si la redirección es bloqueada por el navegador.
*/
export default function CodigoDeConducta() {
  useEffect(() => {
    const pdfUrl = '/codigo-conducta';
    // abrir en nueva pestaña
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-4">Código de Conducta</h1>
        <p className="mb-4">Se está abriendo el documento en una nueva pestaña. Si no se abre automáticamente, haz clic en el enlace de abajo.</p>
        <a
          className="text-blue-600 hover:underline"
          href="/codigo_conducta/codigodeetica.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abrir Código de Conducta (PDF)
        </a>
      </div>
    </div>
  );
}
