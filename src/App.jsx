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
<<<<<<< HEAD
import ClientTravel from "./components/client/ClientTravel";
=======
import ClientTravel from './components/client/ClientTravel';
import Admin from './components/admin/Admin';
import { AuthProvider } from './AuthContext'; 
>>>>>>> 1bf4203c855b69a9e663224463fd701d0083ae8a

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
<<<<<<< HEAD
=======
    { path: "/client", element: <ClientForm /> },
    { path: "/admin", element: <Admin/> },
    { path: "/driver", element: <Driver travels={travels} /> },
    { path: "/client", element: <ClientForm/> },
    { path: "/client-travel", element: <ClientTravel data={data}/> },
>>>>>>> 1bf4203c855b69a9e663224463fd701d0083ae8a
    {
      path: "/driver",
      element: (
        <Protected isSignedIn={isLogged}>
          {" "}
          <Driver travels={travels} />{" "}
        </Protected>
      ),
    }, 
    { path: "/details/:id", element: <DriverDetails travels={travels} /> },
    { path: "*", element: <NotFound /> },
    { path: "/admin", element: <Admin /> },
    {
      path: "/admin-cards",
      element: (
        <AdminCards data={data} data2={data2} data3={data3} data4={data4} />
      ),
    },
    { path: "/client", element: <ClientForm /> },
    { path: "/client-travel", element: <ClientTravel data={data} /> },
  ]);

  return (
    <>
<<<<<<< HEAD
      {" "}
      <RouterProvider router={router} />{" "}
=======
      <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
>>>>>>> 1bf4203c855b69a9e663224463fd701d0083ae8a
    </>
  );
}

export default App;
