import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer className="bg-dark-subtle text-center py-1 px-0" style={{ position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={6} className="text-center">
            <h5 className="text-uppercase mb-4 fs-6">Jacksem Cortés Vásquez</h5>
            <hr className="mt-4 mb-3" />
            <p className="mb-0 fs-6">
              &copy; {new Date().getFullYear()} Yoopy. Todos los derechos
              reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
