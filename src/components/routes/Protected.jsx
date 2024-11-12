import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../services/authentication/AuthContext";

const Protected = ({  children, allowedRoles }) => {
  const { token } = useContext(AuthContext);

  if (!token) {
    return <Navigate to="/unauthorized" />;
  }

  const tokenParts = token.split(".");
  const payload = JSON.parse(atob(tokenParts[1]));
  const userRole = payload.role;

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

Protected.propTypes = {
  children: PropTypes.object,
  allowedRoles: PropTypes.array,
};

export default Protected;
