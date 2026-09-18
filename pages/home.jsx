import { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  const [publications, setPublications] = useState([]);
  const [publicationsLoading, setPublicationsLoading] = useState(true);
  const carouselRef = useRef(null);

  useEffect(() => {
    let active = true;

    async function loadPublications() {
      try {
        const response = await fetch("/api/publicaciones");
        if (!response.ok) throw new Error("No fue posible cargar las publicaciones");
        const data = await response.json();
        if (active) setPublications(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);
        if (active) setPublications([]);
      } finally {
        if (active) setPublicationsLoading(false);
      }
    }

    loadPublications();
    return () => {
      active = false;
    };
  }, []);

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

        {/* 2. PUBLICACIONES - CARRUSEL */}
        <section className="publications-section">
          <h2 className="section-title">Publicaciones</h2>

          <div className="carousel-container">
            <div className="carousel-track" ref={carouselRef}>
              {publicationsLoading ? (
                <div className="publications-status">Cargando publicaciones…</div>
              ) : publications.length ? (
                publications.map((item) => (
                  <Link
                    key={item.id}
                    href={item.readerUrl || item.pdfUrl}
                    className="publication-card-link"
                    aria-label={`Leer ${item.title}: ${item.subtitle}`}
                  >
                    <article className="publication-card">
                      <div className="publication-cover-wrap">
                        <img
                          src={item.coverUrl}
                          alt={`Portada de ${item.title}: ${item.subtitle}`}
                          className="publication-cover"
                          loading="lazy"
                        />
                      </div>

                      <div className="publication-card-content">
                        {item.volume ? (
                          <span className="publication-volume">{item.volume}</span>
                        ) : null}
                        <h4>{item.title}</h4>
                        <p className="publication-subtitle">{item.subtitle}</p>
                        {item.description ? (
                          <p className="publication-description">{item.description}</p>
                        ) : null}
                        <div className="publication-meta">
                          <span>{item.author}</span>
                          <span>{item.year}</span>
                        </div>
                        <span className="publication-action">Leer publicación →</span>
                      </div>
                    </article>
                  </Link>
                ))
              ) : (
                <div className="publications-status">
                  No hay publicaciones disponibles en este momento.
                </div>
              )}
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* 3. QUIÉNES SOMOS / QUÉ HACEMOS */}
        <section className="about-section">
          <div className="about-grid">
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

            <div className="about-column">
              <h3>Qué hacemos</h3>
              <ul className="axes-list">
                <li className="axes-item">
                  <strong>
                    <Link href="/programas/eco">Desarrollo social y comunitario</Link>
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
