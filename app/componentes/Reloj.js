import { useState } from "react";

export default function Reloj(){
    // Creo dos estado uno para la fecha y otro para la hora
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [fecha, setFecha] = useState(new Date().toLocaleDateString());

    // Creo una funcion para actualizar la hora y la fecha
    function actualizarHora(){
        setHora(new Date().toLocaleTimeString());
        setFecha(new Date().toLocaleDateString());
    }

    // Hago este set interval para actualizar el estado cada minuto
    setInterval(actualizarHora, 1000);

    return(
        <div>
            <p>{hora}</p>
            <p>{fecha}</p>
        </div>
    );
}