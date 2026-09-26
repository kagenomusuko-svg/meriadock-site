import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const publications = [
  {
    id: "reivindicacion-ontologica-del-ego-caos",
    title: "Caos",
    subtitle: "El abismo del ego y la doble mediación",
    volume: "Libro independiente",
    author: "Miguel Hilario Olvera Aguilar",
    year: 2026,
    doi: "10.5281/zenodo.19601474",
    description:
      "Una ontología del ego como acontecimiento de determinación: el colapso de la posibilidad, la doble mediación y la responsabilidad.",
    coverUrl: "/publicaciones/libros/caos/portada.png",
    readerUrl: "/publicaciones/libros/caos/caos",
  },
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
  {
    id: "afrodita-areia-volumen-III",
    title: "Afrodita Areia",
    subtitle: "Damasén",
    volume: "Volumen III",
    author: "Miguel Hilario Olvera Aguilar",
    year: 2026,
    doi: "10.5281/zenodo.19596275",
    description:
      "Una ontología del límite de la autodeterminación causal: Damasén y Peribea como figuras del Aego, del vínculo colapsado y de su escala colectiva.",
    coverUrl: "/publicaciones/libros/afrodita-areia/portada-volumen-III.png",
    readerUrl: "/publicaciones/libros/afrodita-areia/volumen-III",
  },
  {
    id: "afrodita-areia-volumen-IV",
    title: "Afrodita Areia",
    subtitle: "Areópago",
    volume: "Volumen IV",
    author: "Miguel Hilario Olvera Aguilar",
    year: 2026,
    doi: "10.5281/zenodo.19601192",
    description:
      "Una ontología de la imputación causal, la jerarquía entre diseño y ejecución y el daño que el dolo deja sin autor visible.",
    coverUrl: "/publicaciones/libros/afrodita-areia/portada-volumen-IV.png",
    readerUrl: "/publicaciones/libros/afrodita-areia/volumen-IV",
  },
  {
    id: "afrodita-areia-volumen-V",
    title: "Afrodita Areia",
    subtitle: "Caelus",
    volume: "Volumen V",
    author: "Miguel Hilario Olvera Aguilar",
    year: 2026,
    description:
      "Una teoría de escalas sobre el Estado, la soberanía, el contrato fiscal y la emergencia de la voluntad colectiva.",
    coverUrl: "/publicaciones/libros/afrodita-areia/portada-volumen-V.png",
    readerUrl: "/publicaciones/libros/afrodita-areia/volumen-V",
  },
  {
    id: "afrodita-areia-volumen-VI",
    title: "Afrodita Areia",
    subtitle: "Nikomachos",
    volume: "Volumen VI",
    author: "Miguel Hilario Olvera Aguilar",
    year: 2026,
    doi: "10.5281/zenodo.22931825",
    description:
      "Una ontología del ser, la dignidad y la responsabilidad: el límite de la predicación cuando el juicio pretende agotar al agente.",
    coverUrl: "/publicaciones/libros/afrodita-areia/portada-volumen-VI.png",
    readerUrl: "/publicaciones/libros/afrodita-areia/volumen-VI",
  },
  {
    id: "reivindicacion-ontologica-del-ego-telar-de-las-moiras",
    title: "El telar de las Moiras",
    subtitle: "Ontología de la autodeterminación causal",
    volume: "Libro independiente",
    author: "Miguel Hilario Olvera Aguilar",
    year: 2026,
    doi: "10.5281/zenodo.19601876",
    description:
      "Una exploración ontológica de la autodeterminación causal, el ego, la libertad y la responsabilidad.",
    coverUrl: "/publicaciones/libros/telar-de-las-moiras/portada.png",
    readerUrl: "/publicaciones/libros/telar-de-las-moiras/telar-de-las-moiras",
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
                        className={`publication-cover${
                          item.id === "reivindicacion-ontologica-del-ego-telar-de-las-moiras"
                            ? " publication-cover-telar"
                            : ""
                        }`}
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
