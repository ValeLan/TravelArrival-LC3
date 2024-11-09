import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "./Client.css";

const ClientTravel = ({ data }) => {
  return (
    <div className="containerClientTravel">
      <Row className="justify-content-center">
        {data?.map((travel) => (
          <Col key={travel.id} md={4} className="mb-4 w-50">
            <Card>
              <Card.Body>
                <Card.Title className="mb-4">
                  Viaje a {travel.school.name}
                </Card.Title>
                <Card.Text>
                  <strong>Hora de salida:</strong> {travel.hour}
                </Card.Text>
                <Card.Text>
                  <strong>Capacidad:</strong> {travel.capacity}
                </Card.Text>
                <Card.Text>
                  <strong>Estado:</strong> {travel.state}
                </Card.Text>
                <Card.Text>
                  <strong>Dirección de la escuela:</strong>{" "}
                  {travel.school.schoolAdress}
                </Card.Text>
                <Card.Text>
                  <strong>Conductor:</strong> {travel.driver.fullName}
                </Card.Text>
                <Card.Text>
                  <strong>Distrito:</strong> {travel.district}
                </Card.Text>
                <Button className="mt-4" variant="primary">
                  Inscribirse
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

ClientTravel.propTypes = {
  data: PropTypes.array,
};

export default ClientTravel;