import { useContext, useState } from "react";
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import { useEffect } from "react";
import { Slide, toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../services/authentication/AuthContext";

const TravelsCards = () => {
  const [travels, setTravels] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { token } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://localhost:7016/api/Travel/Historical`,
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error(`${response.status}`);
        }

        const jsonData = await response.json();
        setTravels(jsonData);
        return jsonData;
      } catch (error) {
        setError(error.message);
        console.error("Error al obtener los viajes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <Spinner />;

  const handleInscription = (id) => {
    const fetchInscription = async () => {
      try {
        const response = await fetch(
          `https://localhost:7016/api/Register/SignToTravel`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id,
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`${response.status}`);
        }

        const jsonData = await response.json();
        setTravels(jsonData);
        return jsonData;
      } catch (error) {
        setError(error.message);
        console.error("Error al obtener los viajes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInscription();

    toast.success("Inscripto correctamente...", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    });
    setTimeout(() => {
      navigate("/client-travel");
    }, 1500);
  };

  return (
    <div className="text-center d-flex flex-column">
      <ToastContainer />
      <div className="title-container text-center mb-5">
        <h1 className="pb-5">Seleccione el viaje</h1>
      </div>

      <Row className="m-3 d-flex justify-content-center">
        {travels == null ? (
          <p>No hay viajes</p>
        ) : (
          travels?.map((travel) => (
            <Col key={travel.id} md={4} className="mb-4">
              <Card className="shadow h-100 p-3 card-border background-driver">
                <Card.Body className="">
                  <h2 className="mb-3">
                    Viaje a escuela: <br />
                    {travel.school?.name}
                  </h2>
                  <Card.Text className="text-start">
                    <strong>Hora:</strong> {travel.hour}
                  </Card.Text>
                  <Card.Text className="text-start">
                    <strong>Capacidad:</strong> {travel.capacity}
                  </Card.Text>
                  <Card.Text className="text-start">
                    <strong>Estado:</strong> {travel.state}
                  </Card.Text>
                  <Card.Text className="text-start">
                    <strong>Escuela:</strong> {travel.school?.name} (
                    {travel.school?.schoolAdress})
                  </Card.Text>
                  <Card.Text className="text-start">
                    <strong>Chofer:</strong> {travel.driver?.fullName}
                  </Card.Text>
                  <Card.Text className="text-start">
                    <strong>Email:</strong> {travel.driver?.email}
                  </Card.Text>
                  <Card.Text className="text-start">
                    <strong>Distrito:</strong> {travel.district}
                  </Card.Text>

                  <hr />

                  <h3 className="mt-3">
                    Pasajeros: {travel.passengers?.length}
                  </h3>
                  <Button
                    className="mt-4"
                    variant="primary"
                    onClick={() => handleInscription(travel.id)}
                  >
                    Inscribirse
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default TravelsCards;
