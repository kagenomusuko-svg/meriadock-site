import ConceptArticle, {
  ConceptSection,
  DefinitionBox,
  Formula,
} from "../components/ConceptArticle";

export default function Aego() {
  return (
    <ConceptArticle
      title="Aego"
      kicker="Concepto ontológico"
      description="Configuración límite del ego en la que la relación entre voluntad, eje propio y segunda mediación deja de producir autodeterminación causal desde la diferencia"
    >
      <ConceptSection id="definicion" title="Definición">
        <DefinitionBox>
          <p>
            <strong>Aego:</strong> categoría ontológica que designa las configuraciones límite en las que
            el ego deja de operar como eje recursivo de autodeterminación causal. No supone necesariamente
            ausencia de voluntad, inactividad, pérdida de identidad ni desaparición del sujeto. Señala una
            alteración en la relación mediante la cual la voluntad puede expresarse desde un eje propio,
            encontrarse con la alteridad y retornar sobre sus propios actos mediante la segunda mediación.
          </p>
        </DefinitionBox>

        <Formula label="Arquitectura general">
          <span>Aego → afasia volitiva / disfasia volitiva</span>
        </Formula>

        <p>
          La <strong>afasia volitiva</strong> aparece cuando la voluntad no puede comparecer operativamente
          como voz propia. La <strong>disfasia volitiva</strong> aparece cuando la voluntad continúa
          expresándose, pero la relación entre esa expresión, el eje propio y la alteridad se encuentra
          deformada.
        </p>
      </ConceptSection>

      <ConceptSection id="no-ausencia" title="Aego no significa ausencia de voluntad">
        <p>
          El prefijo no debe interpretarse como si el Aego fuese simplemente un sujeto «sin ego» o una
          voluntad reducida a cero.
        </p>

        <p>
          Un sistema en Aego puede continuar actuando, respondiendo, produciendo efectos y manteniendo una
          trayectoria. Incluso puede mostrar gran eficacia causal, adaptación o coherencia externa.
        </p>

        <Formula label="Distinciones">
          <span>Aego ≠ inactividad</span>
          <br />
          <span>Aego ≠ ausencia de causalidad</span>
          <br />
          <span>Aego ≠ ausencia necesaria de voluntad</span>
        </Formula>

        <p>
          Lo que se encuentra comprometido es la operación del ego como eje capaz de producir diferencia,
          recibir diferencia y asumir causalmente el resultado de esa relación.
        </p>
      </ConceptSection>

      <ConceptSection id="ego" title="Relación con el ego">
        <p>
          El ego no es una sustancia añadida al sujeto. Es la función mediante la cual una trayectoria de
          determinaciones puede ser asumida como propia y modificar el eje desde el que ocurrirán
          determinaciones posteriores.
        </p>

        <Formula label="Ciclo de determinación y retorno">
          <span>voluntad → φ₁ → acto → φ₂ → I(t)</span>
        </Formula>

        <p>
          La segunda mediación permite que el acto no quede únicamente como efecto en el mundo, sino que
          retorne sobre el eje que lo produjo y modifique su trayectoria.
        </p>

        <p>
          El Aego aparece cuando esa arquitectura alcanza una configuración en la que el ciclo ya no puede
          producir esa diferencia de la misma manera. La ruptura puede producirse porque la voz propia no
          comparece —afasia— o porque comparece bajo una relación alterada con el eje y la alteridad
          —disfasia—.
        </p>
      </ConceptSection>

      <ConceptSection id="familias" title="Las dos familias del Aego">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Afasia volitiva
            </p>
            <p className="text-sm leading-7 text-slate-700">
              Ausencia de expresión volitiva desde un eje propio. Sus figuras son Zagreo y Narciso.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Disfasia volitiva
            </p>
            <p className="text-sm leading-7 text-slate-700">
              Expresión de una voluntad cuya relación con el eje propio y la alteridad se encuentra
              alterada. Sus figuras son Damasén y Peribea.
            </p>
          </div>
        </div>
      </ConceptSection>

      <ConceptSection id="afasia" title="Afasia volitiva">
        <p>
          La afasia volitiva nombra la ausencia de expresión volitiva desde un eje propio.
        </p>

        <Formula>
          <span>Afasia volitiva → Zagreo / Narciso</span>
        </Formula>

        <p>
          <strong>Zagreo</strong> representa la afasia por anterioridad: aquello sobre lo cual otros
          ejercen determinaciones antes de que exista un ego capaz de asumirlas, rechazarlas o consentirlas
          desde un eje constituido.
        </p>

        <p>
          <strong>Narciso</strong> representa la afasia por indistinción: una trayectoria que ya existe,
          pero cuya relación consigo misma alcanza un punto en el que aquello que pertenece a la propia
          continuidad puede comparecer como si fuese alteridad.
        </p>
      </ConceptSection>

      <ConceptSection id="disfasia" title="Disfasia volitiva">
        <p>
          La disfasia volitiva nombra la expresión de una voluntad cuya relación con el eje propio se
          encuentra alterada.
        </p>

        <Formula>
          <span>Disfasia volitiva → Damasén / Peribea</span>
        </Formula>

        <p>
          <strong>Damasén</strong> corresponde a la saturación del eje propio: la voluntad se ha expresado
          con tal eficacia que su geometría invade el campo y reduce la diferencia que la alteridad puede
          devolverle.
        </p>

        <p>
          <strong>Peribea</strong> corresponde al eje prestado: la voluntad continúa expresándose, pero lo
          hace mediante criterios, pendientes o estructuras provenientes de otro eje que operan como si
          fueran propios.
        </p>
      </ConceptSection>

      <ConceptSection id="alteridad" title="Aego y alteridad">
        <p>
          La alteridad es decisiva porque el ego no se constituye en aislamiento.
        </p>

        <p>
          La segunda mediación requiere que el acto pueda retornar como algo que produjo efectos en un
          campo que no es simplemente una reproducción del propio eje. Cuando la diferencia desaparece, o
          cuando el eje desde el cual se interpreta esa diferencia ya no es propio, la mediación pierde una
          de las condiciones que permiten la autodeterminación causal.
        </p>

        <p>
          En Damasén, la alteridad pierde capacidad diferencial porque el eje propio ha saturado el campo.
          En Peribea, la alteridad ha penetrado de tal manera en el eje operativo que su pendiente funciona
          como propia. En Zagreo, todavía no existe el eje capaz de mediar soberanamente aquello que otros
          determinan sobre él. En Narciso, la distinción entre continuidad propia y alteridad se vuelve
          inoperante en el punto crítico.
        </p>
      </ConceptSection>

      <ConceptSection id="no-clinico" title="No es una categoría moral ni clínica">
        <p>
          El Aego no significa maldad, culpa, enfermedad, debilidad ni inferioridad. Su uso es ontológico.
        </p>

        <p>
          Los términos <strong>afasia</strong> y <strong>disfasia</strong> son utilizados técnicamente
          dentro del sistema para describir modos de relación entre voluntad, expresión y eje. No
          constituyen diagnósticos neurológicos, psiquiátricos o psicológicos.
        </p>

        <p>
          Asimismo, identificar una configuración como Aego no produce por sí mismo ninguna conclusión
          acerca de lo que debería hacerse con ella.
        </p>

        <Formula label="Límite">
          <span>descripción ontológica ⇏ prescripción</span>
        </Formula>

        <p>
          Cualquier tránsito hacia una conclusión clínica, jurídica, ética o política requiere un puente
          adicional y debe declarar sus propios criterios.
        </p>
      </ConceptSection>

      <ConceptSection id="mapa" title="Mapa del Aego">
        <Formula label="Taxonomía">
          <span>Aego → Afasia volitiva → Zagreo / Narciso</span>
          <br />
          <span>Aego → Disfasia volitiva → Damasén / Peribea</span>
        </Formula>

        <p>
          Las cuatro figuras no describen grados de una misma escala. Designan estructuras diferentes
          mediante las cuales el ego puede alcanzar sus límites.
        </p>
      </ConceptSection>

      <ConceptSection id="definicion-final" title="Definición final">
        <DefinitionBox>
          <p>
            <strong>
              El Aego es la categoría ontológica que reúne las configuraciones límite en las que el ego
              deja de operar como eje recursivo de autodeterminación causal frente a la alteridad. Puede
              presentarse como afasia volitiva, cuando la voluntad no comparece operativamente desde un
              eje propio, o como disfasia volitiva, cuando la voluntad continúa expresándose pero su
              relación con el eje propio y con la diferencia se encuentra deformada. No implica
              necesariamente ausencia de voluntad, actividad o eficacia causal: nombra el límite de la
              operación del ego, no la desaparición del ser que continúa actuando.
            </strong>
          </p>
        </DefinitionBox>
      </ConceptSection>
    </ConceptArticle>
  );
}
