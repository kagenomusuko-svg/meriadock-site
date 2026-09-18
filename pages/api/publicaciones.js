const CATALOG_URL =
  "https://raw.githubusercontent.com/kagenomusuko-svg/publicaciones/main/catalogo.json";
const RAW_BASE =
  "https://raw.githubusercontent.com/kagenomusuko-svg/publicaciones/main";

function rawUrl(path) {
  return `${RAW_BASE}/${String(path || "")
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/")}`;
}

export default async function handler(req, res) {
  try {
    const response = await fetch(CATALOG_URL, {
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      throw new Error(`No fue posible leer el catálogo: ${response.status}`);
    }

    const catalog = await response.json();
    const publications = Array.isArray(catalog)
      ? catalog.map((item) => ({
          ...item,
          coverUrl: rawUrl(item.cover),
          pdfUrl: rawUrl(item.pdf),
          readerUrl: item.slug ? `/publicaciones/${item.slug}` : null,
        }))
      : [];

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=900, stale-while-revalidate=86400"
    );
    res.status(200).json(publications);
  } catch (error) {
    console.error("Error cargando publicaciones:", error);
    res.status(502).json([]);
  }
}
