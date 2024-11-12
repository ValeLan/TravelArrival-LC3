import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button'
import "./Client.css"
import { useState } from 'react';
import { Slide, toast, ToastContainer } from "react-toastify"
import {useNavigate } from 'react-router-dom';

const ClientForm = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [dni, setDni] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [district, setDistrict] = useState(0);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const fetchCreate = async ({ email, fullName, password, dni, phoneNumber, district }) => {
    if (!email || !fullName || !password || !dni || !phoneNumber || !district) {
      setError("Por favor, completa los campos.");
      return;
    }

    try {
      const response = await fetch(`https://localhost:7016/api/Passenger`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          fullName,
          password,
          dni,
          phoneNumber,
          district: parseInt(district),
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      if (
        email != "" &&
        fullName != "" &&
        password != "" &&
        dni != "" &&
        phoneNumber != "" &&
        district != ""
      ) {
        toast.success("Registrado con éxito!", {
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
      }
      if(district == ""){
        setDistrict(0);
      }
      if (response.ok) console.log("SALIO TODO BIEN");
      console.log(response)
    } catch (error) {
      setError(error.message);
      console.error("Error:", error);
      toast.error("Los campos son incorrectos, por favor ingrese nuevamente.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
    }
  };

  const handleSignIn = async () => {
    await fetchCreate({ email, fullName, password, dni, phoneNumber, district });
    navigate("/login");
  }

  return (
    <>
      <ToastContainer />
      <div className="containerClientForm">
        <h1 className="mb-4">Inscribase a nuestros viajes!</h1>
        <Form
          border="danger"
          className="clientForm d-flex flex-column justify-content-center w-75 rounded  p-5"
          style={{ backgroundColor: "#34759c " }}
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <FloatingLabel
              controlId="floatingInput1"
              label="Email"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="my-3">
            <FloatingLabel
              controlId="floatingInput2"
              label="Nombre y apellido"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Nombre y Apellido"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="my-3">
            <FloatingLabel
              controlId="floatingInput3"
              label="Contraseña"
              className="mb-3"
            >
              <Form.Control
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="my-3">
            <FloatingLabel
              controlId="floatingInput4"
              label="DNI"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="DNI"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="my-3">
            <FloatingLabel
              controlId="floatingInput5"
              label="Teléfono"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="+341 555 6665"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="my-3">
            <FloatingLabel
              controlId="floatingInput6"
              label="Zona"
              className="mb-3 text-light"
            >

            <Form.Select
                aria-label="Default select example"
                value={district ?? ""}
                onChange={(e) => setDistrict(parseInt(e.target.value))}
              >
                <option value="" disabled>
                  Seleccione zona
                </option>
                {/* FIX: NO ANDA CON EL VALUE 0, NO TOMA ZONA NORTE :c */}
                <option value={0}>Norte</option> 
                <option value="1">Sur</option>
                <option value="2">Este</option>
                <option value="3">Oeste</option>
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
          <Button
            className="w-50 mx-auto"
            variant="outline-light"
            onClick={handleSignIn}
            disabled={!email || !fullName || !password || !dni || !phoneNumber}
          >
            Registrarse
          </Button>
        </Form>
      </div>
    </>
  );
}

export default ClientForm;