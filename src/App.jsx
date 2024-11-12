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
import Unauthorized from './components/routes/Unauthorized';
import Protected from './components/routes/Protected';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const { data, error, isLoading } = useFetch(`/Travel/Historical`, "GET");
  
  const loginHandler = () => {
    setIsLogged(true);
  };

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login onLogin={loginHandler} /> },
    { path: "/client", element: <ClientForm /> },
    {
      path: "/admin",
      element: (
        <Protected allowedRoles={["Admin"]}>
          <Admin />
        </Protected>
      ),
    },
    {
      path: "/driver",
      element: (
        <Protected allowedRoles={["Driver"]}>
          <Driver data={data} isLoading={isLoading} />
        </Protected>
      ),
    },
    {
      path: "/details/:id",
      element: (
        <Protected allowedRoles={["Driver"]}>
          <DriverDetails />
        </Protected>
      ),
    },
    {
      path: "/client-travel",
      element: (
        <Protected allowedRoles={["Passenger"]}>
          <ClientTravel />
        </Protected>
      ),
    },
    {
      path: "/travels-cards",
      element: (
        <Protected allowedRoles={["Passenger"]}>
          <TravelsCards />
        </Protected>
      ),
    },
    { path: "*", element: <NotFound /> },
    { path: "/unauthorized", element: <Unauthorized /> },
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