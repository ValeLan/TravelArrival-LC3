import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <Container className="text-center d-flex flex-column align-items-center justify-content-center vh-100 background-not-found">
      <Row>
        <Col>
          <h1 className="display-1 text-danger">401</h1>
          <h2 className="text-muted">Unauthorized.</h2>
          <p className="lead">
            Lo sentimos, no tiene acceso a esta página.
          </p>
          <Button variant="primary" onClick={handleGoBack} className="mt-3">
            Volver al Inicio
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Unauthorized