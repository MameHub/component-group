import { useState } from "react";

export default function DespliegueEnViernes() {
    const [text, setText] = useState("");
    let despliegueViernes = false; // Booleana que controla si el despliegue es incorrecto.
    let clase = "despliegueviernes "; // Variable que almacena la clase del resultado.

    const handleChange = (e) => {
        setText(e.target.value);
    };

    // Determinamos si el textarea contiene la combinación de palabras prohibidas.
    const textoMinusculas = text.toLowerCase();
    despliegueViernes = textoMinusculas.includes("despliegue viernes") || textoMinusculas.includes("deploy viernes");

    return (
        <>
            <textarea
                value={text}
                onChange={handleChange}
                className={clase += despliegueViernes && "rojoDespliegueViernes"}
            >
            </textarea><br/>
            {despliegueViernes ? <a id="despliegueViernesEnlace" href="https://youtu.be/Vhmek8362Fc">Pierde el miedo a desplegar en viernes</a> : <a>No es despliegue en viernes</a>}
        </>
    );
}