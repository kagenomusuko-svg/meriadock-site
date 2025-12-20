import PropTypes from "prop-types";

/*
  ExternalHtml: componente ligero que incrusta un HTML externo en un iframe.
  - src: ruta absoluta o relativa al archivo HTML (por ejemplo "/assets/html/.../archivo.html")
  - title: texto para aria-label / accesibilidad
  - minHeight: altura mínima del iframe
  Nota: coloca los archivos HTML en /public/assets/... para que sean servidos por Next.js
*/
export default function ExternalHtml({ src, title = "Contenido externo", minHeight = 700 }) {
  return (
    <div className="w-full">
      <div className="border rounded overflow-hidden" style={{ minHeight }}>
        <iframe
          src={src}
          title={title}
          style={{ width: "100%", height: "100%", minHeight, border: "none" }}
          // sandbox si tu HTML no necesita cookies/same-origin/desbloquear scripts, quita atributos si necesitas que forme parte del mismo origen
          // si los HTML contienen scripts y recursos relativos, es probable que necesites allow-same-origin allow-scripts
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        />
      </div>
    </div>
  );
}

ExternalHtml.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};