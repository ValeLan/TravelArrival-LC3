import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Protected from "./components/routes/Protected";
import Driver from './components/driver/Driver'
import DriverDetails from './components/driver/DriverDetails'
import Login from './components/login/Login'
import { travels } from './data/travels'
import { useState } from 'react';
import NotFound from './components/routes/NotFound';
import ClientForm from "./components/client/ClientForm"
import ClientTravel from './components/client/ClientTravel';
import Admin from './components/admin/Admin';
import { AuthProvider } from './AuthContext'; 
import TravelsCards from './components/client/TravelsCards';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  
  const loginHandler = () => {
    setIsLogged(true);
  };


  const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/login", element: <Login onLogin={loginHandler} /> },
    { path: "/client", element: <ClientForm /> },
    { path: "/admin", element: <Admin/> },
    { path: "/driver", element: <Driver travels={travels} /> },
    { path: "/client", element: <ClientForm/> },
    { path: "/client-travel", element: <ClientTravel/>},
    { path: "/details/:id", element: <DriverDetails travels={travels} />,},
    { path: "*", element: <NotFound /> },
    { path: "/TravelsCards", element: <TravelsCards/>}
  ]);
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
    </>
  );
}

export default App