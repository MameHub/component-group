export default function ImagenCiudad({ciudad}) {
    return (
        <img className="imagenCiudad" src={`/img/${ciudad}.jpg`} alt={ciudad} />
    );
}