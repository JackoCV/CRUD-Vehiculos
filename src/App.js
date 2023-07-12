import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import VehicleForm from './components/VehicleForm';
import VehicleList from './components/VehicleList';
import VehicleDetails from './components/VehicleDetails';
import useVehicleManager from './hooks/useVehicleManager';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Footer';

function App() {
  const [modalShow, setModalShow] = useState(false);
  const {
    vehicles,
    vehicleState,
    alertState,
    handleVehicleSubmit,
    handleDeleteVehicle,
    handleSelectVehicle,
  } = useVehicleManager();

  return (
    <Router>
      <div className="App d-flex flex-column vh-100">
        <Navbar className="bg-dark-subtle text-center py-0 px-0">
          <Container fluid>
            <Navbar.Brand>
              <Link to="/">
                <img
                  alt=""
                  src="https://yoopy.app/wp-content/uploads/2022/11/cropped-logo-yoopy-2-100x75.png"
                />
              </Link>
            </Navbar.Brand>
            <Button variant="outline-primary" onClick={() => setModalShow(true)}>
              Agregar Vehiculo
            </Button>
          </Container>
        </Navbar>

        <Container fluid className="flex-grow-1 mt-3 px-0">
          {alertState.showSuccessAlert && (
            <Alert variant="success">{alertState.alertMessage}</Alert>
          )}
          <Row className="mx-0">
            <Col>
              <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                backdrop="static"
                keyboard={false}
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Agregar Vehiculo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <VehicleForm
                    vehicle={
                      vehicleState.isEditing
                        ? vehicleState.selectedVehicle
                        : null
                    }
                    onVehicleSubmit={(vehicle) => {
                      handleVehicleSubmit(vehicle);
                      setModalShow(false);
                    }}
                  />
                </Modal.Body>
              </Modal>
            </Col>
          </Row>

          <Row className="mx-0 flex-grow-1">
            <Col>
              <Routes>
                <Route
                  path="/"
                  element={
                    <VehicleList
                      vehicles={vehicles}
                      onVehicleDelete={handleDeleteVehicle}
                      onVehicleEdit={(vehicle) => {
                        handleSelectVehicle(vehicle, true);
                        setModalShow(true);
                      }}
                    />
                  }
                />
                <Route
                  path="/lista-vehiculos"
                  element={
                    <VehicleList
                      vehicles={vehicles}
                      onVehicleDelete={handleDeleteVehicle}
                      onVehicleEdit={handleSelectVehicle}
                    />
                  }
                />
                <Route
                  path="/vehiculo/:id"
                  element={
                    <VehicleDetails
                      vehicles={vehicles}
                      onVehicleEdit={handleSelectVehicle}
                    />
                  }
                />
              </Routes>
            </Col>
          </Row>

          <Footer />
        </Container>
      </div>
    </Router>
  );
}

export default App;
