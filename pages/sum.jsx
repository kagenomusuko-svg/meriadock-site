import ConceptArticle, {
  ConceptSection,
  DefinitionBox,
  Formula,
  Note,
} from "../components/ConceptArticle";

export default function Sum() {
  return (
    <ConceptArticle
      title="Sum"
      kicker="Concepto ontológico"
      description="El ser en tanto está o la permanencia, devenir y determinación del ser"
    >
      <ConceptSection id="definicion" title="Definición">
        <DefinitionBox>
          <p>
            <strong>Sum:</strong> fenómeno ontológico completo en el que ser y estar constituyen ejes
            intrínsecos e inseparables. El ser expresa la permanencia y continuidad de aquello que es;
            el estar expresa su determinación, devenir y colapso dentro del infinito de posibilidades.
            Ninguno puede sustraerse del otro sin destruir aquello que el concepto pretende nombrar.
          </p>
        </DefinitionBox>

        <Formula label="Forma mínima">
          <span>El ser es en tanto está</span>
        </Formula>

        <p>
          La tesis parte de dos preguntas: <strong>¿hay un ser que no esté?</strong> y
          <strong> ¿hay un estar que no sea?</strong> La respuesta es negativa. No se trata de una
          peculiaridad lingüística del castellano ni de una diferencia entre significantes. La cuestión
          es ontológica: si algo es, se encuentra determinado de alguna manera; si algo está determinado,
          hay algo que es.
        </p>
      </ConceptSection>

      <ConceptSection id="formulacion" title="Formulación general">
        <DefinitionBox>
          <p>
            <strong>
              El ser es lo que es, lo que fue, lo que será, lo que podría ser, lo que no será y no es lo
              que no es; porque el ser es en tanto está.
            </strong>
          </p>
        </DefinitionBox>

        <p>
          La formulación no equipara presente, pasado, futuro, posibilidad y clausura como si poseyeran
          el mismo estatuto. Expresa que el ser no puede reducirse a una fotografía instantánea de su
          determinación presente: aquello que es posee trayectoria, ha estado, está, puede continuar
          determinándose y se encuentra frente a posibilidades que pueden abrirse o clausurarse.
        </p>

        <Formula label="Frontera parmenídea">
          <span>El ser no es lo que no es</span>
        </Formula>

        <p>
          La amplitud de la trayectoria no elimina el límite. Poder pensar, negar, imaginar o formular
          algo no obliga a incorporarlo indiscriminadamente al ser.
        </p>
      </ConceptSection>

      <ConceptSection id="intrinsequidad" title="Ser y estar: relación intrínseca">
        <p>
          La relación entre ser y estar no se describe adecuadamente como simple inherencia. Lo inherente
          todavía puede comprenderse como una propiedad subordinada a otra cosa. En el sum la relación es
          más fuerte: <strong>ser y estar son intrínsecos</strong>.
        </p>

        <Formula label="Sustracción del estar">
          <span>ser − estar → descolapso</span>
        </Formula>

        <Formula label="Sustracción del ser">
          <span>estar − ser → indeterminación</span>
        </Formula>

        <p>
          Si se elimina el estar, desaparece aquello mediante lo cual el ser se encontraba determinado.
          Si se elimina el ser, desaparece aquello que estaba siendo determinado. No es que ambos
          <em> deban</em> permanecer unidos por una prescripción externa: separados dejan de ser aquello
          que son.
        </p>

        <Note title="Descripción, no prescripción">
          <p>
            La intrinsequidad no establece una norma acerca de cómo debería organizarse el ser. Describe
            una condición constitutiva: un ser absolutamente desprovisto de estar deja de ser inteligible
            como ser determinado, y un estar sin algo que sea queda igualmente indeterminado.
          </p>
        </Note>
      </ConceptSection>

      <ConceptSection id="caos" title="Caos, infinito y determinación">
        <p>
          El estar no debe reducirse a ocupar coordenadas espaciales. El espacio constituye ya una
          determinación; lo mismo ocurre con el tiempo. Ninguno de ambos agota aquello que aquí se denomina
          infinito.
        </p>

        <Formula label="Distinciones">
          <span>infinito ≠ espacio ; infinito ≠ tiempo</span>
        </Formula>

        <p>
          <strong>Caos</strong> denomina al infinito en cuanto infinito: el campo dentro del cual pueden
          distinguirse determinaciones, posibilidades, fronteras y también aquello que queda fuera de
          ellas. En una reducción elemental, ser y no-ser comparecen como fronteras recíprocas sin que
          ninguno de los dos pueda identificarse por sí mismo con el infinito.
        </p>

        <Note title="Caos no significa desorden">
          <p>
            La denominación no describe una condición caótica en el sentido cotidiano. Señala el infinito
            que no se agota en espacio, tiempo, actualidad o posibilidad. Que dentro de él puedan
            distinguirse lo positivo, lo negativo, lo posible o incluso lo imposible no implica que todos
            esos términos posean el mismo modo de ser.
          </p>
        </Note>
      </ConceptSection>

      <ConceptSection id="colapso" title="Estar como colapso">
        <p>
          Estar significa encontrarse determinado dentro del infinito de posibilidades. El término
          <strong> colapso</strong> nombra esa determinación, no una destrucción.
        </p>

        <Formula label="Determinación">
          <span>Caos → colapso → determinación</span>
        </Formula>

        <p>
          Aquello que está ocupa una determinación. Esa determinación no tiene que ser exclusivamente
          espacial: puede ser temporal, material, causal, conceptual, histórica, simbólica, relacional,
          institucional o narrativa. La escala concreta debe establecerse después; lo primero es que
          aquello que está ya no comparece como pura indeterminación.
        </p>
      </ConceptSection>

      <ConceptSection id="permanencia-devenir" title="Permanencia y devenir">
        <p>
          La relación ser/estar permite reconsiderar la oposición tradicional entre Parménides y
          Heráclito. Ambos pueden comprenderse como observadores de un mismo fenómeno desde ejes distintos
          del caleidoscopio.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Parménides
            </p>
            <p className="text-sm leading-7 text-slate-700">
              Observa predominantemente la impermeabilidad, permanencia y frontera del ser: el ser es y
              no es lo que no es.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Heráclito
            </p>
            <p className="text-sm leading-7 text-slate-700">
              Observa predominantemente el devenir, flujo y transformación del estar: aquello que está
              cambia.
            </p>
          </div>
        </div>

        <Formula label="Mismo fenómeno, distintos ejes">
          <span>Sum → ser / permanencia ; Sum → estar / devenir</span>
        </Formula>

        <p>
          La permanencia no exige inmovilidad y el devenir no exige que aquello que cambia caiga en el
          no-ser para que aparezca un ser nuevo. <strong>El cambio sucede en el estar.</strong>
        </p>
      </ConceptSection>

      <ConceptSection id="trayectoria" title="Trayectoria: el cambio sin ruptura ontológica">
        <p>
          Un adulto ya no posee las mismas células, gustos, temores, conocimientos o relaciones que tuvo
          durante la infancia. Si cada cambio exigiera una ruptura ontológica, habría que localizar el
          momento en el que el niño se convirtió en no-ser para que apareciera otro ser.
        </p>

        <Formula label="Ruptura innecesaria">
          <span>niño ⇏ no-ser → adulto</span>
        </Formula>

        <Formula label="Continuidad determinada">
          <span>S(E₁) → S(E₂) → S(E₃)</span>
        </Formula>

        <p>
          La misma estructura aparece en la semilla y el árbol. La transformación morfológica puede ser
          enorme sin producir un árbol arbitrario: la trayectoria restringe aquello en lo que esa semilla
          puede determinarse.
        </p>

        <Formula>
          <span>semilla → germinación → crecimiento → árbol</span>
        </Formula>

        <p>
          El ser continúa mientras cambia su estar. Por ello, la continuidad no requiere conservar una
          colección inmutable de propiedades.
        </p>
      </ConceptSection>

      <ConceptSection id="tiempo-posibilidad" title="Lo que fue, será, podría ser y no será">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-5">
            <p className="mb-2 font-semibold text-slate-900">Lo que fue</p>
            <p className="text-sm leading-7 text-slate-700">
              Una determinación anterior ya no es presente, pero haber sido no equivale a nunca haber
              sido. La configuración actual procede de una trayectoria.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5">
            <p className="mb-2 font-semibold text-slate-900">Lo que será</p>
            <p className="text-sm leading-7 text-slate-700">
              La determinación presente produce condiciones desde las cuales pueden surgir
              determinaciones posteriores, sin exigir que todo futuro esté predeterminado.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5">
            <p className="mb-2 font-semibold text-slate-900">Lo que podría ser</p>
            <p className="text-sm leading-7 text-slate-700">
              Todo estar delimita un campo de posibilidades. La posibilidad pertenece a una trayectoria
              como posibilidad, no como actualidad paralela.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5">
            <p className="mb-2 font-semibold text-slate-900">Lo que no será</p>
            <p className="text-sm leading-7 text-slate-700">
              Toda determinación no sólo abre posibilidades: también las clausura. Una posibilidad no
              actualizada puede pertenecer a la trayectoria precisamente como posibilidad cerrada.
            </p>
          </div>
        </div>

        <Formula label="Distinción fundamental">
          <span>posibilidad ≠ actualidad</span>
        </Formula>
      </ConceptSection>

      <ConceptSection id="univocidad" title="Univocidad del ser">
        <p>
          Si algo está, es. De esta relación se sigue la univocidad del ser en tanto ser. Esto no significa
          que todas las cosas posean el mismo modo de existencia ni que sean equivalentes material,
          causal, histórica o categorialmente.
        </p>

        <Formula label="Forma mínima">
          <span>estar → ser</span>
        </Formula>

        <Formula label="Límite categorial">
          <span>univocidad ontológica ≠ identidad categorial</span>
        </Formula>

        <p>
          Las diferencias aparecen al determinar modos del ser, modos del estar, categorías, propiedades,
          relaciones, capacidades causales o escalas. La univocidad se predica del ser
          <strong> en tanto ser</strong>; no borra las diferencias entre aquello que es.
        </p>
      </ConceptSection>

      <ConceptSection id="escala" title="Escala de predicación">
        <p>
          Antes de predicar algo del ser debe establecerse <strong>qué puede predicarse y desde qué
          escala</strong>. La escala no crea aquello que es; delimita qué propiedades pueden observarse,
          medirse o afirmarse legítimamente en una operación determinada.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "material → propiedades físicas",
            "temporal → trayectoria y cambio",
            "causal → producción y efectos",
            "histórica → inscripción y consecuencias",
            "narrativa → configuración textual",
            "institucional → reglas y reconocimiento",
            "simbólica → significación y circulación",
            "relacional → posición respecto de otros",
          ].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 font-mono text-sm text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>

        <p>
          El error no consiste en usar categorías o adjetivos, sino en olvidar la escala desde la cual se
          predican y trasladar sus consecuencias a otra jurisdicción sin mediación. La posibilidad de
          medir al ser no contradice esta ontología: la presupone, porque sólo puede medirse aquello que se
          encuentra determinado.
        </p>
      </ConceptSection>

      <ConceptSection id="casos" title="Casos de frontera: personaje, sujeto y divinidad">
        <p>
          La univocidad puede hacerse visible mediante casos deliberadamente heterogéneos: Shaka de
          Virgo, Gandalf, Don Quijote, Gandhi, Zeus o Yahvé. Afirmar que todos son no significa afirmar que
          todos existan del mismo modo.
        </p>

        <Formula label="Colapso">
          <span>M₀ → aparición de X → M₁ ; M₁ ≠ M₀</span>
        </Formula>

        <p>
          Una vez producida una determinación, el mundo ya no puede regresar sin más al estado anterior a
          ese colapso. Don Quijote puede predicarse como ficticio; Gandhi como sujeto histórico; Zeus como
          figura religiosa, cultural o mitológica. Cada predicación exige su propia escala.
        </p>

        <p>
          El adjetivo no revoca el ser sobre el cual se predica. Decir que algo es ficticio, histórico,
          simbólico o religioso ya supone una determinación acerca de la cual se está hablando. Primero se
          establece que <code className="font-mono">X</code> está y, por tanto, es; después se pregunta
          <strong> cómo es, cómo está y desde qué escala puede predicarse</strong>.
        </p>
      </ConceptSection>

      <ConceptSection id="herramientas" title="Relación con las herramientas metodológicas">
        <p>
          El sum delimita el terreno ontológico sobre el que posteriormente operan herramientas como el
          puente rawlsiano y la tautología euclidiana. Ninguna de ellas sustituye al ser ni crea por sí
          misma aquello que pretende describir.
        </p>

        <Formula label="Puente rawlsiano">
          <span>A + P → B</span>
        </Formula>

        <p>
          El puente obliga a declarar qué mediación autoriza el tránsito entre predicaciones o escalas. Si
          una propiedad observada en una escala pretende convertirse en una atribución perteneciente a
          otra, debe hacerse visible el operador que legitima ese cambio.
        </p>

        <Formula label="Tautología euclidiana">
          <span>X → C_X ; ¬C_X → ¬X</span>
        </Formula>

        <p>
          La tautología euclidiana examina las condiciones constitutivas bajo las cuales una operación
          puede seguir siendo aquello que afirma ser. Su necesidad interna no debe confundirse con una
          necesidad encontrada directamente en el sum.
        </p>

        <p>
          En conjunto, las tres piezas cumplen funciones distintas: <strong>sum</strong> delimita el
          fenómeno; <strong>el puente rawlsiano</strong> audita los tránsitos; y
          <strong> la tautología euclidiana</strong> audita los cierres constitutivos.
        </p>
      </ConceptSection>

      <ConceptSection id="regla" title="Regla ontológica">
        <DefinitionBox>
          <p>
            <strong>
              El ser es lo que es, lo que fue, lo que será, lo que podría ser, lo que no será y no es lo
              que no es; porque el ser es en tanto está.
            </strong>
          </p>
        </DefinitionBox>

        <p>
          No debe reducirse el ser a su estado presente; confundirse transformación con caída en el
          no-ser; equipararse posibilidad con actualidad; convertirse la negación en entidad; confundirse
          univocidad con identidad categorial; ni predicarse sobre aquello que es sin declarar la escala
          desde la cual se realiza la predicación.
        </p>

        <Formula label="Fenómeno completo">
          <span>Sum → permanencia / devenir / determinación</span>
        </Formula>
      </ConceptSection>
    </ConceptArticle>
  );
}
