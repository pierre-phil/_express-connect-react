import React, { useState, createContext } from "react";

export const TodosContext = createContext();

const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todoList")) || []
  );
  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
