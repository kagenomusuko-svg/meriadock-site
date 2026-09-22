/** Archivo de configuración Next.js mínimo */
const aqorathTechnologyOrigin = process.env.AQORATH_TECHNOLOGY_ORIGIN?.replace(/\/$/, '');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "cdn.sanity.io"]
  },
  async redirects() {
    return [
      {
        source: '/aviso-privacidad',
        destination: 'https://drive.google.com/file/d/1mKxdXj106k60bkj-gdV2Z853xdLtCjj1/view?usp=sharing',
        permanent: true,
      },
      {
        source: '/codigo-conducta',
        destination: 'https://drive.google.com/file/d/1Y5Rs_k7hA6lJV3v2367QdkUAAb-8BLSn/view?usp=sharing',
        permanent: true,
      }
    ];
  },
  async rewrites() {
    const routes = [
      {
        source: '/academia',
        destination: 'https://meriadock-academy-six.vercel.app/academia',
      },
      {
        source: '/academia/:path*',
        destination: 'https://meriadock-academy-six.vercel.app/academia/:path*',
      },
      {
        source: '/revisor',
        destination: 'https://dialogos-eleatas-hilario-olveras-projects.vercel.app/revisor',
      },
      {
        source: '/revisor/:path*',
        destination: 'https://dialogos-eleatas-hilario-olveras-projects.vercel.app/revisor/:path*',
      },
      {
        source: '/dialogos-eleatas',
        destination: 'https://dialogos-eleatas.vercel.app/dialogos-eleatas',
      },
      {
        source: '/dialogos-eleatas/:path*',
        destination: 'https://dialogos-eleatas.vercel.app/dialogos-eleatas/:path*',
      },
      {
        source: '/gaceta',
        destination: 'https://gaceta-hilario-olveras-projects.vercel.app/gaceta',
      },
      {
        source: '/gaceta/:path*',
        destination: 'https://gaceta-hilario-olveras-projects.vercel.app/gaceta/:path*',
      },
      {
        source: '/publicaciones',
        destination: 'https://publicaciones-sepia.vercel.app/publicaciones',
      },
      {
        source: '/publicaciones/:path*',
        destination: 'https://publicaciones-sepia.vercel.app/publicaciones/:path*',
      }
    ];

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
