/** Archivo de configuración Next.js mínimo */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // añadir dominios si usas imágenes externas
    domains: ["images.unsplash.com", "cdn.sanity.io"]
  }
};

module.exports = nextConfig;