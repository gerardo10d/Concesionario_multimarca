import PrivateLayout from "layouts/PrivateLayout";
import React, { useEffect } from "react";

const Vehiculos = () => {

  // La función que va a ejecutar el useEffect se coloca en el primer parámetro,
  // y va sin nombre por lo general, para ahorrar código.
  // en el array [ ] irían las variables que está escuchando para ejecutar la función,
  // pero si se deja vacío se ejecutará el useEffect una sola vez al renderizar la página
  // útil para esos casos
  useEffect( () => {
    console.log('Hola, soy un useEffect que se ejecuta solo una vez cuando la página se renderiza, porque tiene el array de dependencias vacío');
  } , [ ] )

  return (
    <PrivateLayout>
      <form className="flex flex-col" action="">
        <h2>Formulario de creación de vehículos</h2>
        <input onChange={(e) =>{console.log(e.target.value)}} type="text" placeholder="Nombre del vehículo" />
        <input type="text" placeholder="Marca del vehículo" />
        <input type="text" placeholder="Modelo del vehículo" />
        <button className="bg-indigo-500 text-white">Enviar datos</button>
      </form>
    </PrivateLayout>
  );
};

export default Vehiculos;
