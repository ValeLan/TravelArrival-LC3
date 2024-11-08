import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css"; 
import { useAuthenticate } from "../../useAuthenticate";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  
  const handleLogin = async () => {
    
    const { data, error } = useAuthenticate({ email, password });
    if (data) {
      setToken(data);
      console.log("Token recibido:", data); 
    } else if (error) {
      setError(error);
      console.error("Error de autenticación:", error);
    }
  };

  return (
    <div className="container-login">
      <Form className="bg-white p-5 rounded shadow">
        <Form.Text className="fs-1 text-dark">Registrarse</Form.Text>
        <Form.Group className="my-3 text-start" controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </Form.Group>
        <Form.Group className="mb-3 text-start" controlId="formGroupPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
        </Form.Group>
        <Form.Group className="mt-4 mb-2">
          <Button variant="primary" className=" px-4" onClick={handleLogin}>
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