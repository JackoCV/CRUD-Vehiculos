import { useState, useEffect } from "react";

function useVehicles() {
  const [vehicles, setVehicles] = useState([]);

  // Recupera los vehículos de localStorage al montar el componente.
  useEffect(() => {
    const storedVehicles = localStorage.getItem("vehicles");

    if (storedVehicles) {
      setVehicles(JSON.parse(storedVehicles));
    }
  }, []);

  function addVehicle(vehicle) {
    const newVehicles = [...vehicles, { ...vehicle, id: Date.now() }];
    setVehicles(newVehicles);
    // Guarda los nuevos vehículos en localStorage.
    localStorage.setItem("vehicles", JSON.stringify(newVehicles));
  }

  function editVehicle(id, updatedVehicle) {
    const updatedVehicles = vehicles.map((vehicle) =>
      vehicle.id === id ? { ...vehicle, ...updatedVehicle } : vehicle
    );
    setVehicles(updatedVehicles);
    // Guarda los vehículos actualizados en localStorage.
    localStorage.setItem("vehicles", JSON.stringify(updatedVehicles));
  }

  function deleteVehicle(id) {
    const remainingVehicles = vehicles.filter((vehicle) => vehicle.id !== id);
    setVehicles(remainingVehicles);
    // Guarda los vehículos restantes en localStorage.
    localStorage.setItem("vehicles", JSON.stringify(remainingVehicles));
  }

  return [vehicles, addVehicle, editVehicle, deleteVehicle];
}

export default useVehicles;
