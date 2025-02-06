import { useState } from "react";

function Button({value, onClick}){
    return(
        <button onClick={onClick}>{value}</button>
    );
}

export default function Contando(){
    const [contador, setContador] = useState(0);

    function handleClick(num){
        setContador(contador + num);
    }
    return(
        <div>
            {/* En el onclick le paso el estado al componente hijo con el valor con el que se va a actualizar 
            para que al hacer4 click en el boton se actualice el estado correctamente*/}
            <Button value="+1" onClick={() => {handleClick(1)}}/>
            <Button value="+10" onClick={() => {handleClick(10)}}/>
            <Button value="+100" onClick={() => {handleClick(100)}}/>
            <Button value="+1000" onClick={() => {handleClick(1000)}}/>
            <p>Contador: {contador}</p>
        </div>
    );
}