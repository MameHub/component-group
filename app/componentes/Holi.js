export function Holi({nombre}) {
    let mensaje = "";
    mensaje = (nombre && `Hola, ${nombre} ¿Como estás?`) || "Hola, no te conozco";
    return (
        <p>{mensaje}</p>
    )
  }