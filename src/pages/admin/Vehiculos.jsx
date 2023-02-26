import PrivateLayout from "layouts/PrivateLayout";
import React, { useEffect, useState } from "react";

const Vehiculos = () => {
  // La función que va a ejecutar el useEffect se coloca en el primer parámetro,
  // y va sin nombre por lo general, para ahorrar código.
  // en el array [ ] irían las variables que está escuchando para ejecutar la función,
  // pero si se deja vacío se ejecutará el useEffect una sola vez al renderizar la página
  // útil para esos casos

  const [nombreVehiculo, setNombreVehiculo] = useState('');

  useEffect(() => {
    console.log(
      "Hola, soy un useEffect que se ejecuta solo una vez cuando la página se renderiza, porque tiene el array de dependencias vacío"
    );
  }, []);

  useEffect(() => {
    console.log(
      "Esto es una función que se ejecuta cada que cambia el valor de nombreVehiculo"
    );
    console.log("El valor de la variable es ", nombreVehiculo);
  }, [nombreVehiculo]);

  const enviarDatosAlBackend = () => {
    console.log("El valor de la variable nombreVehiculo es ", nombreVehiculo);
  };

  return (
    <PrivateLayout>
      <form className="flex flex-col" action="">
        <h2>Formulario de creación de vehículos</h2>
        <input
          onChange={(e) => {
            setNombreVehiculo(e.target.value);
          }}
          type="text"
          placeholder="Nombre del vehículo"
        />
        <input
          onChange={(e) => {
            console.log(e.target.value);
          }}
          type="text"
          placeholder="Marca del vehículo"
        />
        <input type="text" placeholder="Modelo del vehículo" />
        <button
          type="button"
          onClick={enviarDatosAlBackend}
          className="bg-indigo-500 text-white"
        >
          Enviar datos
        </button>
      </form>
    </PrivateLayout>
  );
};

export default Vehiculos;
