import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const publications = [
  {
    id: "afrodita-areia-volumen-I",
    title: "Afrodita Areia",
    subtitle: "Sobre la pasión",
    volume: "Volumen I",
    author: "Miguel Hilario Olvera Aguilar",
    year: 2026,
    description:
      "Una ontología materialista de la determinación que piensa la pasión como fuerza anterior al sujeto consciente y recorre su desarrollo desde el caos hasta el ego.",
    coverUrl: "/publicaciones/libros/afrodita-areia/portada.png",
    readerUrl: "/publicaciones/libros/afrodita-areia/volumen-I",
  },
  {
    id: "afrodita-areia-volumen-II",
    title: "Afrodita Areia",
    subtitle: "Ágape",
    volume: "Volumen II",
    author: "Miguel Hilario Olvera Aguilar",
    year: 2026,
    doi: "10.5281/zenodo.19601149",
    description:
      "Una ontología de las formas que adopta la voluntad al orientarse hacia la alteridad: Eros, Deimos, Anteros, Fobos, Potós y Harmonía.",
    coverUrl: "/publicaciones/libros/afrodita-areia/portada-volumen-II.png",
    readerUrl: "/publicaciones/libros/afrodita-areia/volumen-II",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="home-main">
        <section className="slider-principal">
          <div className="slider-placeholder">
            [Slider principal - Academia, Gaceta, Tecnología, Colabora con nosotros]
          </div>
        </section>

        <div className="divider"></div>

        <section className="publications-section">
          <h2 className="section-title">Publicaciones</h2>

          <div className="carousel-container">
            <div className="carousel-track">
              {publications.map((item) => (
                <Link
                  key={item.id}
                  href={item.readerUrl}
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
                      <span className="publication-volume">{item.volume}</span>
                      <h4>{item.title}</h4>
                      <p className="publication-subtitle">{item.subtitle}</p>
                      <p className="publication-description">{item.description}</p>
                      <div className="publication-meta">
                        <span>{item.author}</span>
                        <span>{item.year}</span>
                        {item.doi && <span>DOI {item.doi}</span>}
                      </div>
                      <span className="publication-action">Leer publicación →</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className="divider"></div>

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
                    <Link href="/ejes/desarrollo-social-comunitario">Desarrollo social y comunitario</Link>
                  </strong>
                  <p>
                    Desarrollamos programas de trabajo directo con comunidades y grupos específicos,
                    desde talleres socioemocionales en secundarias hasta formación práctica en oficios
                    y habilidades técnicas.
                  </p>
                </li>
                <li className="axes-item">
                  <strong>
                    <Link href="/ejes/investigacion-desarrollo">Investigación y desarrollo</Link>
                  </strong>
                  <p>
                    Producimos, examinamos y difundimos conocimiento mediante proyectos editoriales y
                    otras iniciativas que permiten someter ideas, problemas y modelos a revisión
                    rigurosa.
                  </p>
                </li>
                <li className="axes-item">
                  <strong>
                    <Link href="/ejes/educacion-formacion">Educación y formación</Link>
                  </strong>
                  <p>
                    Organizamos trayectos formativos estructurados mediante Academia Meriadock, con
                    contenidos, actividades, evaluación y acreditación, además de futuras propuestas y
                    colaboraciones académicas.
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
