import { useState } from "react";

export default function Cliqueando() {
    const [contador, setContador] = useState(0);
    let mensaje = ""; // Variable que almacena lo que se le muestra al usuario.
    let clase = "";   // Variable que almacena la clase del resultado del contador
    const claseBase = "cliqueandoClass"; // Nombre de la clase especifica de nuestro botón.

    // Manejador de evento click
    function handleClick() {
        setContador(contador + 1);
    }

    // Manejador cuando el puntero entra en el componente
    function handleOnMouseEnter() {
        setContador(0);
    }

    // En función del valor del contador, mostramos diferentes resultados.
    switch(contador) {
        case 0:
            mensaje = "No has clicado aún";
            clase = "rojo " + claseBase;
            break;
        case 1:
            mensaje = "Has clicado 1 vez";
            clase = "amarillo " + claseBase;
            break;
        default:
            mensaje = `Has clicado ${contador} veces`;
            clase = "verde " + claseBase;
      }

    return (
        <div className={clase} onMouseEnter={handleOnMouseEnter}>
            <button onClick={handleClick}>+1</button>
            <p>{mensaje}</p>
        </div>
    );
}