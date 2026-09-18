import { useEffect, useRef, useState } from "react";

export default function PdfViewer({ url, title }) {
  const canvasRef = useRef(null);
  const [pdf, setPdf] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [scale, setScale] = useState(1.25);
  const [loading, setLoading] = useState(true);
  const [rendering, setRendering] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    async function loadPdf() {
      try {
        const pdfjs = await import("pdfjs-dist/build/pdf");

        pdfjs.GlobalWorkerOptions.workerSrc = new URL(
          "pdfjs-dist/build/pdf.worker.min.mjs",
          import.meta.url
        ).toString();

        const document = await pdfjs.getDocument(url).promise;

        if (!active) return;

        setPdf(document);
        setTotalPages(document.numPages);
      } catch (err) {
        console.error("Error cargando PDF:", err);
        if (active) setError(true);
      } finally {
        if (active) setLoading(false);
      }
    }

    loadPdf();

    return () => {
      active = false;
    };
  }, [url]);

  useEffect(() => {
    let active = true;

    async function renderPage() {
      if (!pdf || !canvasRef.current) return;

      setRendering(true);

      try {
        const currentPage = await pdf.getPage(page);
        const viewport = currentPage.getViewport({ scale });
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await currentPage.render({
          canvasContext: context,
          viewport,
        }).promise;
      } finally {
        if (active) setRendering(false);
      }
    }

    renderPage();

    return () => {
      active = false;
    };
  }, [pdf, page, scale]);

  if (loading) {
    return <div className="publication-reader-loading">Cargando publicación…</div>;
  }

  if (error) {
    return (
      <div className="publication-reader-fallback">
        <p>No fue posible cargar el lector institucional.</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Abrir PDF
        </a>
      </div>
    );
  }

  return (
    <div className="pdf-viewer" aria-label={title}>
      <div className="pdf-viewer-toolbar">
        <button onClick={() => setPage((p) => Math.max(1, p - 1))}>‹</button>
        <span>
          {page} / {totalPages}
        </span>
        <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))}>›</button>
        <button onClick={() => setScale((s) => Math.max(0.75, s - 0.1))}>−</button>
        <button onClick={() => setScale((s) => s + 0.1)}>+</button>
      </div>

      {rendering ? (
        <div className="pdf-viewer-status">Renderizando página…</div>
      ) : null}

      <canvas ref={canvasRef} className="pdf-viewer-canvas" />
    </div>
  );
}
