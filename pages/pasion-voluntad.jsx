import ConceptArticle, {
  ConceptSection,
  DefinitionBox,
  Formula,
  Note,
} from "../components/ConceptArticle";

export default function PasionVoluntad() {
  return (
    <ConceptArticle
      title="Pasión/voluntad"
      kicker="Concepto ontológico"
      description="La persistencia del estar: el padecimiento del ser y la continuidad de su despliegue"
    >
      <ConceptSection id="definicion" title="Definición">
        <DefinitionBox>
          <p>
            <strong>Pasión/voluntad:</strong> dimensión constitutiva del ser/estar mediante la cual
            aquello que es continúa desplegándose en el devenir. La pasión expresa aquello que el ser
            padece y recibe de la alteridad; la voluntad expresa la persistencia del estar, la continuidad
            mediante la cual ese despliegue conserva unidad.
          </p>
        </DefinitionBox>

        <Formula label="Estructura del ser/estar">
          <span>identidad/sesgo + pasión/voluntad + primera mediación</span>
        </Formula>
      </ConceptSection>

      <ConceptSection id="pasion" title="La pasión del ser">
        <p>
          La pasión no debe entenderse como emoción, deseo o afecto en el sentido contemporáneo. Su
          sentido ontológico corresponde a aquello que se padece: aquello que acontece al ser.
        </p>
        <p>
          Todo ser se encuentra expuesto a la alteridad. Algo le ocurre, algo lo modifica y algo atraviesa
          su existencia. La pasión es la manifestación de esa apertura: el modo en que el ser recibe el
          devenir sin dejar de ser.
        </p>
        <Note title="Padecer no significa sufrir">
          <p>
            Padecer significa recibir un acontecimiento. La pasión nombra la dimensión receptiva del ser,
            no un estado emocional particular.
          </p>
        </Note>
      </ConceptSection>

      <ConceptSection id="voluntad" title="La voluntad del estar">
        <p>
          La voluntad no designa únicamente la capacidad psicológica de elegir. Esa es una manifestación
          particular dentro del ámbito humano, no la estructura ontológica del concepto.
        </p>
        <p>
          La voluntad expresa la continuidad del despliegue: aquello mediante lo cual un estar conserva
          unidad dentro del devenir.
        </p>
        <Formula label="Distinción">
          <span>pasión del ser = persistencia ; voluntad del estar = despliegue</span>
        </Formula>
      </ConceptSection>

      <ConceptSection id="identidad" title="Relación con identidad/sesgo">
        <p>
          La identidad y la pasión/voluntad corresponden a dimensiones distintas del ser/estar.
        </p>
        <p>
          La identidad responde por la determinación del ser: qué es. La pasión/voluntad responde por la
          persistencia del estar: aquello que es continúa aconteciendo y desplegándose.
        </p>
        <Formula label="Dimensiones">
          <span>identidad/sesgo → determinación del ser</span>
          <br />
          <span>pasión/voluntad → persistencia del estar</span>
        </Formula>
      </ConceptSection>

      <ConceptSection id="mediacion" title="Relación con la primera mediación">
        <p>
          La pasión/voluntad no aparece como una etapa posterior a la identidad. Ambas participan de la
          constitución del ser/estar.
        </p>
        <p>
          La primera mediación es el colapso mediante el cual identidad y pasión/voluntad emergen frente a
          la alteridad como una existencia efectiva.
        </p>
        <Formula label="Colapso">
          <span>identidad + pasión/voluntad + primera mediación → ser/estar</span>
        </Formula>
      </ConceptSection>

      <ConceptSection id="caos" title="Relación con Caos">
        <p>
          La pasión/voluntad no es una sustancia obtenida del Caos ni una fuerza externa entregada al ser.
          El Caos permanece como límite anterior a toda determinación.
        </p>
        <p>
          La pasión/voluntad pertenece al ámbito de aquello que ya ha colapsado como ser/estar: la
          persistencia de una determinación frente al devenir.
        </p>
      </ConceptSection>

      <ConceptSection id="definicion-final" title="Definición final">
        <DefinitionBox>
          <p>
            <strong>
              La pasión/voluntad es la persistencia del estar mediante la cual aquello que es continúa
              desplegándose a través del devenir. La pasión constituye la dimensión receptiva del ser:
              aquello que acontece y es padecido por la existencia. La voluntad constituye la continuidad
              de ese despliegue: la unidad mediante la cual el estar conserva dirección dentro de la
              transformación. No es deseo psicológico ni mecanismo de permanencia, sino la manifestación
              ontológica de que un ser, al acontecer, continúa siendo.
            </strong>
          </p>
        </DefinitionBox>
      </ConceptSection>
    </ConceptArticle>
  );
}
