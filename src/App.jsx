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
import Home from './components/home/Home';
import useFetch from './components/hooks/useFetch';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [dataFiltered, setDataFiltered] = useState([]);
  
  const {data, error, isLoading} = useFetch("/Travel/Historical", "GET");
  
  const loginHandler = () => {
    setIsLogged(true);
  };

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login onLogin={loginHandler} /> },
    // {
    //   path: "/driver",
    //   element: (
    //     <Protected isSignedIn={isLogged}>
    //       <Driver />
    //     </Protected>
    //   ),
    { path: "/client", element: <ClientForm /> },
    { path: "/admin", element: <Admin/> },
    // },
    { path: "/driver", element: <Driver data={data} isLoading={isLoading}/> },
    {
      path: "/details/:id",
      element: <DriverDetails travels={travels} />,
    },
    { path: "/client", element: <ClientForm/> },
    { path: "/client-travel", element: <ClientTravel data={data} isLoading={isLoading}/> },
    { path: "*", element: <NotFound/>},
]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App