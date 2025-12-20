import '../styles/globals.css';
import Head from 'next/head'; // Importamos el componente Head

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Head global para toda la aplicación */}
      <Head>
        <title>Meriadock</title> {/* Aquí defines el nombre que aparece en la pestaña */}
        <link rel="icon" href="/favicon.ico" /> {/* Enlace al favicon */}
      </Head>
      {/* Renderizamos el resto de la página */}
      <Component {...pageProps} />
    </>
  );
}
