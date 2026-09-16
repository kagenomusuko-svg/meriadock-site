import ConceptArticle, {
  ConceptSection,
  DefinitionBox,
  Formula,
  Note,
} from "../components/ConceptArticle";

export default function Identidad() {
  return (
    <ConceptArticle
      title="Identidad/sesgo"
      kicker="Concepto ontológico"
      description="La determinación del ser frente a la alteridad"
    >
      <ConceptSection id="definicion" title="Definición">
        <DefinitionBox>
          <p>
            <strong>Identidad/sesgo:</strong> determinación mediante la cual algo puede aparecer como
            algo frente a la alteridad. No designa una esencia inmóvil ni una colección de propiedades,
            sino la condición del ser que permite afirmar qué es.
          </p>
        </DefinitionBox>

        <Formula label="Pregunta fundamental">
          <span>Identidad/sesgo → ¿qué es?</span>
        </Formula>
      </ConceptSection>

      <ConceptSection id="determinacion" title="La determinación del ser">
        <p>
          Todo aquello que es requiere una determinación. Para afirmar que algo es algo debe existir una
          diferencia que permita reconocerlo como aquello que es y no como aquello otro.
        </p>

        <p>
          La identidad no es una propiedad entre otras propiedades del ser. Es la condición previa que
          permite que algo pueda poseer propiedades, relaciones y accidentes.
        </p>
      </ConceptSection>

      <ConceptSection id="diferencia" title="Identidad y diferencia">
        <p>
          Toda identidad implica diferencia. Determinar algo significa establecer una frontera respecto
          de la alteridad: esto es esto y no aquello.
        </p>

        <p>
          La diferencia no destruye la identidad; es aquello que permite que exista. Sin frontera no
          existe determinación y sin determinación no existe algo sobre lo cual pueda predicarse el ser.
        </p>
      </ConceptSection>

      <ConceptSection id="sesgo" title="El sesgo como orientación">
        <p>
          El sesgo no refiere a error o prejuicio. Señala la orientación propia de toda determinación.
        </p>

        <p>
          Toda identidad constituye una forma concreta de aparecer entre un infinito de posibilidades.
          Ser algo implica una dirección determinada y, por ello, una diferencia frente a otras formas
          posibles.
        </p>

        <Note title="Toda determinación implica límite">
          <p>
            No existe identidad sin sesgo porque no existe determinación sin frontera.
          </p>
        </Note>
      </ConceptSection>

      <ConceptSection id="caos" title="Identidad frente al Caos">
        <p>
          La identidad no es aquello que elimina el Caos. La determinación es el colapso mediante el cual
          una forma concreta aparece frente al infinito de posibilidades.
        </p>

        <p>
          Sin embargo, la identidad no constituye un fundamento absoluto ni permite acceder a una esencia
          última. Determina aquello que aparece, pero no agota aquello que pueda ser en sí mismo.
        </p>
      </ConceptSection>

      <ConceptSection id="ser-estar" title="Identidad y ser/estar">
        <p>
          La identidad corresponde a la dimensión del ser dentro de la estructura del ser/estar.
        </p>

        <Formula label="Estructura del ser/estar">
          <span>identidad/sesgo + voluntad/pasión + primera mediación</span>
        </Formula>

        <p>
          La identidad determina qué es. La voluntad/pasión manifiesta la persistencia del estar. La
          primera mediación constituye el momento del colapso donde ambas dimensiones acontecen como un
          ser/estar efectivo.
        </p>
      </ConceptSection>

      <ConceptSection id="persistencia" title="Identidad y devenir">
        <p>
          La identidad no significa inmovilidad. Algo puede transformarse porque existe una continuidad
          que permite comprender el cambio como transformación de algo y no como una sucesión sin unidad.
        </p>

        <p>
          La identidad no detiene el devenir; hace posible que exista un devenir de algo determinado.
        </p>
      </ConceptSection>

      <ConceptSection id="limite" title="Límite de la predicación">
        <p>
          Reconocer una identidad no significa poseer la esencia absoluta de aquello que algo es. La
          identidad permite afirmar que algo es algo, pero no convierte esa determinación en conocimiento
          de la cosa en sí.
        </p>
      </ConceptSection>

      <ConceptSection id="definicion-final" title="Definición final">
        <DefinitionBox>
          <p>
            <strong>
              La identidad/sesgo es la determinación mediante la cual algo puede aparecer como algo
              frente a la alteridad. Es la condición del ser que establece una frontera entre aquello que
              es y aquello que no es, permitiendo la diferencia, la predicación y el reconocimiento. No es
              una esencia inmóvil, sino la estructura mediante la cual una determinación puede permanecer
              como tal dentro del devenir.
            </strong>
          </p>
        </DefinitionBox>
      </ConceptSection>
    </ConceptArticle>
  );
}
