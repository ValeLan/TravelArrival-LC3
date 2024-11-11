import React, { createContext, useState } from "react";
import { useFetch } from "./useFetch";

export const TravelsContext = createContext();

export const TravelsProvider = ({ children }) => {

    const {travels, error} = useFetch("/Travel/Historical", "GET");

  return (
    <TravelsContext.Provider value={{ travels, error }}>
      {children}
    </TravelsContext.Provider>
  );
};