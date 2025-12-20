// inline-svg.js
// Busca elementos con data-src (apuntando a un archivo .svg) y los reemplaza por el SVG inline.
// Esto permite que fill="currentColor" dentro del SVG herede el color CSS del contenedor.
// Uso: <div class="ac-logo" data-src="/assets/logo.svg"></div>
// Incluye este script con defer: <script src="/scripts/inline-svg.js" defer></script>

(function () {
  async function inlineSVGs(scope=document) {
    const els = Array.from(scope.querySelectorAll('[data-src$=".svg"]'));
    if (!els.length) return;

    // cache para evitar múltiples fetch del mismo archivo
    const cache = {};
    await Promise.all(els.map(async el => {
      const src = el.getAttribute('data-src');
      if (!src) return;
      try {
        let svgText;
        if (cache[src]) {
          svgText = cache[src];
        } else {
          const res = await fetch(src, {cache: 'force-cache'});
          if (!res.ok) throw new Error('Fetch failed: ' + res.status);
          svgText = await res.text();
          cache[src] = svgText;
        }

        // Parsear como SVG XML
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgText, "image/svg+xml");
        const svgEl = doc.documentElement;

        // Si no es <svg>, fallback a insertar <img>
        if (!svgEl || svgEl.nodeName.toLowerCase() !== 'svg') {
          const img = document.createElement('img');
          img.src = src;
          img.alt = el.getAttribute('aria-label') || '';
          el.replaceWith(img);
          return;
        }

        // Transferir id/class/aria-role del contenedor original al svg si quieres
        // Copiar atributos útiles
        const originalClasses = el.getAttribute('class');
        if (originalClasses) {
          // añade la clase al svg (no la sobreescribe)
          const prev = svgEl.getAttribute('class') || '';
          svgEl.setAttribute('class', (prev + ' ' + originalClasses).trim());
        }

        // Asegurar que preserveAspectRatio exista
        if (!svgEl.getAttribute('preserveAspectRatio')) {
          svgEl.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        }

        // Si el contenedor tenía ancho/alto por CSS, respetarlo.
        // Conserva atributos width/height del SVG (si están), pero permitimos control por CSS.
        svgEl.style.width = '100%';
        svgEl.style.height = 'auto';

        // Reemplazar el elemento contenedor por el SVG inline
        el.replaceWith(svgEl);
      } catch (err) {
        console.error('inline-svg error for', src, err);
        // fallback: insertar <img>
        try {
          const img = document.createElement('img');
          img.src = src;
          img.alt = el.getAttribute('aria-label') || '';
          el.replaceWith(img);
        } catch(e){}
      }
    }));
  }

  // Ejecutar al cargar (si usas defer el DOM ya estará listo)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => inlineSVGs());
  } else {
    inlineSVGs();
  }
})();
```


Qué hice y por qué
- Te doy dos formas de que el logo herede el color del header:
  1) Pegar el contenido del SVG (logo.svg) directamente dentro del header (inline) — el más simple y directo.
  2) Mantener logo.svg como archivo y usar el script scripts/inline-svg.js para traerlo y reemplazar el contenedor por el SVG inline automáticamente (esto respeta “no tocar” el archivo logo.svg).
- Modifiqué la estructura HTML del footer para:
  - Poner el sello a la izquierda (uso de misma logo.svg).
  - Mostrar el nombre de la AC y la frase en cursiva debajo (ac-tagline).
  - Añadir “Queremos escucharte” como item debajo de Institucional, con la misma estructura de menú (ul.menu) que usas arriba.
- Añadí CSS ejemplo para que:
  - header tenga color: #D9D9D9 (para que currentColor sea ese).
  - controles de tamaño del logo en header y footer (48px y 96px; ajusta si quieres otro).
  - estilos de menus en footer coincidan con los menús de arriba.

Pasos prácticos que debes hacer ahora (rápido)
1) Coloca logo.svg en /assets/logo.svg (o ajusta data-src en header/footer al path correcto).
2) Añade los fragmentos header.html y footer.html en tu plantilla donde correspondan.
3) Añade las reglas CSS (o incorpora a tu CSS existente).
4) Incluye el script inline-svg.js y prueba abriendo la página:
   - <script src="/scripts/inline-svg.js" defer></script>
5) Verifica en la consola si hubo errores de fetch; si el SVG no se carga, el script inserta un <img> como fallback.

Notas finales y ajustes recomendados
- Si ya inyectaste logo.svg directo (copiando su XML dentro del div), no necesitas el script.
- Si el logo sigue apareciendo en negro, verifica:
  - Que el SVG inline realmente use fill="currentColor" (si usaste mi script embed_colorable.py para generar logo.svg, lo hace).
  - Que la regla .site-header { color: #D9D9D9 } esté aplicada y no sobreescrita por otra.
  - En inspector, revisa el elemento SVG: si se carga via <img> o background-image no heredará currentColor; debe ser nodo <svg>.
- Si quieres, pega aquí el contenido de tu logo.svg (si lo quieres que lo revise) o un fragmento del header actual (HTML + cómo estás incluyendo el logo) y ajusto exactamente lo necesario para que tome #D9D9D9 y se muestre el sello grande en footer con el tagline y el nuevo menú.

¿Lo quieres que lo ajuste ahora en tu plantilla si me pegas el header.html y footer.html actuales (o el repository)?