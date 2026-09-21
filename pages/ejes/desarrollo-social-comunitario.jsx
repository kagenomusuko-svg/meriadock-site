import AxisPage from "../../components/AxisPage";

const programs = [
  {
    title: "ECO",
    subtitle: "Talleres socioemocionales en comunidades educativas adolescentes",
    description:
      "Programa permanente de trabajo presencial con comunidades educativas adolescentes, especialmente secundarias. ECO desarrolla talleres socioemocionales orientados a generar espacios de reflexión, diálogo y participación alrededor de situaciones que forman parte de la vida escolar y comunitaria.",
    href: "/programas/eco",
    action: "Conocer ECO",
  },
  {
    title: "Manos",
    subtitle: "Formación práctica y aprendizaje de oficios",
    description:
      "Programa permanente de formación práctica mediante cursos orientados al desarrollo de habilidades técnicas y productivas. La oferta se construye a partir de aprendizajes aplicables y del acompañamiento directo durante el proceso formativo.",
    itemsLabel: "Oferta actual",
    items: [
      {
        title: "Operador en máquina recta",
        description:
          "Curso presencial para desarrollar habilidades básicas de operación y trabajo con máquina de coser recta, mediante práctica progresiva y ejercicios aplicados.",
      },
    ],
    href: "/programas/manos",
    action: "Conocer Manos",
  },
];

export default function DesarrolloSocialComunitario() {
  return (
    <AxisPage
      title="Desarrollo social y comunitario"
      description="Este eje reúne programas de intervención directa y formación práctica desarrollados con comunidades y grupos específicos. Su trabajo busca ampliar capacidades personales, sociales y técnicas mediante actividades presenciales que puedan incorporarse a la vida cotidiana, educativa y comunitaria."
      programs={programs}
    />
  );
}
