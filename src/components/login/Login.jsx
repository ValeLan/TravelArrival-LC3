import React, {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css"; 
import { AuthContext } from "../services/authentication/AuthContext";


const Login = () => {

  const { saveToken } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();

  const fetchToken = async ({email, password}) => {

    if (!email || !password) {
      setError("Por favor, ingresa email y contraseña.");
      return;
    }

    try {                         //https://localhost:7016/api/Authenticate
      const response = await fetch(`https://localhost:7016/api/Authenticate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const jsonData = await response.text();
      saveToken(jsonData);
      setData(jsonData);
      const tokenParts = jsonData.split(".");
      if (tokenParts.length < 2) throw new Error("Token no válido");

      const payload = JSON.parse(atob(tokenParts[1]));
      const role = payload.role;

      if (role === "Admin") {
        navigate("/admin");
      } else if (role === "Passenger") {
        navigate("/client-travel");
      } else if (role === "Driver") {
        navigate("/driver");
      } else {
        throw new Error("Rol no reconocido");
      }

      console.log("El token es:", jsonData);
    } catch (error) {
      setError(error.message);
      console.error("Error al obtener el Token:", error);
    }
  };

  const handleLogin = async () => {
    await fetchToken({email, password});
    }

  return (
    <div className="container-login">
      <Form className="bg-white p-5 rounded shadow">
        <Form.Text className="fs-1 text-dark">Iniciar Sesión</Form.Text>
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
          <Button 
          variant="primary" 
          className=" px-4" 
          onClick={handleLogin}
          disabled = {!email || !password}>
            Ingresar
          </Button>
        </Form.Group>

        <Form.Text className="text-dark">
        Si no estás registrado, <a href="" onClick={() => navigate("/client")}>ingrese aquí</a>
        </Form.Text>
      </Form>
    </div>    
  );
  
};

export default Login;