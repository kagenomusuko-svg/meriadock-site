import Link from "next/link";
import { useRouter } from "next/router";
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
                  onBlur={() => closeWithDelay(closeTimerEjes, setOpenEjes)
                  }
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
  const router = useRouter();

  const navItemClass = (href) => {
    const active = router.pathname === href;

    return [
      "flex min-h-[48px] items-center border-l-[3px] px-5 text-sm transition-colors",
      active
        ? "border-[#1E4C45] bg-[#F4F8F7] font-semibold text-[#1E4C45]"
        : "border-transparent font-medium text-[#111827] hover:bg-[#F4F8F7] hover:text-[#1E4C45] focus-visible:bg-[#F4F8F7] focus-visible:text-[#1E4C45] focus-visible:outline-none",
    ].join(" ");
  };

  const staticItemClass =
    "flex min-h-[48px] items-center border-l-[3px] border-transparent px-5 text-sm font-medium text-[#111827]";

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
          className="xl:hidden absolute left-0 right-0 top-full border-t border-[#E5E7EB] bg-white text-[#111827] shadow-lg"
        >
          <div className="container mx-auto py-2">
            <ul className="text-sm">
              <li className="border-b border-[#E5E7EB]">
                <details>
                  <summary className="flex min-h-[48px] cursor-pointer items-center px-5 font-medium text-[#111827] transition-colors hover:bg-[#F4F8F7] hover:text-[#1E4C45] focus-visible:bg-[#F4F8F7] focus-visible:text-[#1E4C45] focus-visible:outline-none">
                    Conócenos
                  </summary>
                  <ul className="border-t border-[#E5E7EB] bg-[#FAFBFB] py-1">
                    <li className="flex min-h-[44px] items-center px-9 text-[#374151]">
                      Nuestro equipo
                    </li>
                    <li className="flex min-h-[44px] items-center px-9 text-[#374151]">
                      Transparencia y convenios
                    </li>
                  </ul>
                </details>
              </li>

              <li className="border-b border-[#E5E7EB]">
                <details>
                  <summary className="flex min-h-[48px] cursor-pointer items-center px-5 font-medium text-[#111827] transition-colors hover:bg-[#F4F8F7] hover:text-[#1E4C45] focus-visible:bg-[#F4F8F7] focus-visible:text-[#1E4C45] focus-visible:outline-none">
                    Ejes
                  </summary>
                  <ul className="border-t border-[#E5E7EB] bg-[#FAFBFB] py-1">
                    <li className="flex min-h-[44px] items-center px-9 text-[#374151]">
                      Desarrollo social y comunitario
                    </li>
                    <li className="flex min-h-[44px] items-center px-9 text-[#374151]">
                      Investigación y desarrollo
                    </li>
                    <li className="flex min-h-[44px] items-center px-9 text-[#374151]">
                      Educación y formación
                    </li>
                  </ul>
                </details>
              </li>

              <li className="border-b border-[#E5E7EB]">
                <Link
                  href="/academia"
                  className={navItemClass("/academia")}
                  onClick={() => setOpen(false)}
                >
                  Academia
                </Link>
              </li>
              <li className="border-b border-[#E5E7EB]">
                <span className={staticItemClass}>Tecnología</span>
              </li>
              <li className="border-b border-[#E5E7EB]">
                <Link
                  href="/dialogos-eleatas"
                  className={navItemClass("/dialogos-eleatas")}
                  onClick={() => setOpen(false)}
                >
                  Diálogos eleatas
                </Link>
              </li>
              <li className="border-b border-[#E5E7EB]">
                <Link
                  href="/gaceta"
                  className={navItemClass("/gaceta")}
                  onClick={() => setOpen(false)}
                >
                  Gaceta
                </Link>
              </li>
              <li>
                <span className={staticItemClass}>Colabora</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
