import { useContext, useEffect } from "react";
import { Card, Button, Row, Col, Spinner } from "react-bootstrap";
import "./Client.css";
import usePassengerTravels from "../hooks/usePassengerTravels";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../services/authentication/AuthContext";
import NavBar from "../navBar/NavBar";

const ClientTravel = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const { state } = useLocation();  // Obtén el 'travel' pasado desde el otro componente
  const travel = state?.travel;

  useEffect(() => {
    if (travel == null) {
      setTimeout(() => {
        navigate("/travels-cards");
      }, 1500);
    }
  }, [navigate, travel]);

  const cancelTravel = async () => {
    try {
      const response = await fetch(`https://localhost:7016/api/Register/DropTravel/${travel.id}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        }        
      });

      if (!response.ok) {
        throw new Error(`Error cancelar el viaje: ${response.status}`);
      }
      console.log("El viaje fue cancelado exitosamente.");
    } catch (error) {
      console.error("Error:", error);
    }
    navigate("/travels-cards");
  }

  useEffect(() => {
    if (travel) {
      console.log("Viaje actualizado en el componente:", travel);
    }
  }, [travel]);

  if (!travel) return <Spinner />;

  return (
    <>
      <NavBar />
      <div className="containerClientTravel">

        <Row className="w-100 justify-content-center">
          <Col md={4} className="mb-4 w-50">
            <Card>
              <Card.Body>
                <Card.Title className="mb-4">
                  Viaje a {travel.school?.name}
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
                  <strong>Dirección de la escuela:</strong> {travel.school?.schoolAdress}
                </Card.Text>
                <Card.Text>
                  <strong>Conductor:</strong> {travel.driver?.fullName}
                </Card.Text>
                <Card.Text>
                  <strong>Distrito:</strong> {travel.district}
                </Card.Text>
                <Button className="mt-4" variant="primary" onClick={cancelTravel}>
                  Cancelar viaje
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ClientTravel;