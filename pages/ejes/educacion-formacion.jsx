import AxisPage from "../../components/AxisPage";

const programs = [
  {
    title: "Academia Meriadock",
    subtitle: "Plataforma permanente de formación",
    paragraphs: [
      "Academia Meriadock es el programa permanente mediante el cual la Asociación organiza su oferta de educación y formación en línea. La plataforma reúne contenidos académicos, sesiones, recursos de estudio, actividades, evaluaciones, seguimiento de progreso y mecanismos de acreditación.",
      "Los programas se estructuran como recorridos formativos completos y pueden ampliarse conforme se desarrollen nuevas propuestas académicas. La Academia funciona como un sistema propio dentro del ecosistema digital de Meriadock, por lo que cada estudiante puede acceder desde allí a los diplomados disponibles y a su progreso individual.",
    ],
    itemsLabel: "Diplomados disponibles",
    items: [
      {
        title: "Diplomado en autodeterminación causal",
        description:
          "Programa dedicado al estudio de la autodeterminación causal y de las herramientas conceptuales utilizadas para examinar determinación, voluntad, responsabilidad y atribución causal.",
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
      description="Este eje reúne los programas mediante los cuales Meriadock organiza procesos estructurados de aprendizaje, educación continua y desarrollo académico, con contenidos, actividades y criterios de acreditación definidos."
      programs={programs}
    />
  );
}
