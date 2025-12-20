// pages/index.js
// Redirige siempre la raíz a /home (server-side)
export default function Index() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/home",
      permanent: false, // cambiar a true si quieres que sea un redirect 301 permanente
    },
  };
}