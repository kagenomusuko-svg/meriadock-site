import ConceptArticle, {
  ConceptSection,
  DefinitionBox,
  Formula,
  Note,
} from "../components/ConceptArticle";

export default function TautologiaEuclidiana() {
  return (
    <ConceptArticle
      title="Tautología euclidiana"
      kicker="Concepto metodológico"
      description="Límite constitutivo que examina qué debe seguir siendo verdadero para que una operación, categoría o sistema pueda continuar siendo aquello que afirma ser."
    >
      <ConceptSection id="definicion" title="Definición">
        <DefinitionBox>
          <p>
            <strong>Tautología euclidiana:</strong> estructura de delimitación constitutiva según la
            cual, si <code className="mx-1 rounded bg-white px-1.5 py-0.5">X</code> ha de seguir siendo
            <code className="mx-1 rounded bg-white px-1.5 py-0.5">X</code>, no puede realizarse mediante
            aquello que destruye las condiciones por las que puede seguir siendo predicada como
            <code className="mx-1 rounded bg-white px-1.5 py-0.5">X</code>.
          </p>
        </DefinitionBox>

        <Formula label="Forma constitutiva">
          <span>X → C_X</span>
        </Formula>

        <Formula label="Límite">
          <span>¬C_X → ¬X</span>
        </Formula>

        <p>
          <code className="font-mono">C_X</code> representa las condiciones constitutivas mínimas bajo
          las cuales la operación, categoría o sistema conserva la identidad que se le atribuye. La
          restricción surge de la propia arquitectura de <code className="font-mono">X</code>, no de una
          norma moral añadida desde fuera.
        </p>

        <p>
          La pregunta metodológica correspondiente es: <strong>¿qué debe permanecer verdadero para que
          esta operación pueda seguir siendo la operación que afirma ser?</strong>
        </p>
      </ConceptSection>

      <ConceptSection id="euclidiano" title="El carácter “euclidiano”">
        <p>
          La denominación alude a la forma de los sistemas axiomáticos: establecidas determinadas
          definiciones, axiomas y reglas, ciertas consecuencias se vuelven necesarias dentro del espacio
          formal que esas condiciones constituyen.
        </p>

        <Formula label="Necesidad interna">
          <span>Axiomas + definiciones + reglas ⊢ conclusión</span>
        </Formula>

        <p>
          Esa necesidad puede ser impecable sin demostrar que los axiomas, definiciones y reglas sean
          propiedades necesarias del ser. La tautología euclidiana distingue, por tanto, entre
          <strong> necesidad interna de una arquitectura</strong> y <strong>necesidad ontológica</strong>.
        </p>

        <Formula label="Límite de la inferencia">
          <span>Necesidad_sistema(C) ⇏ Necesidad_ontos(C)</span>
        </Formula>

        <Note title="No es una acusación automática de falsedad">
          <p>
            Una arquitectura puede ser útil, rigurosa, fecunda e incluso inexpugnable dentro de sus
            condiciones constitutivas. La categoría no autoriza por sí sola a declararla falsa. Permite
            señalar de qué depende su necesidad y hasta dónde puede extenderse sin convertir una
            construcción epistémica en ontología.
          </p>
        </Note>
      </ConceptSection>

      <ConceptSection id="identidad" title="Identidad y límite constitutivo">
        <p>
          La tautología euclidiana funciona primero como una operación negativa: no necesita determinar
          exhaustivamente qué es <code className="font-mono">X</code>; basta con identificar una condición
          cuya destrucción haga imposible continuar predicando la misma operación bajo la misma
          definición.
        </p>

        <Formula>
          <span>X := C₁ ∧ C₂ ∧ C₃</span>
        </Formula>

        <Formula>
          <span>¬C₁ → ¬X</span>
        </Formula>

        <p>
          La fuerza de la conclusión procede precisamente de su carácter constitutivo. Si una operación
          se presenta como definida por <code className="font-mono">C₁</code>,
          <code className="mx-1 font-mono">C₂</code> y <code className="font-mono">C₃</code>, no puede negar
          una de esas condiciones y conservar sin modificación la misma predicación.
        </p>
      </ConceptSection>

      <ConceptSection id="demostracion" title="Ejemplo: una demostración">
        <p>
          Supóngase que una conclusión <code className="font-mono">P</code> se afirma demostrada a partir
          de las premisas <code className="font-mono">A</code> y <code className="font-mono">B</code> mediante
          ciertas reglas de inferencia.
        </p>

        <Formula label="Operación declarada">
          <span>A + B ⊢ P</span>
        </Formula>

        <p>
          Si la conclusión sólo puede obtenerse introduciendo subrepticiamente una premisa adicional
          <code className="font-mono">Q</code>, la operación efectiva es otra:
        </p>

        <Formula label="Operación efectiva">
          <span>A + B + Q ⊢ P</span>
        </Formula>

        <p>
          El problema no consiste necesariamente en que <code className="font-mono">Q</code> sea falsa.
          Consiste en que ya no puede sostenerse, bajo la misma descripción, que
          <code className="font-mono">P</code> fue demostrada exclusivamente desde
          <code className="mx-1 font-mono">A</code> y <code className="font-mono">B</code>. La operación ha
          destruido una condición de su propia identidad declarada.
        </p>
      </ConceptSection>

      <ConceptSection id="recursividad" title="Cierre recursivo y sistemas inexpugnables">
        <p>
          Una segunda aplicación aparece en arquitecturas justificatorias cuyas conclusiones se
          encuentran garantizadas por las mismas condiciones constitutivas con las que el sistema fue
          diseñado. En esos casos puede existir una estructura recursiva:
        </p>

        <Formula>
          <span>X → P(X) → X</span>
        </Formula>

        <p>
          El resultado puede ser necesario dentro del sistema porque el sistema incorpora desde el inicio
          aquello que hace necesaria la conclusión. Esto no basta para denominarlo falacia ni para negar
          su utilidad. Sí obliga a distinguir entre <strong>coherencia o validez interna</strong> y
          <strong> demostración de una realidad necesaria fuera del sistema</strong>.
        </p>

        <p>
          Una arquitectura de este tipo puede resultar deliberadamente resistente a la falsación: sus
          criterios de validación dependen de sus propias premisas constitutivas. La crítica no necesita
          afirmar que el sistema es falso; puede limitarse a mostrar que su inexpugnabilidad deriva de su
          diseño y que, por ello, su necesidad tiene una jurisdicción determinada.
        </p>
      </ConceptSection>

      <ConceptSection id="ontologia" title="Episteme operativa y ontología">
        <p>
          La tautología euclidiana permite conservar una diferencia fundamental entre una construcción
          que funciona y una afirmación acerca de lo que necesariamente existe.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Validez operativa
            </p>
            <p className="text-sm leading-7 text-slate-700">
              Aceptadas las condiciones del sistema, una consecuencia puede seguirse necesariamente y
              resultar útil para conocer, clasificar, decidir o actuar.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Pretensión ontológica
            </p>
            <p className="text-sm leading-7 text-slate-700">
              Para afirmar que esas mismas condiciones pertenecen necesariamente al ser hace falta una
              fundamentación adicional; la necesidad interna no basta.
            </p>
          </div>
        </div>

        <Formula>
          <span>M + R ⊢ C</span>
        </Formula>

        <p>
          De que <code className="font-mono">C</code> sea inevitable una vez aceptados
          <code className="mx-1 font-mono">M</code> y <code className="font-mono">R</code> no se sigue que
          el ontos deba organizarse necesariamente conforme a <code className="font-mono">M</code> y
          <code className="mx-1 font-mono">R</code>.
        </p>
      </ConceptSection>

      <ConceptSection id="justicia" title="Ejemplo: justicia como operación">
        <p>
          Si una determinada concepción de justicia se presenta como una operación entre sujetos bajo
          una regla común, la condición de los participantes como sujetos forma parte de la arquitectura
          que permite predicar la operación como justicia.
        </p>

        <Formula>
          <span>J := O(S₁, S₂, R)</span>
        </Formula>

        <p>
          Si la misma operación pretende resolver el conflicto negando ontológicamente a
          <code className="mx-1 font-mono">S₂</code> como sujeto, destruye una de las condiciones mediante
          las cuales se había presentado como <code className="font-mono">J</code>.
        </p>

        <Formula>
          <span>J → S₁ ∧ S₂</span>
        </Formula>

        <Formula>
          <span>¬S₂ → ¬J</span>
        </Formula>

        <p>
          Esta conclusión no demuestra que esa definición de justicia sea metafísicamente obligatoria.
          Demuestra algo más restringido: <strong>aceptada esa arquitectura, la operación no puede destruir
          sus propias condiciones constitutivas y conservar intacta la misma predicación</strong>.
        </p>
      </ConceptSection>

      <ConceptSection id="puente" title="Relación con el puente rawlsiano">
        <p>
          Ambos conceptos controlan operaciones distintas pero complementarias. El
          <strong> puente rawlsiano</strong> declara qué se introduce para pasar de un dominio a otro; la
          <strong> tautología euclidiana</strong> examina qué consecuencias quedan cerradas por las
          condiciones constitutivas del marco y qué no puede destruirse sin abandonar la identidad de la
          operación.
        </p>

        <Formula label="Puente rawlsiano">
          <span>A + P → B</span>
        </Formula>

        <Formula label="Tautología euclidiana">
          <span>X → C_X ; ¬C_X → ¬X</span>
        </Formula>

        <p>
          Un puente explícito puede producir consecuencias euclidianamente necesarias dentro de su
          jurisdicción. El problema aparece cuando el puente desaparece de la exposición y la necesidad
          interna resultante se presenta como si hubiese sido encontrada directamente en el ser.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Construcción</p>
            <p className="font-mono text-sm">A + P → B</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Cierre interno</p>
            <p className="font-mono text-sm">P ⊢ B</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Exceso</p>
            <p className="font-mono text-sm">Ontos ⊢ B</p>
          </div>
        </div>
      </ConceptSection>

      <ConceptSection id="no-es" title="Lo que no basta para identificarla">
        <p>
          La categoría no equivale sin más a circularidad, definición, convención, contradicción o
          falacia. Tampoco toda estructura axiomática es problemática por serlo. Para que la herramienta
          resulte pertinente debe identificarse alguna de estas operaciones:
        </p>

        <ul className="space-y-3 pl-5">
          <li className="list-disc pl-2">
            una condición cuya negación destruye la identidad declarada de la operación;
          </li>
          <li className="list-disc pl-2">
            una conclusión cuya necesidad depende constitutivamente de las premisas con las que se cerró
            el sistema;
          </li>
          <li className="list-disc pl-2">
            o una extensión ilegítima desde la necesidad interna del marco hacia una supuesta necesidad
            ontológica.
          </li>
        </ul>

        <p>
          La pregunta no es simplemente «¿esto es circular?», sino <strong>«¿qué debe ser verdad para que
          esto siga siendo aquello que afirma ser, y de dónde procede la necesidad que exhibe?»</strong>
        </p>
      </ConceptSection>

      <ConceptSection id="regla" title="Regla metodológica">
        <DefinitionBox>
          <p>
            <strong>Si X ha de ser X, X no puede realizarse mediante aquello que destruye las condiciones
            por las que X es X.</strong> Que una consecuencia sea necesaria dentro de esas condiciones no
            demuestra, por sí mismo, que las condiciones sean necesarias en el ser.
          </p>
        </DefinitionBox>
      </ConceptSection>
    </ConceptArticle>
  );
}
