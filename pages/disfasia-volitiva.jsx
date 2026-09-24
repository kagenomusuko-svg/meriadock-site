import ConceptArticle, {
  ConceptSection,
  DefinitionBox,
  Formula,
} from "../components/ConceptArticle";

export default function DisfasiaVolitiva() {
  return (
    <ConceptArticle
      title="Disfasia volitiva"
      kicker="Concepto ontológico"
      description="Forma del Aego en la que la voluntad continúa expresándose, pero la relación entre su expresión, su eje y la alteridad se encuentra deformada"
    >
      <ConceptSection id="definicion" title="Definición">
        <DefinitionBox>
          <p>
            <strong>Disfasia volitiva:</strong> configuración del Aego en la que existe expresión
            volitiva, actividad y producción causal, pero la voluntad ya no opera mediante una relación
            diferencial ordinaria entre eje propio y alteridad.
          </p>
        </DefinitionBox>

        <p>
          La disfasia no es ausencia de voz. Es una voz cuya articulación ontológica se encuentra
          alterada.
        </p>

        <Formula label="Distinciones">
          <span>disfasia volitiva ≠ ausencia de voluntad</span>
          <br />
          <span>disfasia volitiva = expresión volitiva con relación alterada respecto del eje</span>
        </Formula>

        <p>
          Sus dos figuras fundamentales son <strong>Damasén</strong> y <strong>Peribea</strong>.
        </p>
      </ConceptSection>

      <ConceptSection id="afasia" title="La diferencia con la afasia">
        <p>
          La distinción es constitutiva:
        </p>

        <Formula label="Afasia">
          <span>la voluntad no comparece como voz propia</span>
        </Formula>

        <Formula label="Disfasia">
          <span>la voluntad comparece, pero su articulación respecto del eje está alterada</span>
        </Formula>

        <p>
          Por ello, la disfasia puede ser mucho más difícil de reconocer.
        </p>

        <p>
          Un sistema disfásico puede parecer soberano, eficiente, adaptable, colaborativo, estable o
          extremadamente productivo. Precisamente porque hay voluntad y hay resultados, la superficie del
          comportamiento puede ocultar la configuración del eje.
        </p>
      </ConceptSection>

      <ConceptSection id="figuras" title="Las dos figuras de la disfasia">
        <Formula>
          <span>Disfasia volitiva → Damasén / Peribea</span>
        </Formula>

        <p>
          Ambas conservan expresión volitiva, pero en direcciones opuestas.
        </p>

        <p>
          Damasén lleva el eje propio hasta la saturación del campo. Peribea permite que la pendiente del
          campo ocupe el lugar operativo del eje propio.
        </p>
      </ConceptSection>

      <ConceptSection id="damasen" title="Damasén: saturación del eje propio">
        <p>
          Damasén no representa carencia de voluntad. Representa su exceso de eficacia.
        </p>

        <p>
          El eje ha producido tal densidad sobre el campo que la alteridad deja de devolver una diferencia
          suficiente para modificarlo. La voluntad continúa expresándose, pero el campo comienza a
          reproducir anticipadamente su geometría.
        </p>

        <Formula label="Saturación">
          <span>eje propio → saturación del campo → reducción de diferencia</span>
        </Formula>

        <p>
          El sujeto ya no necesita conquistar mediante cada acto porque su presencia organiza previamente
          las posibilidades de los demás. La conquista deja de presentarse como combate y se convierte en
          arquitectura.
        </p>

        <p>
          Esta configuración puede expresarse mediante la idea de <strong>Pax Damasén</strong>: una paz
          producida no por ausencia de poder, sino por una imposición tan completa de la geometría del
          campo que la resistencia deja de comparecer como posibilidad efectiva.
        </p>

        <Formula label="Pax Damasén">
          <span>conquista perfecta → la lucha se vuelve innecesaria</span>
        </Formula>

        <p>
          El problema ontológico no es que Damasén tenga demasiado poder en un sentido moral. Es que la
          desaparición de resistencia empobrece la alteridad que podría retornar sobre él mediante la
          segunda mediación.
        </p>

        <p>
          La eficacia produce su propio límite.
        </p>
      </ConceptSection>

      <ConceptSection id="peribea" title="Peribea: expresión desde un eje prestado">
        <p>
          Peribea conserva movimiento, voluntad y producción causal.
        </p>

        <p>
          Lo que pierde es el origen propio desde el cual esa expresión se articula.
        </p>

        <Formula label="Pendiente prestada">
          <span>eje ajeno → criterios incorporados → expresión volitiva como si fuera propia</span>
        </Formula>

        <p>
          La voluntad puede decir sí. Puede decir no. Puede actuar, elegir entre opciones, colaborar,
          adaptarse y producir resultados.
        </p>

        <p>
          Pero esas operaciones utilizan una pendiente que el sujeto ha incorporado desde otro campo y que
          ya no distingue claramente de la propia.
        </p>

        <Formula label="Advertencia">
          <span>adaptación eficaz ⇏ soberanía</span>
        </Formula>

        <p>
          La disfasia de Peribea consiste precisamente en que la voz continúa hablando. Habla con la
          gramática del otro.
        </p>
      </ConceptSection>

      <ConceptSection id="inversiones" title="Damasén y Peribea como inversiones">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Damasén
            </p>
            <p className="mb-3 font-mono text-sm text-slate-900">mi eje → coloniza el campo</p>
            <p className="text-sm leading-7 text-slate-700">
              La diferencia exterior disminuye hasta que el campo devuelve principalmente la geometría
              que el propio eje ya produjo.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Peribea
            </p>
            <p className="mb-3 font-mono text-sm text-slate-900">el campo → coloniza mi eje operativo</p>
            <p className="text-sm leading-7 text-slate-700">
              La diferencia exterior se incorpora hasta que la voluntad opera mediante una pendiente que
              ya no reconoce como ajena.
            </p>
          </div>
        </div>

        <p>
          Damasén reduce la alteridad por saturación. Peribea reduce la soberanía por apropiación
          invertida.
        </p>
      </ConceptSection>

      <ConceptSection id="escala-colectiva" title="Escala colectiva">
        <p>
          La disfasia volitiva no pertenece exclusivamente al individuo.
        </p>

        <p>
          Cuando un colectivo alcanza las condiciones estructurales necesarias para operar como ego
          —identidad, voluntad, mediación, producción de actos y trayectoria propia— también puede alcanzar
          los límites del Aego.
        </p>

        <Formula label="Escala individual">
          <span>Disfasia individual → Damasén / Peribea</span>
        </Formula>

        <Formula label="Escala colectiva">
          <span>Disfasia colectiva → Damasén colectivo / Peribea colectivo</span>
        </Formula>

        <p>
          No se trata de afirmar que un colectivo «se comporte como una persona». La predicación depende de
          que la misma arquitectura funcional pueda identificarse a otra escala.
        </p>
      </ConceptSection>

      <ConceptSection id="damasen-colectivo" title="Damasén colectivo">
        <p>
          Un <strong>Damasén colectivo</strong> aparece cuando una estructura colectiva adquiere tal
          densidad que su propia geometría comienza a definir el campo en el que los demás actores pueden
          moverse.
        </p>

        <Formula>
          <span>eje colectivo → saturación del campo → reducción de alternativas diferenciales</span>
        </Formula>

        <p>
          La organización puede conservar instituciones, procedimientos, capacidad de acción y una elevada
          estabilidad. Sin embargo, su densidad puede llegar al punto en que las señales provenientes de la
          alteridad dejan de producir movimiento interno relevante.
        </p>

        <p>
          El sistema no necesita imponer constantemente su forma porque esa forma se ha convertido en el
          espacio ordinario dentro del cual los demás operan.
        </p>

        <p>
          En la escala estatal desarrollada en <em>Caelus</em>, el Aego-Damasén aparece como el Estado que
          ha adquirido tanta densidad institucional y tanta resistencia al cambio que ya no puede moverse
          hacia el soberano que lo constituyó. Responde a la diferencia reproduciendo su propia
          arquitectura.
        </p>

        <Formula label="Respuesta del campo saturado">
          <span>presión externa → reproducción de la estructura existente</span>
        </Formula>

        <p>
          No se trata simplemente de estabilidad ni de permanencia institucional. Para que la categoría
          sea pertinente debe existir una pérdida efectiva de movilidad frente a una alteridad que debería
          poder introducir diferencia.
        </p>
      </ConceptSection>

      <ConceptSection id="peribea-colectivo" title="Peribea colectivo">
        <p>
          Un <strong>Peribea colectivo</strong> conserva una elevada capacidad de movimiento.
        </p>

        <p>
          Actúa. Produce decisiones. Modifica el campo. Puede incluso mostrar gran flexibilidad
          institucional.
        </p>

        <p>
          Pero el eje desde el cual ocurre ese movimiento ha sido capturado por una pendiente que no
          corresponde al conjunto que formalmente constituye al colectivo.
        </p>

        <Formula label="Captura del eje colectivo">
          <span>campo parcial o ajeno → captura del eje colectivo → movimiento activo</span>
        </Formula>

        <p>
          La característica decisiva es precisamente que el sistema parece funcionar. No está paralizado.
          Se mueve con eficacia, pero lo hace desde una dirección prestada.
        </p>

        <p>
          En la escala estatal desarrollada en <em>Caelus</em>, el Aego-Peribea aparece cuando el Estado
          continúa legislando, ejecutando y produciendo efectos, pero su operación se orienta desde los
          intereses de una fracción del soberano, de un actor particular o de un campo que ha ocupado su
          eje operativo.
        </p>

        <Formula label="Distinción">
          <span>actividad institucional ⇏ eje colectivo propio</span>
        </Formula>

        <p>
          Por eso el Peribea colectivo puede resultar menos visible que el Damasén colectivo: la ausencia
          de movilidad revela con mayor facilidad un problema que una actividad intensa cuya dirección ha
          sido capturada.
        </p>
      </ConceptSection>

      <ConceptSection id="escalas" title="La relación entre ambas escalas">
        <p>
          El cambio de escala no autoriza a trasladar automáticamente una predicación individual hacia un
          colectivo.
        </p>

        <p>
          Debe demostrarse primero que el objeto colectivo posee las condiciones funcionales necesarias
          para que la categoría pueda aplicarse.
        </p>

        <Formula label="Límite de predicación">
          <span>semejanza conductual ⇏ identidad estructural</span>
        </Formula>

        <p>
          Solo después puede examinarse si la disfasia adopta una configuración Damasén o Peribea.
        </p>

        <p>
          Así, una institución rígida no es necesariamente Damasén. Una organización influida por otra no
          es necesariamente Peribea. La categoría exige reconstruir la relación entre identidad, voluntad,
          eje, campo y segunda mediación en la escala específica que se pretende analizar.
        </p>
      </ConceptSection>

      <ConceptSection id="afrodita-areia" title="Afrodita Areia y sus adversarios">
        <p>
          La estructura mítica conserva aquí una función ontológica.
        </p>

        <p>
          Afrodita y Ares nombran dos dimensiones constitutivas de la pasión: dominio por apropiación y
          conquista por colisión. Damasén y Peribea aparecen como figuras límite precisamente frente a
          esas dos dimensiones.
        </p>

        <Formula label="Dimensión arética">
          <span>Ares → conquista mediante diferencia</span>
          <br />
          <span>Damasén → conquista que elimina la diferencia</span>
        </Formula>

        <Formula label="Dimensión afrodítica">
          <span>Afrodita → apropiación desde la forma propia</span>
          <br />
          <span>Peribea → forma propia operando desde una apropiación ajena</span>
        </Formula>

        <p>
          Los adversarios de Afrodita Areia no eliminan la voluntad. Llevan sus operaciones hacia
          configuraciones en las que la propia estructura que hizo posible al ego deja de devolverle
          diferencia suficiente para continuar operando del mismo modo.
        </p>

        <p>
          La misma relación puede aparecer a escala colectiva cuando las condiciones constitutivas del ego
          se reproducen estructuralmente en esa escala.
        </p>
      </ConceptSection>

      <ConceptSection id="no-clinico" title="No es una categoría clínica, moral ni política">
        <p>
          La disfasia volitiva no corresponde a la disfasia médica o neurológica.
        </p>

        <p>
          El término se utiliza ontológicamente para nombrar una voluntad que continúa expresándose bajo
          una relación alterada entre eje, campo y segunda mediación.
        </p>

        <p>
          Tampoco significa por sí misma maldad, dominación injusta, sumisión reprochable, ilegitimidad
          política o enfermedad.
        </p>

        <p>
          La identificación de una estructura Damasén o Peribea describe una configuración causal y
          ontológica.
        </p>

        <Formula label="Límite">
          <span>descripción ontológica ⇏ prescripción normativa</span>
        </Formula>

        <p>
          Cualquier predicación ética, jurídica, clínica o política posterior requiere declarar el puente
          mediante el cual se realiza ese tránsito.
        </p>
      </ConceptSection>

      <ConceptSection id="definicion-final" title="Definición final">
        <DefinitionBox>
          <p>
            <strong>
              La disfasia volitiva es la forma del Aego en la que la voluntad conserva expresión y
              eficacia causal, pero su articulación respecto del eje propio y de la alteridad se encuentra
              alterada. En Damasén, el eje propio satura el campo hasta reducir la diferencia que podría
              retornar sobre él; en Peribea, la pendiente del campo es incorporada hasta operar como si
              fuese propia. La misma estructura puede aparecer a escala colectiva: Damasén colectivo
              cuando la densidad del sistema convierte su propia geometría en el campo y reduce su
              capacidad de movimiento frente a la alteridad; Peribea colectivo cuando el sistema conserva
              movimiento y eficacia, pero opera desde una pendiente parcial o ajena que ha ocupado su eje.
              En todas sus formas hay voz. Lo que cambia es desde dónde habla y qué diferencia puede
              todavía escuchar.
            </strong>
          </p>
        </DefinitionBox>
      </ConceptSection>
    </ConceptArticle>
  );
}
