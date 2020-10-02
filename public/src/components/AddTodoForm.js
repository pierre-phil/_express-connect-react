import React, { useContext } from "react";
import { ModeContext } from "../context/ModeContext";

const AddTodoForm = (props) => {
  const { addTodo, setFilter } = props;
  const { modeClass } = useContext(ModeContext);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newTodoText = event.target.elements.todo.value;
    addTodo(newTodoText);
    console.log("newTodoText", event.target.elements.todo.value);
    event.target.reset();
    setFilter((filter) => (filter === "completed" ? "all" : filter));
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="input-group mb-2">
        <label className={`input-group-text ${modeClass}`} htmlFor="todo">
          Ajouter une tâche
        </label>
        <input className={`form-control ${modeClass}`} id="todo" required />
      </div>
      <button type="submit" className="btn btn-primary">
        allons-y !
      </button>
    </form>
  );
};

export default AddTodoForm;
