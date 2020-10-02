import React, { useContext } from "react";
import { ModeContext } from "../context/ModeContext";

const ModeSwitch = () => {
  const { mode, setMode } = useContext(ModeContext);

  const handleModeChange = () => {
    setMode((mode) => (mode === "dark" ? "light" : "dark"));
  };

  return (
    <div className="mb-3 d-flex flex-row justify-content-end">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="activate"
          checked={mode === "dark"}
          onChange={handleModeChange}
        />
        <label className="form-check-label" htmlFor="activate">
          {mode === "dark" ? "Mode sombre" : "Mode clair"}
        </label>
      </div>
    </div>
  );
};

export default ModeSwitch;
