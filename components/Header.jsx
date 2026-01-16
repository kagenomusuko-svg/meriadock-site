import Link from "next/link";
import { useState, useRef, useEffect } from "react";

/*
  Header completo con:
  - dropdowns (Nosotros / Programas) en verde
  - cálculo dinámico de --header-offset (ResizeObserver + resize)
  - spacer justo después del header para separar el contenido fijo
*/
export default function Header() {
  const [openNosotros, setOpenNosotros] = useState(false);
  const [openProgramas, setOpenProgramas] = useState(false);
  const closeTimerNos = useRef(null);
  const closeTimerProg = useRef(null);
  const headerRef = useRef(null);

  // Limpiar timers al desmontar
  useEffect(() => () => {
    clearTimeout(closeTimerNos.current);
    clearTimeout(closeTimerProg.current);
  }, []);

  // Helpers dropdown
  function openWithCancel(ref) {
    clearTimeout(ref.current);
  }
  function closeWithDelay(ref, setter) {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => setter(false), 150);
  }

  // Cerrar con Escape (accesibilidad teclado)
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        setOpenNosotros(false);
        setOpenProgramas(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Calcular la altura real del header y exponerla en --header-offset
  useEffect(() => {
    const headerEl = headerRef.current || document.querySelector(".site-header");
    if (!headerEl) return;

    function setOffset() {
      const h = headerEl.offsetHeight || 0;
      document.documentElement.style.setProperty("--header-offset", `${h}px`);
    }

    setOffset();
    window.addEventListener("resize", setOffset);

    let ro;
    if (window.ResizeObserver) {
      ro = new ResizeObserver(setOffset);
      ro.observe(headerEl);
    }

    return () => {
      window.removeEventListener("resize", setOffset);
      if (ro) ro.disconnect();
    };
  }, []);

  const dropdownStyle = {
    backgroundColor: "#1E4C45",
    color: "#ffffff",
  };

  return (
    <>
      <header ref={headerRef} className="site-header fixed top-0 left-0 right-0 z-40 bg-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt="Logo AC"
              className="h-12 w-auto object-contain"
              style={{
                filter: "grayscale(1) brightness(0.95) invert(0.95) saturate(0%)",
                color: "#D9D9D9",
              }}
            />
            <div>
              <div className="text-sm font-semibold" style={{ color: "var(--meriadock-silver)" }}>
                Centro Multidisciplinario Meriadock
              </div>
              <div className="text-xs" style={{ color: "var(--meriadock-silver)" }}>
                Formación y Asesoría A.C.
              </div>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 text-sm items-center" style={{ color: "var(--meriadock-silver)" }}>
              <li><Link href="/home">Inicio</Link></li>

              {/* NOSOTROS */}
              <li
                className="relative"
                onMouseEnter={() => (openWithCancel(closeTimerNos), setOpenNosotros(true))}
                onMouseLeave={() => closeWithDelay(closeTimerNos, setOpenNosotros)}
              >
                <button
                  aria-haspopup="menu"
                  aria-expanded={openNosotros}
                  className="focus:outline-none"
                  onFocus={() => (openWithCancel(closeTimerNos), setOpenNosotros(true))}
                  onBlur={() => closeWithDelay(closeTimerNos, setOpenNosotros)}
                >
                  Nosotros ▾
                </button>

                {openNosotros && (
                  <ul
                    role="menu"
                    className="absolute top-full left-0 mt-2 border shadow-sm p-2 rounded z-50 min-w-[220px]"
                    style={{ ...dropdownStyle, borderColor: "#174036" }}
                  >
                    <li role="none" className="px-3 py-1">
                      <Link href="/nosotros/historia"><span className="text-white">Historia</span></Link>
                    </li>
                    <li role="none" className="px-3 py-1">
                      <Link href="/nosotros/marco-institucional"><span className="text-white">Marco institucional</span></Link>
                    </li>
                    <li role="none" className="px-3 py-1">
                      <Link href="/nosotros/directorio"><span className="text-white">Directorio</span></Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* EJES */}
              <li
                className="relative"
                onMouseEnter={() => (openWithCancel(closeTimerProg), setOpenProgramas(true))}
                onMouseLeave={() => closeWithDelay(closeTimerProg, setOpenProgramas)}
              >
                <button
                  aria-haspopup="menu"
                  aria-expanded={openProgramas}
                  className="focus:outline-none"
                  onFocus={() => (openWithCancel(closeTimerProg), setOpenProgramas(true))}
                  onBlur={() => closeWithDelay(closeTimerProg, setOpenProgramas)}
                >
                  Ejes ▾
                </button>

                {openProgramas && (
                  <ul
                    role="menu"
                    className="absolute top-full left-0 mt-2 border shadow-sm p-2 rounded z-50 min-w-[220px]"
                    style={{ ...dropdownStyle, borderColor: "#174036" }}
                  >
                    <li role="none" className="px-3 py-1">
                      <Link href="/programas/eco"><span className="text-white">RED</span></Link>
                    </li>
                    <li role="none" className="px-3 py-1">
                      <Link href="/programas/manos"><span className="text-white">MANOS</span></Link>
                    </li>
                    <li role="none" className="px-3 py-1">
                      <Link href="/programas/rio"><span className="text-white">RIO</span></Link>
                    </li>
                  </ul>
                )}
              </li>

              <li><Link href="/publicaciones">Publicaciones</Link></li>
              <li><Link href="/donaciones">Donaciones</Link></li>
              <li><Link href="https://intranet.meriadock.org.mx/login">Intranet</Link></li>
            </ul>
          </nav>

          {/* Mobile button */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>

        <div className="border-t" style={{ borderColor: "rgba(217,217,217,0.08)" }} />
      </header>

      {/* Spacer: asegura que el contenido comience después del header fixed.
          La altura viene de --header-offset (actualizada por el useEffect). */}
      <div aria-hidden="true" style={{ height: "var(--header-offset)" }} />
    </>
  );
}

/* Mobile menu component */
function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen((s) => !s)} className="text-sm">
        {open ? "Cerrar ▴" : "Menú ▾"}
      </button>

      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-2 text-sm">
              <li><Link href="/">Inicio</Link></li>

              <li>
                <details>
                  <summary className="cursor-pointer">Nosotros</summary>
                  <ul className="pl-4 mt-2 space-y-1">
                    <li><Link href="/nosotros/historia">Historia</Link></li>
                    <li><Link href="/nosotros/marco-institucional">Marco institucional</Link></li>
                    <li><Link href="/nosotros/directorio">Directorio</Link></li>
                  </ul>
                </details>
              </li>

              <li>
                <details>
                  <summary className="cursor-pointer">Ejes</summary>
                  <ul className="pl-4 mt-2 space-y-1">
                    <li><Link href="/programas/eco">RED</Link></li>
                    <li><Link href="/programas/manos">MANOS</Link></li>
                    <li><Link href="/programas/rio">RIO</Link></li>
                  </ul>
                </details>
              </li>

              <li><Link href="/publicaciones">Publicaciones</Link></li>
              <li><Link href="/donaciones">Donaciones</Link></li>
              <li><Link href="https://intranet.meriadock.org.mx/login">Intranet</Link></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
