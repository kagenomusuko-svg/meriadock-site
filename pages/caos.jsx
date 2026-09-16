import ConceptArticle, {
  ConceptSection,
  DefinitionBox,
  Formula,
  Note,
} from "../components/ConceptArticle";

export default function Caos() {
  return (
    <ConceptArticle
      title="Caos"
      kicker="Concepto ontológico"
      description="El infinito de posibilidades anterior a toda determinación y límite de la predicación"
    >
      <ConceptSection id="definicion" title="Definición">
        <DefinitionBox>
          <p>
            <strong>Caos:</strong> infinito de posibilidades anterior a toda determinación. No designa
            desorden ni una sustancia primera, sino el límite conceptual donde la diferencia entre
            posibilidad e imposibilidad, ser y no-ser, todavía no puede ser predicada como un objeto
            determinado.
          </p>
        </DefinitionBox>

        <Formula label="Distinción fundamental">
          <span>infinito de posibilidades ≠ posibilidad infinita</span>
        </Formula>
      </ConceptSection>

      <ConceptSection id="desorden" title="Caos no significa desorden">
        <p>
          El desorden pertenece al ámbito de aquello que ya ha sido determinado. Para que algo pueda
          encontrarse desordenado debe existir previamente una estructura, una relación o una forma que
          permita distinguir entre orden y alteración.
        </p>

        <p>
          El Caos antecede a esa diferencia. No es una forma destruida, una estructura rota ni una
          multiplicidad sin organización. Todas esas expresiones suponen ya elementos determinados sobre
          los cuales podrían predicarse.
        </p>

        <Note title="Límite conceptual">
          <p>
            El Caos no describe una condición caótica en sentido cotidiano. Señala aquello anterior a la
            constitución misma del campo donde algo puede ser llamado ordenado o desordenado.
          </p>
        </Note>
      </ConceptSection>

      <ConceptSection id="infinito" title="El infinito de posibilidades">
        <p>
          Una posibilidad infinita continúa perteneciendo al marco del ser: es una posibilidad ya
          delimitada respecto de un campo donde algo puede ser posible. El infinito de posibilidades, en
          cambio, señala la apertura anterior a la constitución de ese campo.
        </p>

        <p>
          No significa que existan infinitas cosas esperando aparecer. Significa que antes de toda
          determinación no existe todavía una frontera constituida entre aquello que puede ser y aquello
          que no puede ser.
        </p>

        <Formula label="Caos como límite">
          <span>Caos ≠ conjunto de posibilidades determinadas</span>
        </Formula>
      </ConceptSection>

      <ConceptSection id="ser-estar" title="Caos y ser/estar">
        <p>
          El ser/estar no incorpora el Caos como un elemento interno de su estructura. Introducirlo como
          una variable implicaría convertir un límite en un objeto determinado.
        </p>

        <Formula label="Estructura del ser/estar">
          <span>identidad/sesgo + voluntad/pasión + primera mediación</span>
        </Formula>

        <p>
          La identidad/sesgo constituye la determinación del ser: aquello que permite afirmar qué es.
          La voluntad/pasión constituye la persistencia del estar: aquello mediante lo cual una
          determinación continúa desplegándose.
        </p>

        <p>
          La primera mediación constituye el momento del colapso: la operación mediante la cual una
          determinación y una persistencia comparecen efectivamente como ser/estar dentro de la alteridad.
        </p>
      </ConceptSection>

      <ConceptSection id="limite" title="El límite de la predicación">
        <p>
          Preguntar dónde está el Caos revela la naturaleza del concepto. Si se ubica dentro de todo lo
          que es, corre el riesgo de convertirse en esencia. Si se ubica fuera del ser, se transforma en
          un lugar determinado.
        </p>

        <p>
          Ambas operaciones predican sobre aquello que precisamente funciona como límite de la
          predicación.
        </p>

        <Formula label="Frontera">
          <span>determinar el Caos es dejar de hablar del Caos</span>
        </Formula>
      </ConceptSection>

      <ConceptSection id="ser-no-ser" title="Ser y no-ser">
        <p>
          El no-ser no puede convertirse en un objeto de conocimiento sin dejar de ocupar el lugar de
          límite que posee. Como seres determinados pensamos desde el marco del ser; podemos reconocer la
          frontera, pero no transformar aquello que la limita en una cosa conocida.
        </p>

        <p>
          El Caos no afirma qué existe más allá del ser. Afirma únicamente que toda determinación revela
          una frontera que no puede cerrarse mediante otra determinación sin trasladar nuevamente el
          problema.
        </p>
      </ConceptSection>

      <ConceptSection id="infinito-matematico" title="Analogía del infinito">
        <p>
          El infinito matemático permite comprender esta posición: un límite puede orientar una operación
          sin convertirse en una operación ordinaria dentro del sistema.
        </p>

        <p>
          De igual manera, el Caos permite pensar la apertura anterior a toda determinación sin convertirse
          en un componente más del ser/estar.
        </p>

        <Note title="No es un fundamento sustancial">
          <p>
            Convertir el Caos en una sustancia primera repetiría la estructura de otras metafísicas del
            fundamento. El Caos no sustituye al arjé, la esencia o cualquier otro nombre para una entidad
            última; conserva su función como límite conceptual.
          </p>
        </Note>
      </ConceptSection>

      <ConceptSection id="definicion-final" title="Definición final">
        <DefinitionBox>
          <p>
            <strong>
              El Caos es el infinito de posibilidades anterior a toda determinación, no como una
              posibilidad infinita dentro del ser, sino como la apertura donde todavía no se ha constituido
              la diferencia entre posible e imposible, ser y no-ser. No es un ente, una sustancia ni un
              fundamento; es el límite que impide cerrar completamente la pregunta por la determinación.
            </strong>
          </p>
        </DefinitionBox>
      </ConceptSection>
    </ConceptArticle>
  );
}
