import React, { useContext } from "react";
import { ModeContext } from "../context/ModeContext";

const AppContainer = ({ children }) => {
  const { modeClass } = useContext(ModeContext);
  return (
    <div className={`min-vh-100 py-3 ${modeClass}`}>
      <div className="container my-3">{children}</div>
    </div>
  );
};

export default AppContainer;
