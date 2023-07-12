import { useState, useEffect } from "react";
import useVehicles from "./useVehicles";

function useVehicleManager() {
  const [vehicles, addVehicle, editVehicle, deleteVehicle] = useVehicles();
  const [vehicleState, setVehicleState] = useState({
    selectedVehicle: null,
    isEditing: false,
  });
  const [alertState, setAlertState] = useState({
    showSuccessAlert: false,
    alertMessage: "",
  });

  useEffect(() => {
    if (!vehicleState.isEditing) {
      setVehicleState((prevState) => ({
        ...prevState,
        selectedVehicle: null,
      }));
    }
  }, [vehicleState.isEditing]);

  const handleVehicleSubmit = async (vehicle) => {
    try {
      if (vehicleState.isEditing) {
        await editVehicle(vehicleState.selectedVehicle.id, vehicle);
        setVehicleState({ selectedVehicle: null, isEditing: false });
        setAlertState({
          showSuccessAlert: true,
          alertMessage: "Vehículo editado con éxito!",
        });
      } else {
        await addVehicle(vehicle);
        setAlertState({
          showSuccessAlert: true,
          alertMessage: "Vehículo agregado con éxito!",
        });
      }
      setTimeout(() => setAlertState({ showSuccessAlert: false }), 1000);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteVehicle = (id) => {
    deleteVehicle(id);
    if (vehicleState.selectedVehicle?.id === id) {
      setVehicleState({ selectedVehicle: null, isEditing: false });
    }
    setAlertState({
      showSuccessAlert: true,
      alertMessage: "Vehículo eliminado con éxito!",
    });
    setTimeout(() => setAlertState({ showSuccessAlert: false }), 1000);
  };

  const handleSelectVehicle = (editVehicle, isEditing = false) => {
    setVehicleState({ selectedVehicle: editVehicle, isEditing });
  };

  return {
    vehicles,
    vehicleState,
    alertState,
    handleVehicleSubmit,
    handleDeleteVehicle,
    handleSelectVehicle,
  };
}

export default useVehicleManager;
