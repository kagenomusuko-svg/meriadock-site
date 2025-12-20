#!/usr/bin/env python3
"""
embed_colorable.py

Genera un SVG autocontenido que:
 - incrusta exactamente (sin modificar) tu PNG/JPG en base64,
 - usa la imagen incrustada como máscara (opcionalmente invertida)
   y pinta el área visible con `currentColor` para que el logo
   herede el color desde el CSS del contenedor donde lo insertes.

Uso:
  python3 embed_colorable.py in.png out.svg
  python3 embed_colorable.py in.png out.svg --width 648 --height 648
  python3 embed_colorable.py in.png out.svg --no-invert

Parámetros:
  input (posicional)   : ruta del PNG/JPG original (se usa tal cual).
  output (posicional)  : ruta del SVG a crear.
  --width / --height   : tamaño del viewport (por defecto 648x648).
  --no-invert          : no aplicar la inversión de color en la máscara.
                         Por defecto el script aplica inversión porque normalmente
                         los logos son negros sobre fondo blanco y necesitamos que
                         la parte negra actúe como "opacidad" en la máscara.
  --mime               : forzar mime type (image/png o image/jpeg). Si no se
                         especifica se infiere por la extensión.

Nota importante:
  - EL SCRIPT NO MODIFICA LA IMAGEN. Solo la codifica en base64 y la
    utiliza como fuente en el SVG.
  - Para que el SVG "coloree" con el color del header debes insertar
    el SVG inline en tu HTML (es decir, pegar el contenido del SVG dentro
    del <header>), de ese modo `currentColor` heredará el valor CSS.
    Si lo usas como <img src="..."> no heredará automáticamente.
"""
import argparse
import base64
import os
import sys

def detect_mime(path, forced=None):
    if forced:
        return forced
    ext = os.path.splitext(path)[1].lower()
    if ext in ('.jpg', '.jpeg'):
        return 'image/jpeg'
    return 'image/png'

def build_svg(data_uri, width, height, invert=True, viewbox=None):
    # Si se quiere que la máscara use directamente la transparencia (sin invertir)
    # se puede quitar el filtro de inversión. Aquí dejamos el filtro por defecto.
    vb = viewbox if viewbox else f"0 0 {width} {height}"
    invert_filter = ''
    mask_image = ''
    if invert:
        invert_filter = '''
    <filter id="invertFilter" x="0" y="0" width="1" height="1" color-interpolation-filters="sRGB">
      <feColorMatrix type="matrix" values="
         -1  0  0  0  1
          0 -1  0  0  1
          0  0 -1  0  1
          0  0  0  1  0"/>
    </filter>
'''
        mask_image = f'''
      <g filter="url(#invertFilter)">
        <image href="{data_uri}"
               x="0" y="0" width="{width}" height="{height}"
               preserveAspectRatio="xMidYMid meet" />
      </g>
'''
    else:
        mask_image = f'''
      <image href="{data_uri}"
             x="0" y="0" width="{width}" height="{height}"
             preserveAspectRatio="xMidYMid meet" />
'''

    svg = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg"
     width="{width}" height="{height}" viewBox="{vb}" role="img" aria-label="Sello AC (coloreable)">
  <desc>Logo incrustado (sin modificar) usado como máscara; relleno con currentColor.</desc>
  <defs>{invert_filter}
    <mask id="logoMask" maskUnits="userSpaceOnUse" x="0" y="0" width="{width}" height="{height}">
{mask_image}
    </mask>
  </defs>

  <!-- Relleno con currentColor recortado por la máscara -->
  <rect x="0" y="0" width="{width}" height="{height}" fill="currentColor" mask="url(#logoMask)"/>
</svg>'''
    return svg

def main():
    p = argparse.ArgumentParser(description="Embed image in SVG and make it colorable via currentColor (mask).")
    p.add_argument("input", help="PNG/JPG input file (kept unchanged).")
    p.add_argument("output", help="SVG output file to create.")
    p.add_argument("--width", type=int, default=648, help="SVG width (default 648).")
    p.add_argument("--height", type=int, default=648, help="SVG height (default 648).")
    p.add_argument("--no-invert", dest="invert", action="store_false", help="Don't invert the mask image (useful if image already has transparency).")
    p.add_argument("--mime", default=None, help="Force mime type (image/png or image/jpeg).")
    args = p.parse_args()

    if not os.path.exists(args.input):
        print("ERROR: archivo de entrada no existe:", args.input, file=sys.stderr)
        sys.exit(2)

    mime = detect_mime(args.input, forced=args.mime)
    if mime not in ("image/png", "image/jpeg"):
        print("WARNING: mime inusual detectado, se usará:", mime, file=sys.stderr)

    # Leer bytes y codificar base64
    with open(args.input, "rb") as f:
        raw = f.read()
    b64 = base64.b64encode(raw).decode("ascii")
    data_uri = f"data:{mime};base64,{b64}"

    svg = build_svg(data_uri, args.width, args.height, invert=args.invert)

    with open(args.output, "w", encoding="utf8") as f:
        f.write(svg)

    print(f"SVG creado: {args.output}")
    print("Instrucciones rápidas:")
    print(" - Para que el logo herede color del header, inserta el contenido del SVG INLINE dentro del <header> (no usar <img>).")
    print(" - Si ves el SVG como archivo, cambia el color por CSS poniendo (ej): header { color: #fff }")

if __name__ == "__main__":
    main()