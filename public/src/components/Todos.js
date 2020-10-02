import React, { useState, useContext, useEffect } from "react";
import TodosList from "./TodosList";
import SelectTodos from "./SelectTodos";
import AddTodoForm from "./AddTodoForm";
import { v4 as uuidv4 } from "uuid";
import ModeSwitch from "../components/ModeSwitch";
import { TodosContext } from "../context/TodosContext";

const Todos = () => {
  const { todos, setTodos } = useContext(TodosContext);
  const [filter, setFilter] = useState("notcompleted");
  const addTodo = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (task) => {
    setTodos(todos.filter((el) => el !== task));
  };

  const toggleCompleteTodo = (task) => {
    setTodos(
      todos.map((el) => {
        return {
          ...el,
          isCompleted: task.id === el.id ? !el.isCompleted : el.isCompleted,
        };
      })
    );
  };

  useEffect(() => {
    document.title = todos.length
      ? `Vous avez ${todos.length} tâches à accomplir !`
      : `Que devez vous faire aujourd'hui ?`;
  }, [todos.length]);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = todos.filter((el) => {
    if (filter === "completed") {
      return el.isCompleted;
    }
    if (filter === "notcompleted") {
      return !el.isCompleted;
    }
    return true;
  });

  const completedCount = todos.filter((el) => el.isCompleted).length;
  return (
    <main>
      <h2 className="text-center">
        Ma liste de tâches ({completedCount} / {todos.length})
      </h2>
      <ModeSwitch />
      <SelectTodos filter={filter} setFilter={setFilter} />
      <TodosList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        toggleCompleteTodo={toggleCompleteTodo}
      />
      <AddTodoForm addTodo={addTodo} setFilter={setFilter} />
    </main>
  );
};

export default Todos;
