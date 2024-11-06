import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';


const ClientTravel = ({travels}) => {
    return (
      <Container>
        <Row className="justify-content-center">
          {travels.map((travel) => (
            <Col key={travel.id} md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Viaje a {travel.school.name}</Card.Title>
                  <Card.Text>
                    <strong>Hora:</strong> {travel.hour}
                    <br />
                    <strong>Capacidad:</strong> {travel.capacity}
                    <br />
                    <strong>Estado:</strong> {travel.state}
                    <br />
                    <strong>Dirección de la escuela:</strong> {travel.school.schoolAdress}
                    <br />
                    <strong>Conductor:</strong> {travel.driver.fullName}
                    <br />
                    <strong>Distrito:</strong> {travel.district}
                  </Card.Text>
                  <Button variant="primary">Inscribirse</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };

export default ClientTravel