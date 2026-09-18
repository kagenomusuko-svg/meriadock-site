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
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      await page.render({ canvasContext: canvas.getContext("2d"), viewport }).promise;
      if (!cancelled) onVisible?.(pageNumber);
    }

    render();
    return () => {
      cancelled = true;
    };
  }, [pdf, pageNumber, scale, active, onVisible]);

  return <div className="pdf-viewer-page" id={`page-${pageNumber}`}>
    {active ? <canvas ref={canvasRef} className="pdf-viewer-canvas" /> : <div className="pdf-viewer-placeholder">Página {pageNumber}</div>}
  </div>;
}

export default function PdfViewer({ url, title }) {
  const [pdf, setPdf] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [targetPage, setTargetPage] = useState(1);
  const [scale, setScale] = useState(1.15);
  const [visiblePages, setVisiblePages] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const storageKey = `meriadock-reader:${url}`;

  useEffect(() => {
    const saved = Number(localStorage.getItem(storageKey));
    if (saved) setCurrentPage(saved);
  }, [storageKey]);

  useEffect(() => {
    async function load() {
      try {
        const pdfjs = await import("pdfjs-dist/build/pdf");
        pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();
        const doc = await pdfjs.getDocument(url).promise;
        setPdf(doc);
        setTotalPages(doc.numPages);
        setVisiblePages(new Set([1, 2, 3]));
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [url]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      setVisiblePages(current => {
        const next = new Set(current);
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const page = Number(entry.target.dataset.page);
            next.add(page);
            if (page > 1) next.add(page - 1);
            if (page < totalPages) next.add(page + 1);
            setCurrentPage(page);
            localStorage.setItem(storageKey, page);
          }
        });
        return new Set([...next].filter(p => Math.abs(p - currentPage) <= 5));
      });
    }, { rootMargin: "700px" });

    document.querySelectorAll("[data-page]").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [totalPages, storageKey, currentPage]);

  function goToPage() {
    const page = Math.min(Math.max(Number(targetPage), 1), totalPages);
    document.getElementById(`page-${page}`)?.scrollIntoView({ behavior: "smooth" });
  }

  if (loading) return <div>Cargando publicación…</div>;
  if (error) return <a href={url}>Abrir PDF</a>;

  return <div className="pdf-viewer" aria-label={title}>
    <div className="pdf-viewer-toolbar">
      <span>{currentPage} / {totalPages}</span>
      <input type="number" min="1" max={totalPages} value={targetPage} onChange={e => setTargetPage(e.target.value)} />
      <button onClick={goToPage}>Ir</button>
      <button onClick={() => setScale(s => Math.max(.75, s - .1))}>−</button>
      <button onClick={() => setScale(s => Math.min(2, s + .1))}>+</button>
    </div>
    <div className="pdf-viewer-document">
      {Array.from({ length: totalPages }, (_, i) => {
        const page = i + 1;
        return <div key={page} data-page={page}><PdfPage pdf={pdf} pageNumber={page} scale={scale} active={visiblePages.has(page)} onVisible={setCurrentPage} /></div>;
      })}
    </div>
  </div>;
}
