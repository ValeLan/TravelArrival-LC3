import { createContext } from "react";
import useFetch from "../../hooks/useFetch";
import PropTypes from "prop-types";

export const TravelsContext = createContext();

export const TravelsProvider = ({ children }) => {
  const { travels, error, isLoading } = useFetch("/Travel/Historical", "GET");

  return (
    <TravelsContext.Provider value={{ travels, error, isLoading }}>
      {children}
    </TravelsContext.Provider>
  );
};

TravelsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};