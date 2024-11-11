import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Protected from "./components/routes/Protected";
import Driver from "./components/driver/Driver";
import DriverDetails from "./components/driver/DriverDetails";
import Login from "./components/login/Login";
import { travels } from "./data/travels";
import { useState } from "react";
import NotFound from "./components/routes/NotFound";
import Admin from "./components/admin/Admin";
import AdminCards from "./components/admin/AdminCards";
import ClientForm from "./components/client/ClientForm";
import { useFetch } from "./useFetch";
import ClientTravel from './components/client/ClientTravel';
import Admin from './components/admin/Admin';

function App() {
  const [isLogged, setIsLogged] = useState(false);

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
    { path: "/driver", element: <Driver travels={travels} /> },
    { path: "/client", element: <ClientForm/> },
    { path: "/client-travel", element: <ClientTravel data={data}/> },
    {
      path: "/details/:id",
      element: <DriverDetails travels={travels} />,
    },
    { path: "*", element: <NotFound /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
