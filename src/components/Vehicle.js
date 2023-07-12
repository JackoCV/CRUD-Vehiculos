import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function Vehicle({ vehicle, onDelete, onEdit }) {
  function handleDelete() {
    onDelete(vehicle.id);
  }

  function handleEdit() {
    onEdit(vehicle);
  }

  return (
    <tr>
      <td className="text-center">{vehicle.brand}</td>
      <td className="text-center">{vehicle.model}</td>
      <td className="text-center">{vehicle.year}</td>
      <td className="text-center">{vehicle.color}</td>
      <td className="text-center">{vehicle.doors}</td>
      <td className="text-center">{vehicle.passengers}</td>
      <td className="text-center">{vehicle.cc}</td>
      <td className="text-center">{vehicle.HP}</td>
      <td className="text-center">{vehicle.fuelType}</td>
      <td className="text-center">{vehicle.transmission}</td>
      <td className="text-center">
        <div className="d-flex justify-content-center">
          <button
            onClick={handleEdit}
            className="btn btn-primary btn-sm me-2"
            title="Editar"
          >
            <FaEdit />
          </button>
          <button
            onClick={handleDelete}
            className="btn btn-danger btn-sm"
            title="Eliminar"
          >
            <FaTrash />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Vehicle;
