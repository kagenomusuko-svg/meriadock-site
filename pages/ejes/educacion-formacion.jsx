import AxisPage from "../../components/AxisPage";

const programs = [
  {
    title: "Academia Meriadock",
    subtitle: "Plataforma permanente de formación",
    description:
      "Programa permanente de educación y formación mediante el cual Meriadock organiza trayectos académicos estructurados, recursos de estudio, actividades, evaluaciones y acreditación. Su oferta se desarrolla en una plataforma propia y puede ampliarse conforme se incorporen nuevos programas.",
    itemsLabel: "Diplomados disponibles",
    items: [
      {
        title: "Diplomado en autodeterminación causal",
        description:
          "Trayecto formativo dedicado al estudio de la autodeterminación causal y de las herramientas conceptuales con las que pueden examinarse la determinación, la voluntad, la responsabilidad y la atribución causal.",
      },
      {
        title: "Diplomado en disociación del ego",
        description:
          "Programa orientado al examen de la constitución del ego, su relación con la alteridad y las formas en que puede producirse una separación entre el eje propio y las determinaciones que organizan la acción.",
      },
      {
        title: "Diplomado en disforia de la identidad",
        description:
          "Programa que aborda la identidad como problema de constitución y conflicto, atendiendo a sus mediaciones, formas de reconocimiento y tensiones internas desde una perspectiva conceptual.",
      },
    ],
    href: "/academia",
    action: "Ir a Academia Meriadock",
  },
];

export default function EducacionFormacion() {
  return (
    <AxisPage
      title="Educación y formación"
      description="Este eje reúne programas estructurados de aprendizaje y educación continua. Su propósito es ofrecer recorridos formativos organizados, con contenidos, actividades y criterios de acreditación definidos, mediante propuestas desarrolladas por Meriadock y futuras colaboraciones académicas."
      programs={programs}
    />
  );
}
