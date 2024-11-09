import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Protected from "./components/routes/Protected";
import Driver from './components/driver/Driver'
import DriverDetails from './components/driver/DriverDetails'
import Login from './components/login/Login'
import { travels } from './data/travels'
import { useState } from 'react';
import NotFound from './components/routes/NotFound';
//<<<<<<< HEAD
import Admin from './components/admin/Admin';
import AdminCards from './components/admin/AdminCards';
//=======
import ClientForm from "./components/client/ClientForm"
//>>>>>>> 6210caeec773885ef23a0663e1cc12b32c18c70f
import { useFetch } from "./useFetch";
import ClientTravel from './components/client/ClientTravel';
function App() {
  const [isLogged, setIsLogged] = useState(false);
//<<<<<<< HEAD

  const { data, error } = useFetch("/Travel/Historical", "GET");
  const { data2, error2 } = useFetch("/Driver", "GET");
  const { data3, error3 } = useFetch("/Passenger", "GET");
  const { data4, error4 } = useFetch("/School", "GET");

  const loginHandler = () => {
    setIsLogged(true);
  };

  const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/login", element: <Login onLogin={loginHandler} /> },
    { path: "/driver", element: ( <Protected isSignedIn={isLogged}> <Driver travels={travels}/> </Protected> )}, //esto esta bien?
    { path: "/details/:id", element: <DriverDetails travels={travels} /> },
    { path: "*", element: <NotFound /> },
    { path: "/admin", element: <Admin /> },
    {  path: "/admin-cards", element: <AdminCards  data={data} data2={data2} data3={data3} data4={data4}/> },
    { path: "/client", element:<ClientForm/> },
    { path: "/client-travel", element:<ClientTravel data={data}/> }
    //{ path: "/driver", element: <Driver travels={travels} /> },
  ]);

  return ( <> <RouterProvider router={router} /> </> ); }

export default App;