import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css"; 

const Login = () => {
  return (
    <div className="container-login">
      <Form className="bg-white p-5 rounded shadow">
        <Form.Text className="fs-1 text-dark">Registrarse</Form.Text>
        <Form.Group className="my-3 text-start" controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingrese email" />
        </Form.Group>
        <Form.Group className="mb-3 text-start" controlId="formGroupPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="contraseña" placeholder="Contraseña" />
        </Form.Group>
        <Form.Group className="mt-4 mb-2">
          <Button variant="primary" className=" px-4">
            Ingresar
          </Button>
        </Form.Group>

        <Form.Text className="text-dark">
          Si ya estás registrado, <a href="/SignIn">inicie sesión.</a>
        </Form.Text>
      </Form>
    </div>
  );
};

export default Login;