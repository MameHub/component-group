import {useState} from 'react';

export default function CuentaFuegos(){
    const [fuegos, setFuegos] = useState(0);

    // Al hacer cklick en el boton actualizado el estado de los fuegos
    function handleClick(num){
        setFuegos(fuegos + num);
    }

    // Uso una funcion que determinara si hay fuegos o no, En caso afirmativo mostrara tantos fuegos como el numero de la variable
    function mostrarFuegos(fuegos){
        let fueguitos = "";
        fueguitos = !fuegos ? "No hay fuegos" : "🔥".repeat(fuegos); // Con el repeat devuelve tantas veces la misma cadena como el parametro que yo le he pasado
        return fueguitos;
    }

    return(
        <div>
            <button onClick={() => {handleClick(1)}}>Fuego</button>
            <p>Fuegos: {mostrarFuegos(fuegos)}</p>
        </div>
    );
}