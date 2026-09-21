import AxisPage from "../../components/AxisPage";

const programs = [
  {
    title: "Diálogos Eleatas",
    subtitle: "Revista académica del Centro Multidisciplinario Meriadock",
    paragraphs: [
      "Diálogos Eleatas es el programa editorial permanente del eje de Investigación y desarrollo. Funciona como un espacio para la publicación, discusión y examen de trabajos que someten conceptos, inferencias, modelos y estructuras teóricas a revisión rigurosa.",
      "La revista es multidisciplinaria, electrónica, semestral y de acceso abierto. Recibe contribuciones de distintas áreas del conocimiento y admite aproximaciones interdisciplinarias y transdisciplinarias cuando el problema estudiado así lo requiere. Los artículos académicos que superan la revisión editorial son sometidos a evaluación por pares bajo un esquema de doble ciego.",
      "Además de los artículos académicos, la revista mantiene Curia Predicati como una sección editorial diferenciada para ejercicios de examen, argumentación y confrontación conceptual.",
    ],
    itemsLabel: "Contenido editorial",
    items: [
      {
        title: "Artículos académicos",
        description:
          "Contribuciones que siguen el proceso editorial de la revista y, cuando corresponde, son sometidas a evaluación académica por pares.",
      },
      {
        title: "Curia Predicati",
        description:
          "Sección editorial diferenciada dedicada al examen argumentativo de problemas, conceptos y predicaciones.",
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
      description="Este eje concentra iniciativas orientadas a producir, examinar, organizar y difundir conocimiento, así como a construir herramientas y espacios que permitan someter problemas, ideas y modelos a revisión sistemática."
      programs={programs}
    />
  );
}
