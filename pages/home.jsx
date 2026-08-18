import { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  const [news] = useState([
    {
      id: 1,
      title: "Nueva convocatoria de becas 2024",
      description: "Abierta la inscripción para nuestro programa de formación profesional",
      date: "15 de agosto, 2024",
    },
    {
      id: 2,
      title: "Resultados del proyecto RED",
      description: "Conoce los avances de nuestro eje de investigación y desarrollo",
      date: "12 de agosto, 2024",
    },
    {
      id: 3,
      title: "Taller de capacitación MANOS",
      description: "Próxima sesión: desarrollo comunitario y emprendimiento",
      date: "8 de agosto, 2024",
    },
    {
      id: 4,
      title: "Iniciativa RIO: conexión comunitaria",
      description: "Nuevo ciclo de talleres y encuentros comunitarios",
      date: "5 de agosto, 2024",
    },
    {
      id: 5,
      title: "Publicación de investigación",
      description: "Artículo disponible sobre metodologías de impacto social",
      date: "1 de agosto, 2024",
    },
  ]);

  const carouselRef = useRef(null);

  return (
    <>
      <Header />

      <main className="home-main">
        {/* 1. SLIDER PRINCIPAL */}
        <section className="slider-principal">
          <div className="slider-placeholder">
            [Slider principal - Academia, Gaceta, Tecnología, Colabora con nosotros]
          </div>
        </section>

        <div className="divider"></div>

        {/* 2. NOTICIAS Y CONVOCATORIAS - CARRUSEL */}
        <section className="news-section">
          <h2 className="section-title">Noticias y convocatorias</h2>

          <div className="carousel-container">
            <div className="carousel-track" ref={carouselRef}>
              {news.map((item) => (
                <article key={item.id} className="news-card">
                  <div className="news-card-img">[Imagen]</div>
                  <div className="news-card-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <span className="news-date">{item.date}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* 3. QUIÉNES SOMOS / QUÉ HACEMOS */}
        <section className="about-section">
          <div className="about-grid">
            {/* Quiénes somos */}
            <div className="about-column">
              <h3>Quiénes somos</h3>
              <p>
                Somos una organización de la sociedad civil que desarrolla iniciativas sociales,
                educativas, científicas y tecnológicas. Reunimos distintas disciplinas y experiencias
                para crear proyectos de formación, trabajo comunitario, investigación y desarrollo de
                herramientas, tanto de manera propia como en colaboración con otras instituciones y
                comunidades.
              </p>
            </div>

            {/* Qué hacemos */}
            <div className="about-column">
              <h3>Qué hacemos</h3>
              <ul className="axes-list">
                <li className="axes-item">
                  <strong>
                    <Link href="/programas/eco">Desarrollo social</Link>
                  </strong>
                  <p>
                    Diseñamos y realizamos programas, talleres, acciones de acompañamiento y proyectos
                    orientados a generar o ampliar condiciones materiales de posibilidad para personas
                    y comunidades.
                  </p>
                </li>
                <li className="axes-item">
                  <strong>
                    <Link href="/programas/rio">Investigación y desarrollo</Link>
                  </strong>
                  <p>
                    Generamos y examinamos conocimiento, métodos, instrumentos y herramientas que
                    puedan ampliar nuestra capacidad para comprender y abordar distintos problemas.
                  </p>
                </li>
                <li className="axes-item">
                  <strong>
                    <Link href="/programas/manos">Educación y formación</Link>
                  </strong>
                  <p>
                    Creamos espacios que permiten explorar campos de conocimiento y prácticas de manera
                    estructurada, tanto mediante propuestas propias como a través de futuras alianzas y
                    programas académicos.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}