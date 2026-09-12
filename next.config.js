/** Archivo de configuración Next.js mínimo */
const aqorathTechnologyOrigin = process.env.AQORATH_TECHNOLOGY_ORIGIN?.replace(/\/$/, '');

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
        destination: 'https://drive.google.com/file/d/1mKxdXj106k60bkj-gdV2Z853xdLtCjj1/view?usp=sharing', // Google Drive (directo)
        permanent: true,
      },
      {
        source: '/codigo-conducta', // URL amigable para Código de Conducta
        destination: 'https://drive.google.com/file/d/1Y5Rs_k7hA6lJV3v2367QdkUAAb-8BLSn/view?usp=sharing', // Google Drive (directo)
        permanent: true,
      }
      // Aquí podrías seguir añadiendo nuevos documentos con el mismo formato
    ];
  },
  async rewrites() {
    const routes = [
      // Rewrite para Academia Meriadock - mantiene la URL en el navegador
      {
        source: '/academia',
        destination: 'https://meriadock-academy-six.vercel.app/academia',
      },
      {
        source: '/academia/:path*',
        destination: 'https://meriadock-academy-six.vercel.app/academia/:path*',
      },
      // Rewrite para Diálogos Eleatas - mantiene la URL institucional
      {
        source: '/dialogos-eleatas',
        destination: 'https://dialogos-eleatas.vercel.app/dialogos-eleatas',
      },
      {
        source: '/dialogos-eleatas/:path*',
        destination: 'https://dialogos-eleatas.vercel.app/dialogos-eleatas/:path*',
      },
      // Rewrite para Gaceta Institucional - mantiene la URL institucional
      {
        source: '/gaceta',
        destination: 'https://gaceta-hilario-olveras-projects.vercel.app/gaceta',
      },
      {
        source: '/gaceta/:path*',
        destination: 'https://gaceta-hilario-olveras-projects.vercel.app/gaceta/:path*',
      }
    ];

    // Aqorath se habilita como microfrontend cuando exista un origen desplegado.
    // Mientras tanto, /tecnologia/aqorath usa la página fallback institucional local,
    // evitando publicar una ruta rota durante el alta inicial del proyecto.
    if (aqorathTechnologyOrigin) {
      routes.unshift(
        {
          source: '/tecnologia/aqorath',
          destination: `${aqorathTechnologyOrigin}/tecnologia/aqorath`,
        },
        {
          source: '/tecnologia/aqorath/:path*',
          destination: `${aqorathTechnologyOrigin}/tecnologia/aqorath/:path*`,
        }
      );
    }

    return routes;
  }
};

module.exports = nextConfig;
