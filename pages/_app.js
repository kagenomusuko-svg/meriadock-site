import '../styles/globals.css';
import Head from 'next/head'; // Importamos el componente Head

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Head global para toda la aplicación */}
      <Head>
        <title>Meriadock</title> {/* Aquí defines el nombre que aparece en la pestaña */}
        {/* Configuración del favicon */}
        {/* Favicons modernos en formato PNG */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        {/* Respaldo para navegadores antiguos con favicon.ico */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Renderizamos el resto de la página */}
      <Component {...pageProps} />
    </>
  );
}
