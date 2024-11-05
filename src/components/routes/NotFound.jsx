import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./notFound.css"

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <Container className="text-center d-flex flex-column align-items-center justify-content-center vh-100 background-not-found">
      <Row>
        <Col>
          <h1 className="display-1 text-danger">404</h1>
          <h2 className="text-muted">Página No Encontrada</h2>
          <p className="lead">
            Lo sentimos, la página que estás buscando no existe.
          </p>
          <Button variant="primary" onClick={handleGoBack} className="mt-3">
            Volver al Inicio
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
