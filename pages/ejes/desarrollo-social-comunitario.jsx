import AxisPage from "../../components/AxisPage";

const programs = [
  {
    title: "ECO",
    subtitle: "Talleres socioemocionales en comunidades educativas adolescentes",
    paragraphs: [
      "ECO es un programa permanente de intervención presencial en comunidades educativas adolescentes, particularmente en escuelas secundarias. A través de talleres grupales, el programa abre espacios de diálogo y reflexión sobre situaciones que forman parte de la experiencia cotidiana de las y los estudiantes.",
      "Las sesiones se desarrollan dentro de la propia comunidad educativa y privilegian la participación, el intercambio de perspectivas y la construcción de criterio. Su propósito no es sustituir la atención psicológica ni convertir el espacio escolar en un entorno terapéutico, sino ofrecer experiencias formativas que permitan reconocer problemas, discutirlos y elaborar respuestas con mayor autonomía y responsabilidad.",
      "El contenido de los talleres puede adaptarse a las necesidades de cada comunidad educativa, manteniendo como eje común el trabajo socioemocional, la convivencia y la capacidad de las personas participantes para relacionarse consigo mismas y con otras personas desde condiciones más dignas.",
    ],
  },
  {
    title: "Manos",
    subtitle: "Formación práctica y aprendizaje de oficios",
    paragraphs: [
      "Manos es un programa permanente de formación práctica mediante el cual Meriadock ofrece cursos presenciales orientados al desarrollo de habilidades técnicas y productivas. El aprendizaje se construye principalmente desde la práctica, el acompañamiento y la repetición progresiva de procedimientos hasta que la persona participante puede ejecutarlos con mayor autonomía.",
      "El programa puede incorporar nuevos cursos conforme existan capacidades, materiales y condiciones adecuadas para impartirlos. Cada propuesta se organiza como una experiencia formativa concreta y aplicable, vinculada con habilidades que puedan aprovecharse en la vida cotidiana, en proyectos personales o en actividades productivas.",
    ],
    itemsLabel: "Curso disponible actualmente",
    items: [
      {
        title: "Operador en máquina recta",
        description:
          "Curso presencial orientado al manejo básico de la máquina de coser recta. La formación combina conocimiento del equipo, práctica de operación y ejercicios progresivos para desarrollar control, precisión y seguridad en su uso.",
      },
    ],
  },
];

export default function DesarrolloSocialComunitario() {
  return (
    <AxisPage
      title="Desarrollo social y comunitario"
      description="Este eje reúne las acciones que Meriadock realiza directamente con comunidades y grupos específicos para ampliar capacidades personales, sociales y técnicas mediante procesos presenciales de acompañamiento, formación y participación."
      programs={programs}
    />
  );
}
