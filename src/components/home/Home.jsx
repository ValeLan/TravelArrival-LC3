import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    toast.info("Redirigiendo a Iniciar Sesión...", {
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
      navigate("/login");
    }, 1500);
  };

  const handleRegister = () => {
    toast.info("Redirigiendo a Registrarse...", {
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
      navigate("/client");
    }, 1500);
  };

  return (
    <div className="container-home">
      <ToastContainer />
      <h1 className="text-light mb-5 text-center">
        ¡Bienvenido a Nuestra Plataforma!
      </h1>
      <Row className="gap-3 justify-content-center">
        <Col xs={12} md={5} lg={8}>
          <Card className="m-4 p-3 shadow-lg text-center">
            <Card.Body>
              <Card.Text>
                Si tienes una cuenta, puedes iniciar sesión. Si no, regístrate
                para empezar.
              </Card.Text>
              <Button variant="primary" onClick={handleLogin} className="m-2">
                Iniciar Sesión
              </Button>
              <Button
                variant="secondary"
                onClick={handleRegister}
                className="m-2"
              >
                Registrarse
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
  // return (
  //   <div className="container-home">
  //       <h1 className="text-light">Bienvenido a Travel Arrival!</h1>

  //   </div>
  // )
};

export default Home;
