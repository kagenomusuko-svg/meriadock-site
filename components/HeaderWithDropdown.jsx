import Link from "next/link";
import { useState } from "react";

export default function HeaderWithDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header fixed top-0 left-0 right-0 z-40 bg-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Logo AC" className="h-12 w-12 object-contain" />
          <div>
            <div className="text-sm font-semibold" style={{ color: "var(--meriadock-silver)" }}>
              Centro Multidisciplinario Meriadock
            </div>
            <div className="text-xs" style={{ color: "var(--meriadock-silver)" }}>
              Formación y Asesoría A.C.
            </div>
          </div>
        </div>

        <nav>
          <ul className="hidden md:flex gap-6 text-sm" style={{ color: "var(--meriadock-silver)" }}>
            <li><Link href="/">Inicio</Link></li>

            <li
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button className="focus:outline-none">Nosotros ▾</button>
              {open && (
                <ul className="absolute top-full left-0 mt-2 bg-white border shadow-sm p-2 rounded">
                  <li className="px-3 py-1"><Link href="/nosotros/historia">Historia</Link></li>
                  <li className="px-3 py-1"><Link href="/nosotros/marco-institucional">Marco institucional</Link></li>
                  <li className="px-3 py-1"><Link href="/nosotros/directorio">Directorio</Link></li>
                </ul>
              )}
            </li>

            <li><Link href="/programas">Programas</Link></li>
            <li><Link href="/publicaciones">Publicaciones</Link></li>
            <li><Link href="/donaciones">Donaciones</Link></li>
          </ul>

          <div className="md:hidden" style={{ color: "var(--meriadock-silver)" }}>
            <Link href="/nosotros">Menú</Link>
          </div>
        </nav>
      </div>
      <div className="border-t" style={{ borderColor: "rgba(217,217,217,0.08)" }} />
    </header>
  );
}