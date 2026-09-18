import { useEffect, useRef, useState } from "react";

function PdfPage({ pdf, pageNumber, scale, active, onVisible }) {
  const canvasRef = useRef(null);

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

      await page.render({ canvasContext: context, viewport }).promise;

      if (!cancelled) onVisible?.(pageNumber);
    }

    render();

    return () => {
      cancelled = true;
    };
  }, [pdf, pageNumber, scale, active, onVisible]);

  return (
    <div className="pdf-viewer-page">
      {active ? (
        <canvas ref={canvasRef} className="pdf-viewer-canvas" />
      ) : (
        <div className="pdf-viewer-placeholder">Página {pageNumber}</div>
      )}
    </div>
  );
}

export default function PdfViewer({ url, title }) {
  const [pdf, setPdf] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [scale, setScale] = useState(1.15);
  const [visiblePages, setVisiblePages] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const touchStart = useRef(null);

  const storageKey = `meriadock-reader:${url}`;

  useEffect(() => {
    const saved = Number(localStorage.getItem(storageKey));
    if (saved) setCurrentPage(saved);

    const updateScale = () => {
      if (window.innerWidth < 768) {
        setScale(Math.min(window.innerWidth / 700, 1));
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [storageKey]);

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
        setVisiblePages(new Set([1, 2, 3].filter((p) => p <= document.numPages)));
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
              if (page > 1) next.add(page - 1);
              if (page < totalPages) next.add(page + 1);
            }
          });

          const pages = [...next];
          if (pages.length > 9) {
            const latest = Math.max(...pages);
            return new Set(pages.filter((p) => p >= latest - 4 && p <= latest + 4));
          }

          return next;
        });
      },
      { rootMargin: "700px" }
    );

    document.querySelectorAll("[data-page]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [totalPages]);

  function updateReadingPosition(page) {
    setCurrentPage(page);
    localStorage.setItem(storageKey, page);
  }

  function handleTouchStart(event) {
    if (event.touches.length === 2) {
      touchStart.current = event.touches[0].clientX;
    }
  }

  function handleTouchEnd(event) {
    if (touchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;

    if (Math.abs(distance) > 50) {
      setScale((current) => Math.max(0.75, Math.min(2, current + (distance > 0 ? 0.1 : -0.1))));
    }

    touchStart.current = null;
  }

  if (loading) return <div className="publication-reader-loading">Cargando publicación…</div>;

  if (error) {
    return (
      <div className="publication-reader-fallback">
        <p>No fue posible cargar el lector institucional.</p>
        <a href={url} target="_blank" rel="noopener noreferrer">Abrir PDF</a>
      </div>
    );
  }

  return (
    <div className="pdf-viewer" aria-label={title} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="pdf-viewer-toolbar">
        <span>{currentPage} / {totalPages}</span>
        <button onClick={() => setScale((s) => Math.max(0.75, s - 0.1))}>−</button>
        <button onClick={() => setScale((s) => Math.min(2, s + 0.1))}>+</button>
      </div>

      <div className="pdf-viewer-document">
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;
          return (
            <div key={page} data-page={page}>
              <PdfPage pdf={pdf} pageNumber={page} scale={scale} active={visiblePages.has(page)} onVisible={updateReadingPosition} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
