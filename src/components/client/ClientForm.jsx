import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button'
import "./Client.css"
const ClientForm = () => {
  return (
    <>
      <div className="containerClientForm">
        <h1 className='mb-4'>Inscribase a nuestros viajes!</h1>
        <Form
          border="danger"
          className="clientForm d-flex flex-column justify-content-center w-75 rounded  p-5"
          style={{ backgroundColor: "#134759c" }}
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <FloatingLabel
              controlId="floatingInput1"
              label="Email"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="my-3">
            <FloatingLabel
              controlId="floatingInput2"
              label="Nombre y apellido"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Nombre y Apellido" />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="my-3">
            <FloatingLabel
              controlId="floatingInput3"
              label="Contraseña"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="Contraseña" />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="my-3">
            <FloatingLabel
              controlId="floatingInput4"
              label="DNI"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="DNI" />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="my-3">
            <FloatingLabel
              controlId="floatingInput5"
              label="Teléfono"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="+341 555 6665" />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="my-3">
            <FloatingLabel
              controlId="floatingInput6"
              label="Zona"
              className="mb-3"
            >
              <Form.Select aria-label="Default select example">
                <option value="1">Norte</option>
                <option value="2">Sur</option>
                <option value="3">Este</option>
                <option value="4">Oeste</option>
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
          <Button className="w-50 mx-auto" variant="outline-light">
            Elegir viaje
          </Button>
        </Form>
      </div>
    </>
  );
}

export default ClientForm