import React, { useContext } from "react";
import { ModeContext } from "../context/ModeContext";

const SelectTodos = (props) => {
  const { filter, setFilter } = props;
  const { modeClass } = useContext(ModeContext);
  const handleSelectChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="input-group mb-3">
      <label className={`input-group-text ${modeClass}`} htmlFor="select">
        Filtrer les tâches
      </label>
      <select
        className={`form-select ${modeClass}`}
        id="select"
        value={filter}
        onChange={handleSelectChange}
      >
        {/*eslint-disable-next-line*/}
        <option value="all">Toutes 🖐️</option>
        {/*eslint-disable-next-line*/}
        <option value="completed">Terminées 💪</option>
        {/*eslint-disable-next-line*/}
        <option value="notcompleted">pas Terminées 👈</option>
      </select>
    </div>
  );
};

export default SelectTodos;
