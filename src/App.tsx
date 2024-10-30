import React from 'react';
import { Container, Row, Col, Card, Navbar, Nav, Button } from 'react-bootstrap';
import { FaArrowLeft, FaHome, FaCalendarAlt, FaPlus, FaComments, FaUser } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';


const App: React.FC = () => {
  return (
    <Container fluid className="p-3">
      {/* Header */}
      <Row className="align-items-center mb-3">
        <Col xs="auto">
          <FaArrowLeft size={24} />
        </Col>
        <Col>
          <h4 className="mb-0">Asistencia</h4>
        </Col>
      </Row>

      {/* Profile Section */}
      <Row className="align-items-center mb-3">
        <Col xs="auto">
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            className="rounded-circle"
            width={50}
            height={50}
          />
        </Col>
        <Col>
          <h5 className="mb-0">Alejandro Martínez</h5>
          <p className="text-muted mb-0">alejandro@example.com</p>
        </Col>
      </Row>

      {/* Clases de Hoy Section */}
      <h6 className="mb-3">Clases de Hoy</h6>
      <Row className="gy-3">
        {Array(5).fill(0).map((_, index) => (
          <Col xs={12} key={index}>
            <Card className="shadow-sm">
              <Card.Body className="d-flex align-items-center">
                <FaCalendarAlt size={24} color="#1E88E5" className="me-3" />
                <div className="flex-grow-1">
                  <h6 className="mb-1">APM</h6>
                  <p className="text-muted mb-0">Inicia en tu mercado cercano</p>
                </div>
                <span className="text-muted">09:00 am</span>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Footer Navigation */}
      <Navbar fixed="bottom" bg="light" className="justify-content-around mt-3">
        <Nav>
          <Nav.Link href="#">
            <FaHome size={24} />
          </Nav.Link>
          <Nav.Link href="#">
            <FaCalendarAlt size={24} />
          </Nav.Link>
          <Button variant="primary" className="rounded-circle" style={{ width: 50, height: 50 }}>
            <FaPlus size={24} color="white" />
          </Button>
          <Nav.Link href="#">
            <FaComments size={24} />
          </Nav.Link>
          <Nav.Link href="#">
            <FaUser size={24} />
          </Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default App;
