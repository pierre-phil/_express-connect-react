import React, { useContext } from "react";
import Todo from "./Todo";
import { TodosContext } from "../context/TodosContext";

const TodosList = (props) => {
  const { deleteTodo, toggleCompleteTodo } = props;
  const { todos } = useContext(TodosContext);
  return (
    <main>
      {todos.map((el) => {
        return (
          <Todo
            key={el.id}
            todo={el}
            deleteTodo={deleteTodo}
            toggleCompleteTodo={toggleCompleteTodo}
          />
        );
      })}
    </main>
  );
};

export default TodosList;
