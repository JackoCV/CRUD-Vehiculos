import React, { useState, useEffect } from "react";
import Vehicle from "./Vehicle";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";

function VehicleList({ vehicles, onVehicleDelete, onVehicleEdit }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
  const [currentPage, setCurrentPage] = useState(1);
  const [vehiclesPerPage] = useState(5);

  // Actualizar filteredVehicles cuando vehicles cambia
  useEffect(() => {
    setFilteredVehicles(vehicles);
    setCurrentPage(1); // Reiniciar la página actual al cambiar los vehículos filtrados
  }, [vehicles]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const filteredVehicles = vehicles.filter((vehicle) => {
      const { brand, model, year } = vehicle;
      const searchTermLower = searchTerm.toLowerCase();
      return (
        brand.toLowerCase().includes(searchTermLower) ||
        model.toLowerCase().includes(searchTermLower) ||
        year.toString().includes(searchTermLower)
      );
    });

    setFilteredVehicles(filteredVehicles);
    setCurrentPage(1); // Reiniciar la página actual al cambiar los vehículos filtrados
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastVehicle = currentPage * vehiclesPerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;
  const currentVehicles = filteredVehicles.slice(
    indexOfFirstVehicle,
    indexOfLastVehicle
  );

  const totalPages = Math.ceil(filteredVehicles.length / vehiclesPerPage);
  const paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => handlePageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  const paginationBasic = (
    <div>
      <Pagination>{paginationItems}</Pagination>
    </div>
  );

  return (
    <Card style={{ margin: "0" }}>
      <Card.Header>Lista de Vehículos</Card.Header>
      <Card.Body>
        <div className="mb-3">
          <Form.Control
            type="text"
            placeholder="Buscar por marca, modelo o año"
            value={searchTerm}
            onChange={handleSearch}
            style={{ fontSize: "0.8rem" }}
          />
        </div>
        <div className="table-responsive">
          <Table striped bordered hover size="sm">
            <thead style={{ fontSize: "0.8rem" }}>
              <tr>
                <th className="text-center">Marca</th>
                <th className="text-center">Modelo</th>
                <th className="text-center">Año</th>
                <th className="text-center">Color</th>
                <th className="text-center">Número de Puertas</th>
                <th className="text-center">Pasajeros</th>
                <th className="text-center">Cilindraje</th>
                <th className="text-center">Potencia HP</th>
                <th className="text-center">Combustible</th>
                <th className="text-center">Transmisión</th>
                <th className="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: "0.8rem" }}>
              {currentVehicles.map((vehicle) => (
                <Vehicle
                  key={vehicle.id}
                  vehicle={vehicle}
                  onDelete={onVehicleDelete}
                  onEdit={onVehicleEdit}
                />
              ))}
            </tbody>
          </Table>
        </div>
        {paginationBasic}
      </Card.Body>
    </Card>
  );
}

export default VehicleList;
