#!/usr/bin/env python3
# Uso: python3 embed.py ac_seal.png ac_seal-embedded.svg
import sys, base64, os

if len(sys.argv) < 3:
    print("Uso: python3 embed.py input.png output.svg")
    sys.exit(1)

inp = sys.argv[1]
out = sys.argv[2]

if not os.path.exists(inp):
    print("No existe:", inp)
    sys.exit(2)

with open(inp, "rb") as f:
    b64 = base64.b64encode(f.read()).decode("ascii")

# Detecta tipo MIME por extensión
mime = "image/png"
if inp.lower().endswith((".jpg", ".jpeg")):
    mime = "image/jpeg"

svg = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="648" height="648" viewBox="0 0 648 648" role="img" aria-label="Sello AC (incrustado)">
  <desc>PNG incrustada dentro de SVG (no se modifica la imagen)</desc>
  <image href="data:{mime};base64,{b64}" x="0" y="0" width="648" height="648" preserveAspectRatio="xMidYMid meet" />
</svg>
'''
with open(out, "w", encoding="utf8") as f:
    f.write(svg)

print("SVG creado:", out)