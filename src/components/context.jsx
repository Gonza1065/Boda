import React, { createContext, useContext, useState } from "react";

const BackgroundImageContext = createContext();

export const BackgroundImageProvider = ({ children }) => {
  const [backgroundStyles, setBackgroundStyles] = useState({
    backgroundImage: "default-image.jpg",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }); // Estilos de fondo predeterminados

  return (
    <BackgroundImageContext.Provider
      value={{
        backgroundStyles,
        setBackgroundStyles,
      }}
    >
      {children}
    </BackgroundImageContext.Provider>
  );
};

export const useBackgroundImage = () => {
  return useContext(BackgroundImageContext);
};
