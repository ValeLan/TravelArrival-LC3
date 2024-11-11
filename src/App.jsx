import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Driver from './components/driver/Driver'
import DriverDetails from './components/driver/DriverDetails'
import Login from './components/login/Login'
import { useState } from 'react';
import NotFound from './components/routes/NotFound';
import ClientForm from "./components/client/ClientForm"
import ClientTravel from './components/client/ClientTravel';
import Admin from './components/admin/Admin';
import Home from './components/home/Home';
import useFetch from './components/hooks/useFetch';
import { AuthProvider } from './components/services/authentication/AuthContext'; 
import TravelsCards from './components/client/TravelsCards';
import { TravelsProvider } from './components/services/travel/TravelsContext';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const { data, error, isLoading } = useFetch(`/Travel/Historical`, "GET");
  
  const loginHandler = () => {
    setIsLogged(true);
  };

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login onLogin={loginHandler}/> },
    { path: "/client", element: <ClientForm /> },
    { path: "/admin", element: <Admin/> },
    { path: "/driver", element: <Driver data={data} isLoading={isLoading}/> },
    { path: "/client", element: <ClientForm/> },
    { path: "/client-travel", element: <ClientTravel/>},
    { path: "/details/:id", element: <DriverDetails/>,},
    { path: "*", element: <NotFound/>},
    { path: "/travels-cards", element: <TravelsCards/>}
 ]);
  return (
    <>
      <AuthProvider>
        <TravelsProvider>
          <RouterProvider router={router} />
        </TravelsProvider>
      </AuthProvider>
    </>
  );
}

export default App