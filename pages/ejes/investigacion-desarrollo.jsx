import AxisPage from "../../components/AxisPage";

const programs = [
  {
    title: "Diálogos Eleatas",
    subtitle: "Revista académica del Centro Multidisciplinario Meriadock",
    description:
      "Programa editorial permanente dedicado a la discusión, examen y difusión de conocimiento. Diálogos Eleatas es una revista académica multidisciplinaria, electrónica, semestral y de acceso abierto. Recibe trabajos de distintas áreas del conocimiento y somete los artículos académicos a evaluación por pares bajo un esquema de doble ciego.",
    itemsLabel: "Espacios editoriales",
    items: [
      {
        title: "Artículos académicos",
        description:
          "Contribuciones sometidas al proceso editorial y, cuando corresponde, a evaluación académica por pares.",
      },
      {
        title: "Curia Predicati",
        description:
          "Sección editorial diferenciada para ejercicios de examen, argumentación y confrontación conceptual.",
      },
    ],
    href: "/dialogos-eleatas",
    action: "Ir a Diálogos Eleatas",
  },
];

export default function InvestigacionDesarrollo() {
  return (
    <AxisPage
      title="Investigación y desarrollo"
      description="Este eje concentra iniciativas orientadas a producir, examinar, organizar y difundir conocimiento. Reúne proyectos en los que la investigación no se limita a generar resultados, sino que construye espacios, métodos y herramientas para someter ideas, problemas y modelos a revisión rigurosa."
      programs={programs}
    />
  );
}
