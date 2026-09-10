import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [openConocenos, setOpenConocenos] = useState(false);
  const [openEjes, setOpenEjes] = useState(false);
  const closeTimerConocenos = useRef(null);
  const closeTimerEjes = useRef(null);
  const headerRef = useRef(null);

  useEffect(
    () => () => {
      clearTimeout(closeTimerConocenos.current);
      clearTimeout(closeTimerEjes.current);
    },
    []
  );

  function openWithCancel(ref) {
    clearTimeout(ref.current);
  }

  function closeWithDelay(ref, setter) {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => setter(false), 150);
  }

  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape") {
        setOpenConocenos(false);
        setOpenEjes(false);
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const headerEl = headerRef.current || document.querySelector(".site-header");
    if (!headerEl) return;

    function setOffset() {
      document.documentElement.style.setProperty(
        "--header-offset",
        `${headerEl.offsetHeight || 0}px`
      );
    }

    setOffset();
    window.addEventListener("resize", setOffset);

    let resizeObserver;
    if (window.ResizeObserver) {
      resizeObserver = new ResizeObserver(setOffset);
      resizeObserver.observe(headerEl);
    }

    return () => {
      window.removeEventListener("resize", setOffset);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  const dropdownStyle = {
    backgroundColor: "#1E4C45",
    color: "#ffffff",
    borderColor: "#174036",
  };

  return (
    <>
      <header
        ref={headerRef}
        className="site-header fixed top-0 left-0 right-0 z-40 bg-white"
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-6">
          <Link
            href="/home"
            className="flex items-center gap-3 shrink-0"
            aria-label="Ir al inicio de Meriadock"
          >
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
              <div
                className="text-sm font-semibold"
                style={{ color: "var(--meriadock-silver)" }}
              >
                Centro Multidisciplinario Meriadock
              </div>
              <div
                className="text-xs"
                style={{ color: "var(--meriadock-silver)" }}
              >
                Formación y Asesoría A.C.
              </div>
            </div>
          </Link>

          <nav className="hidden xl:block" aria-label="Navegación principal">
            <ul
              className="flex gap-4 text-sm items-center whitespace-nowrap"
              style={{ color: "var(--meriadock-silver)" }}
            >
              <li
                className="relative"
                onMouseEnter={() => {
                  openWithCancel(closeTimerConocenos);
                  setOpenConocenos(true);
                }}
                onMouseLeave={() =>
                  closeWithDelay(closeTimerConocenos, setOpenConocenos)
                }
              >
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={openConocenos}
                  className="focus:outline-none"
                  onFocus={() => {
                    openWithCancel(closeTimerConocenos);
                    setOpenConocenos(true);
                  }}
                  onBlur={() =>
                    closeWithDelay(closeTimerConocenos, setOpenConocenos)
                  }
                >
                  Conócenos ▾
                </button>

                {openConocenos && (
                  <ul
                    role="menu"
                    className="absolute top-full left-0 mt-2 border shadow-sm p-2 rounded z-50 min-w-[240px]"
                    style={dropdownStyle}
                  >
                    <li className="px-3 py-1 text-white">Nuestro equipo</li>
                    <li className="px-3 py-1 text-white">
                      Transparencia y convenios
                    </li>
                  </ul>
                )}
              </li>

              <li
                className="relative"
                onMouseEnter={() => {
                  openWithCancel(closeTimerEjes);
                  setOpenEjes(true);
                }}
                onMouseLeave={() => closeWithDelay(closeTimerEjes, setOpenEjes)}
              >
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={openEjes}
                  className="focus:outline-none"
                  onFocus={() => {
                    openWithCancel(closeTimerEjes);
                    setOpenEjes(true);
                  }}
                  onBlur={() => closeWithDelay(closeTimerEjes, setOpenEjes)}
                >
                  Ejes ▾
                </button>

                {openEjes && (
                  <ul
                    role="menu"
                    className="absolute top-full left-0 mt-2 border shadow-sm p-2 rounded z-50 min-w-[270px]"
                    style={dropdownStyle}
                  >
                    <li className="px-3 py-1 text-white">
                      Desarrollo social y comunitario
                    </li>
                    <li className="px-3 py-1 text-white">
                      Investigación y desarrollo
                    </li>
                    <li className="px-3 py-1 text-white">
                      Educación y formación
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link href="/academia">Academia</Link>
              </li>
              <li>
                <span>Tecnología</span>
              </li>
              <li>
                <Link href="/dialogos-eleatas">Diálogos eleatas</Link>
              </li>
              <li>
                <Link href="/gaceta">Gaceta</Link>
              </li>
              <li>
                <span>Colabora</span>
              </li>
            </ul>
          </nav>

          <div className="xl:hidden">
            <MobileMenu />
          </div>
        </div>

        <div
          className="border-t"
          style={{ borderColor: "rgba(217,217,217,0.08)" }}
        />
      </header>

      <div aria-hidden="true" style={{ height: "var(--header-offset)" }} />
    </>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="text-sm"
        aria-expanded={open}
        aria-controls="mobile-main-menu"
      >
        {open ? "Cerrar ▴" : "Menú ▾"}
      </button>

      {open && (
        <div
          id="mobile-main-menu"
          className="xl:hidden bg-white border-t absolute left-0 right-0 top-full"
        >
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-3 text-sm">
              <li>
                <details>
                  <summary className="cursor-pointer">Conócenos</summary>
                  <ul className="pl-4 mt-2 space-y-2">
                    <li>Nuestro equipo</li>
                    <li>Transparencia y convenios</li>
                  </ul>
                </details>
              </li>

              <li>
                <details>
                  <summary className="cursor-pointer">Ejes</summary>
                  <ul className="pl-4 mt-2 space-y-2">
                    <li>Desarrollo social y comunitario</li>
                    <li>Investigación y desarrollo</li>
                    <li>Educación y formación</li>
                  </ul>
                </details>
              </li>

              <li>
                <Link href="/academia">Academia</Link>
              </li>
              <li>Tecnología</li>
              <li>
                <Link href="/dialogos-eleatas">Diálogos eleatas</Link>
              </li>
              <li>
                <Link href="/gaceta">Gaceta</Link>
              </li>
              <li>Colabora</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
