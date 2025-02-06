import { useState } from 'react';
import ImagenCiudad from './ImagenCiudad';

export default function Destino() {
    const [ciudadElegida, setciudadElegida] = useState('cordoba');
    const ciudades = ['cordoba', 'barcelona', 'murcia'];

    function handleOnChange(event) {
        setciudadElegida(event.target.value);
    }

    return (
        <>
            <select onChange={handleOnChange} className='destinoSelect'>
                {ciudades.map((ciudad, index) => (
                    <option key={index} value={ciudad}>{ciudad}</option>
                ))}
            </select><br/>
            <ImagenCiudad ciudad={ciudadElegida} />
        </>
    )
}