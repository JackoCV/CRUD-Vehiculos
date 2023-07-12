import React from "react";

function VehicleDetails({ vehicle, onEditVehicle }) {
  function handleEdit() {
    onEditVehicle(vehicle);
  }

  return (
    <div>
      <h2>Detalles del vehículo</h2>
      <p>Marca: {vehicle.brand}</p>
      <p>Modelo: {vehicle.model}</p>
      <p>Año: {vehicle.year}</p>
      <p>Color: {vehicle.color}</p>
      <p>Número de Puertas: {vehicle.doors}</p>
      <p>Cantidad de Pasajeros: {vehicle.passengers}</p>
      <p>Cilindraje: {vehicle.cc}</p>
      <p>Potencia HP: {vehicle.HP}</p>
      <p>Transmisión: {vehicle.transmission}</p>
      <p>Combustible: {vehicle.fuelType}</p>
      <button onClick={handleEdit} className="btn btn-outline-primary">
        Editar
      </button>
    </div>
  );
}

export default VehicleDetails;
