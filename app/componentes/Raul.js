import { useState } from 'react';

const aLetra = ["blanco", "negro", "dorado", "gris-texto", "azul-texto"];
const aFondo = ["azul", "morado", "verde", "gris", "naranja"];
let clases = "azul azul-texto";

export default function Raul({ nombre, apellidos, redsocial }) {
    const [color, setColor] = useState('azul-texto');
    const [fondo, setFondo] = useState('azul');

    function handleMouseOver() {
        // Creo esta variables para posteriormente comprobar que no se repita el color
        let newColor = color;
        let newFondo = fondo;

        // Mientras se repita el color que escoja otro nuevo
        while (newColor === color) {
            newColor = aLetra[Math.floor(Math.random() * aLetra.length)];
        }

        while (newFondo === fondo) {
            newFondo = aFondo[Math.floor(Math.random() * aFondo.length)];
        }

        // Una vez que son distintos actualizo el estado
        setColor(newColor);
        setFondo(newFondo);
        // Creado un string para poder añadirle las dos clases en una sola variable
        clases = "";
        clases = color + " " + fondo;
    }

    return (
        <div id="nombre" className={clases} onMouseOver={handleMouseOver}>
            <h2>Hola me llamo {nombre} {apellidos}</h2>
            <h4>Mi red social preferida: {redsocial}</h4>
        </div>
    );
}