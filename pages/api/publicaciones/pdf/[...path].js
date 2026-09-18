export default async function handler(req, res) {
  try {
    const parts = Array.isArray(req.query.path) ? req.query.path : [];
    const pdfPath = parts.map((part) => encodeURIComponent(part)).join("/");

    const url = `https://raw.githubusercontent.com/kagenomusuko-svg/publicaciones/main/${pdfPath}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`No fue posible obtener el PDF: ${response.status}`);
    }

    const buffer = await response.arrayBuffer();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=604800");
    res.status(200).send(Buffer.from(buffer));
  } catch (error) {
    console.error("Error sirviendo PDF institucional:", error);
    res.status(502).json({ error: "No fue posible cargar el PDF" });
  }
}
