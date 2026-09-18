import { useEffect, useRef, useState } from "react";

function PdfPage({ pdf, pageNumber, scale, active }) {
  const canvasRef = useRef(null);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function render() {
      if (!active || !pdf || !canvasRef.current) return;

      const page = await pdf.getPage(pageNumber);
      const viewport = page.getViewport({ scale });
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({
        canvasContext: context,
        viewport,
      }).promise;

      if (!cancelled) setRendered(true);
    }

    render();

    return () => {
      cancelled = true;
    };
  }, [pdf, pageNumber, scale, active]);

  return (
    <div className="pdf-viewer-page">
      {active ? (
        <canvas ref={canvasRef} className="pdf-viewer-canvas" />
      ) : (
        <div className="pdf-viewer-placeholder">
          Página {pageNumber}
        </div>
      )}
      {rendered ? (
        <span className="pdf-viewer-page-number">Página {pageNumber}</span>
      ) : null}
    </div>
  );
}

export default function PdfViewer({ url, title }) {
  const [pdf, setPdf] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [scale, setScale] = useState(1.15);
  const [visiblePages, setVisiblePages] = useState(new Set());
  const [loading, setLoading] = useState(true);
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

        const initialPages = new Set();
        for (let i = 1; i <= Math.min(3, document.numPages); i++) {
          initialPages.add(i);
        }
        setVisiblePages(initialPages);
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
    const observer = new IntersectionObserver(
      (entries) => {
        setVisiblePages((current) => {
          const next = new Set(current);

          entries.forEach((entry) => {
            const page = Number(entry.target.dataset.page);
            if (entry.isIntersecting) {
              next.add(page);
              next.add(page - 1);
              next.add(page + 1);
            }
          });

          return next;
        });
      },
      { rootMargin: "600px" }
    );

    document.querySelectorAll("[data-page]").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [totalPages]);

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
        <button onClick={() => setScale((s) => Math.max(0.75, s - 0.1))}>−</button>
        <span>{totalPages} páginas</span>
        <button onClick={() => setScale((s) => s + 0.1)}>+</button>
      </div>

      <div className="pdf-viewer-document">
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;

          return (
            <div key={page} data-page={page}>
              <PdfPage
                pdf={pdf}
                pageNumber={page}
                scale={scale}
                active={visiblePages.has(page)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
