import ConceptArticle, {
  ConceptSection,
  DefinitionBox,
  Formula,
  Note,
} from "../components/ConceptArticle";

export default function PuenteRawlsiano() {
  return (
    <ConceptArticle
      title="Puente rawlsiano"
      kicker="Concepto metodológico"
      description="Mediación inferencial explícita que declara qué debe añadirse para autorizar el tránsito entre dominios que no se siguen entre sí por necesidad lógica."
    >
      <ConceptSection id="definicion" title="Definición">
        <DefinitionBox>
          <p>
            <strong>Puente rawlsiano:</strong> conjunto explícito de reglas, condiciones,
            convenciones, funciones, fines, criterios, procedimientos o premisas añadidas mediante
            las cuales se delimita funcionalmente el campo considerado y se hace legítimo pasar de
            <code className="mx-1 rounded bg-white px-1.5 py-0.5">A</code> a
            <code className="mx-1 rounded bg-white px-1.5 py-0.5">B</code> sin afirmar que
            <code className="mx-1 rounded bg-white px-1.5 py-0.5">B</code> estaba contenido
            ontológicamente en <code className="mx-1 rounded bg-white px-1.5 py-0.5">A</code>.
          </p>
        </DefinitionBox>

        <p>
          El término no designa una doctrina de John Rawls ni supone adhesión al rawlsianismo. La
          referencia es estructural: al igual que una operación realizada bajo un velo de ignorancia,
          el puente establece qué información resulta pertinente para una función determinada y qué
          elementos quedan fuera de esa operación.
        </p>

        <Formula label="Forma mínima">
          <span>A + P → B</span>
        </Formula>

        <p>
          <code className="font-mono">A</code> constituye el punto de partida,
          <code className="mx-1 font-mono">P</code> el puente y
          <code className="font-mono">B</code> la conclusión, atribución o dominio de llegada. La
          pregunta metodológica correspondiente es: <strong>¿qué fue introducido entre A y B para que
          B pueda seguirse de A?</strong>
        </p>
      </ConceptSection>

      <ConceptSection id="operacion" title="Operación: recorte funcional del ontos">
        <p>
          El puente rawlsiano realiza un <strong>recorte funcional del campo considerado</strong>. Para
          una operación concreta, ciertas propiedades, diferencias o datos son declarados pertinentes,
          mientras que otros son excluidos del cálculo.
        </p>

        <Note title="Lo que el recorte no afirma">
          <p>
            El recorte no sostiene que la realidad sólo contenga las propiedades seleccionadas. Sostiene
            únicamente que, <strong>para una construcción, bajo determinadas condiciones y con una
            finalidad declarada</strong>, la operación tomará unas propiedades en consideración y dejará
            otras fuera.
          </p>
        </Note>

        <Formula label="Distinción ontológica">
          <span>Ontos ≠ Ontos_recortado</span>
        </Formula>

        <Formula label="Uso funcional">
          <span>F(Ontos) := F(Ontos_recortado)</span>
        </Formula>

        <p>
          El puente, por tanto, no agota el ser. Delimita una jurisdicción operativa. Su legitimidad no
          depende de fingir que el recorte es la totalidad de lo real, sino de declarar con precisión
          para qué función se utiliza y hasta dónde alcanzan sus consecuencias.
        </p>
      </ConceptSection>

      <ConceptSection id="hume" title="Relación con la guillotina de Hume">
        <p>
          Uno de sus campos paradigmáticos de aplicación es el tránsito entre <strong>ser</strong> y
          <strong> deber ser</strong>. De la descripción de un hecho no se obtiene por sí sola una
          obligación. La consecuencia normativa requiere una premisa adicional.
        </p>

        <Formula label="Estructura normativa">
          <span>Ser + P_normativo → Deber</span>
        </Formula>

        <p>
          La proposición «una persona produjo causalmente un daño» no contiene por sí misma la
          proposición «esa persona debe indemnizar». Para obtenerla debe incorporarse, por ejemplo, una
          regla jurídica de responsabilidad.
        </p>

        <Formula label="Ejemplo">
          <span>producción causal del daño + regla de responsabilidad → obligación de reparar</span>
        </Formula>

        <p>
          La regla de responsabilidad constituye el puente. La operación no elimina la guillotina de
          Hume: <strong>hace visible aquello que fue añadido para atravesarla</strong>.
        </p>
      </ConceptSection>

      <ConceptSection id="jurisdiccion" title="Jurisdicción predicativa">
        <p>
          El concepto excede el tránsito entre hecho y norma. Funciona como instrumento general para
          controlar cambios de jurisdicción predicativa: cada vez que una proposición perteneciente a un
          dominio pretende transformarse en una predicación perteneciente a otro, debe identificarse el
          operador que autoriza el desplazamiento.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "fenómeno → noúmeno",
            "acto → sujeto",
            "causalidad → culpabilidad",
            "racionalidad → deber",
            "hecho → clasificación jurídica",
            "conducta repetida → disposición",
            "disposición → identidad",
            "observación → atribución esencial",
          ].map((item) => (
            <div key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 font-mono text-sm text-slate-700">
              {item}
            </div>
          ))}
        </div>

        <p>
          Así, «Pedro realizó A» no implica sin más «Pedro es X». Entre la descripción del acto y la
          predicación acerca del sujeto debe existir alguna mediación definicional, jurídica,
          probabilística, convencional, normativa o de otra naturaleza.
        </p>

        <Formula label="Cambio de jurisdicción">
          <span>A —P→ X</span>
        </Formula>
      </ConceptSection>

      <ConceptSection id="auditoria" title="Función epistemológica: auditabilidad">
        <p>
          La explicitación del puente separa tres objetos de examen que suelen quedar confundidos cuando
          la inferencia se presenta simplemente como <code className="font-mono">A → B</code>.
        </p>

        <ol className="space-y-3 pl-5">
          <li className="list-decimal pl-2">
            <strong>Premisa de origen:</strong> si <code className="font-mono">A</code> está efectivamente
            establecido.
          </li>
          <li className="list-decimal pl-2">
            <strong>Operador:</strong> si <code className="font-mono">P</code> está declarado, delimitado y
            resulta adecuado para la función que pretende cumplir.
          </li>
          <li className="list-decimal pl-2">
            <strong>Conclusión:</strong> si, aceptados <code className="font-mono">A</code> y
            <code className="mx-1 font-mono">P</code>, se obtiene realmente
            <code className="font-mono">B</code>.
          </li>
        </ol>

        <p>
          Esta separación permite aceptar un hecho sin aceptar la categoría que se pretende derivar de
          él; aceptar una regla dentro de una función sin universalizarla; o aceptar una conclusión
          <strong> dentro del puente</strong> sin atribuirle validez fuera de su jurisdicción.
        </p>
      </ConceptSection>

      <ConceptSection id="tautologia" title="Relación con la tautología euclidiana">
        <p>
          El puente rawlsiano mantiene visible la mediación:
        </p>

        <Formula>
          <span>A + P → B</span>
        </Formula>

        <p>
          El problema aparece cuando <code className="font-mono">P</code> es omitido, naturalizado o
          absorbido por la definición y la construcción condicionada comienza a presentarse como si
          fuera una relación necesaria:
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Declarado</p>
            <p className="font-mono text-sm">A + P → B</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Ocultamiento</p>
            <p className="font-mono text-sm">A → B</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Absolutización</p>
            <p className="font-mono text-sm">A ≡ B</p>
          </div>
        </div>

        <p>
          Un puente puede producir consecuencias necesarias dentro del marco que establece. Esa necesidad
          interna no convierte automáticamente el marco en ontología. El problema no consiste en construir
          una mediación, sino en <strong>ocultarla, absolutizarla o extender sus efectos más allá de las
          condiciones que la sostienen</strong>.
        </p>
      </ConceptSection>

      <ConceptSection id="ejemplo" title="Ejemplo de frontera operativa">
        <p>
          La mayoría de edad jurídica permite mostrar la diferencia entre una construcción funcional y
          una afirmación ontológica.
        </p>

        <Formula>
          <span>edad ≥ 18 → adulto jurídico</span>
        </Formula>

        <p>
          La frontera puede ser plenamente funcional para un régimen jurídico sin suponer que la realidad
          produce, a la medianoche del cumpleaños dieciocho, una transformación metafísica absoluta del
          individuo. La formulación intelectualmente transparente reconoce que se ha establecido una
          frontera para una función determinada.
        </p>
      </ConceptSection>

      <ConceptSection id="regla" title="Regla metodológica">
        <DefinitionBox>
          <p>
            <strong>Cuando A se convierte en B, debe identificarse qué fue introducido entre ambos para
            autorizar el tránsito.</strong> Ese elemento constituye el puente; su contenido debe
            declararse, su jurisdicción debe delimitarse y sus efectos no deben confundirse con
            propiedades necesarias del ser.
          </p>
        </DefinitionBox>
      </ConceptSection>
    </ConceptArticle>
  );
}
