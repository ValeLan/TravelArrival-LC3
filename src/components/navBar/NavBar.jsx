import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../services/authentication/AuthContext';

const NavBar = () => {
    const navigate = useNavigate()
    const {token} = useContext(AuthContext);
    const deleteUser = async () => {
        const getUserIdFromToken = (token) => {
            try {
                const tokenParts = token.split(".");
                if (tokenParts.length !== 3) {
                    throw new Error("Token JWT inválido");
                }
        
                const payload = tokenParts[1];
                const decodedPayload = JSON.parse(atob(payload.replace(/_/g, "/").replace(/-/g, "+")));
        
                console.log("Payload decodificado:", decodedPayload); 
        
                const userId = decodedPayload.id || decodedPayload.userId || decodedPayload.sub; 
                if (!userId) {
                    throw new Error("No se encontró el ID de usuario en el payload del token.");
                }
        
                console.log("User ID extraído del token:", userId);
                return userId;
            } catch (error) {
                console.error("Error al procesar el token:", error);
                return null;
            }
        };

        const userId = getUserIdFromToken(token);
        if (!userId) {
            console.error("No se pudo obtener el ID del usuario del token.");
            return;
        }

        const fetchData = async () => {
            try {
                const response = await fetch(`https://localhost:7016/api/Passenger/${userId}`, {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`Error al eliminar el usuario: ${response.status}`);
                }

                console.log("Usuario eliminado con éxito.");
                navigate("/"); 
            } catch (error) {
                console.error("Error al eliminar el usuario:", error);
            }
        };
        await fetchData();
    };
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">TravelArrival</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Button className="me-2" onClick={deleteUser}>
                        Eliminar Cuenta
                    </Button>
                    <Button onClick={() => navigate("/")}>
                        Cerrar sesión
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default NavBar