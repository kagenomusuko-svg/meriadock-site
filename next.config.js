/** Archivo de configuración Next.js mínimo */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Añadir dominios si usas imágenes externas
    domains: ["images.unsplash.com", "cdn.sanity.io"]
  },
  async redirects() {
    return [
      // Redirecciones de documentos
      {
        source: '/aviso-privacidad', // URL amigable en tu página
        destination: 'https://drive.google.com/uc?export=view&id=1mKxdXj106k60bkj-gdV2Z853xdLtCjj1', // Google Drive (directo)
        permanent: true,
      },
      {
        source: '/codigo-conducta', // URL amigable para Código de Conducta
        destination: 'https://drive.google.com/uc?export=view&id=2xYKaJv7890fghH1234abcdEfgh5678', // Google Drive (directo)
        permanent: true,
      }
      // Aquí podrías seguir añadiendo nuevos documentos con el mismo formato
    ];
  }
};

module.exports = nextConfig;
