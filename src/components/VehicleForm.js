import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";

function VehicleForm({ vehicle, onVehicleSubmit }) {
  const [formData, setFormData] = useState(vehicle || {});
  const [isFormValid, setIsFormValid] = useState(false);

  const [errors, setErrors] = useState({
    brand: false,
    model: false,
    year: false,
    color: false,
    doors: false,
    passengers: false,
    cc: false,
    HP: false,
    fuelType: false,
    transmission: false,
  });

  const [touched, setTouched] = useState({
    brand: false,
    model: false,
    year: false,
    color: false,
    doors: false,
    passengers: false,
    cc: false,
    HP: false,
    fuelType: false,
    transmission: false,
  });

  useEffect(() => {
    setFormData(vehicle || {});
  }, [vehicle]);

  useEffect(() => {
    function validateForm() {
      const {
        brand,
        model,
        year,
        color,
        doors,
        passengers,
        cc,
        HP,
        fuelType,
        transmission,
      } = formData;

      const isBrandValid = brand && brand.trim() !== "";
      const isModelValid = model && model.trim() !== "";
      const isYearValid =
        /^\d{4}$/.test(year) &&
        Number(year) >= 1960 &&
        Number(year) <= new Date().getFullYear();
      const isColorValid = color && color.trim() !== "";
      const isDoorsValid = /^\d+$/.test(doors) && Number(doors) > 0;
      const isPassengersValid =
        /^\d+$/.test(passengers) && Number(passengers) > 0;
      const isCCValid = /^\d+$/.test(cc) && Number(cc) > 0;
      const isHPValid = /^\d+$/.test(HP) && Number(HP) > 0;
      const isFuelTypeValid = fuelType && fuelType !== "";
      const isTransmissionValid = transmission && transmission !== "";

      setIsFormValid(
        isBrandValid &&
          isModelValid &&
          isYearValid &&
          isColorValid &&
          isDoorsValid &&
          isPassengersValid &&
          isCCValid &&
          isHPValid &&
          isFuelTypeValid &&
          isTransmissionValid
      );

      setErrors({
        brand: !isBrandValid,
        model: !isModelValid,
        year: !isYearValid,
        color: !isColorValid,
        doors: !isDoorsValid,
        passengers: !isPassengersValid,
        cc: !isCCValid,
        HP: !isHPValid,
        fuelType: !isFuelTypeValid,
        transmission: !isTransmissionValid,
      });
    }

    validateForm();
  }, [formData]);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    setTouched({
      ...touched,
      [event.target.name]: true,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onVehicleSubmit(formData);
    setFormData({});
  }

  return (
    <Card style={{ margin: "2rem" }}>
      <Card.Header>Registro de Vehiculos</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="brand">
            <Form.Label>Marca:</Form.Label>
            <Form.Control
              type="text"
              name="brand"
              value={formData.brand || ""}
              onChange={handleChange}
              placeholder="Marca"
              required
              isInvalid={errors.brand && touched.brand}
              onClick={() => setTouched({ ...touched, brand: true })}
            />
            {errors.brand && touched.brand && (
              <Form.Control.Feedback type="invalid">
                Este campo es obligatorio
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group controlId="model">
            <Form.Label>Modelo:</Form.Label>
            <Form.Control
              type="text"
              name="model"
              value={formData.model || ""}
              onChange={handleChange}
              placeholder="Modelo"
              required
              isInvalid={errors.model && touched.model}
              onClick={() => setTouched({ ...touched, model: true })}
            />
            {errors.model && touched.model && (
              <Form.Control.Feedback type="invalid">
                Este campo es obligatorio
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group controlId="year">
            <Form.Label>Año:</Form.Label>
            <Form.Control
              type="text"
              name="year"
              value={formData.year || ""}
              onChange={handleChange}
              placeholder="Año"
              required
              isInvalid={errors.year && touched.year}
              onClick={() => setTouched({ ...touched, year: true })}
            />
            {errors.year && touched.year && (
              <Form.Control.Feedback type="invalid">
                Este campo es obligatorio
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group controlId="color">
            <Form.Label>Color:</Form.Label>
            <Form.Control
              type="text"
              name="color"
              value={formData.color || ""}
              onChange={handleChange}
              placeholder="Color"
              required
              isInvalid={errors.color && touched.color}
              onClick={() => setTouched({ ...touched, color: true })}
            />
            {errors.color && touched.color && (
              <Form.Control.Feedback type="invalid">
                Este campo es obligatorio
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group controlId="doors">
            <Form.Label>Puertas:</Form.Label>
            <Form.Control
              type="text"
              name="doors"
              value={formData.doors || ""}
              onChange={handleChange}
              placeholder="Puertas"
              required
              isInvalid={errors.doors && touched.doors}
              onClick={() => setTouched({ ...touched, doors: true })}
            />
            {errors.doors && touched.doors && (
              <Form.Control.Feedback type="invalid">
                Este campo es obligatorio
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group controlId="passengers">
            <Form.Label>Pasajeros:</Form.Label>
            <Form.Control
              type="text"
              name="passengers"
              value={formData.passengers || ""}
              onChange={handleChange}
              placeholder="Pasajeros"
              required
              isInvalid={errors.passengers && touched.passengers}
              onClick={() => setTouched({ ...touched, passengers: true })}
            />
            {errors.passengers && touched.passengers && (
              <Form.Control.Feedback type="invalid">
                Este campo es obligatorio
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group controlId="cc">
            <Form.Label>Cilindraje:</Form.Label>
            <Form.Control
              type="text"
              name="cc"
              value={formData.cc || ""}
              onChange={handleChange}
              placeholder="Cilindraje"
              required
              isInvalid={errors.cc && touched.cc}
              onClick={() => setTouched({ ...touched, cc: true })}
            />
            {errors.cc && touched.cc && (
              <Form.Control.Feedback type="invalid">
                Este campo es obligatorio
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group controlId="HP">
            <Form.Label>Potencia (HP):</Form.Label>
            <Form.Control
              type="text"
              name="HP"
              value={formData.HP || ""}
              onChange={handleChange}
              placeholder="Cilindraje"
              required
              isInvalid={errors.HP && touched.HP}
              onClick={() => setTouched({ ...touched, HP: true })}
            />
            {errors.HP && touched.HP && (
              <Form.Control.Feedback type="invalid">
                Este campo es obligatorio
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group controlId="fuelType">
            <Form.Label>Tipo de Combustible:</Form.Label>
            <Dropdown
              onSelect={(eventKey) =>
                handleChange({ target: { name: "fuelType", value: eventKey } })
              }
            >
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-fuelType"
                size="sm"
              >
                {formData.fuelType
                  ? formData.fuelType
                  : "Seleccione un tipo de combustible"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Gasolina">Gasolina</Dropdown.Item>
                <Dropdown.Item eventKey="Diesel">Diesel</Dropdown.Item>
                <Dropdown.Item eventKey="Eléctrico">Eléctrico</Dropdown.Item>
                <Dropdown.Item eventKey="Híbrido">Híbrido</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {errors.fuelType && touched.fuelType && (
              <Form.Control.Feedback type="invalid">
                Este campo es obligatorio
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group controlId="transmission">
            <Form.Label>Transmisión:</Form.Label>
            <Dropdown
              onSelect={(eventKey) =>
                handleChange({
                  target: { name: "transmission", value: eventKey },
                })
              }
            >
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-transmission"
                size="sm"
              >
                {formData.transmission
                  ? formData.transmission
                  : "Seleccione un tipo de transmisión"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Automática">Automática</Dropdown.Item>
                <Dropdown.Item eventKey="Manual">Manual</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {errors.transmission && touched.transmission && (
              <Form.Control.Feedback type="invalid">
                Este campo es obligatorio
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <div className="d-flex justify-content-center mt-3">
            <Button
              type="submit"
              variant="outline-success"
              disabled={!isFormValid}
            >
              Guardar
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default VehicleForm;
