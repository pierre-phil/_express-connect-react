import React from "react";
import Todos from "./components/Todos";
import AppContainer from "./components/AppContainer";
import ModeContextProvider from "./context/ModeContext";
import TodosContextProvider from "./context/TodosContext";

function App() {
  return (
    <ModeContextProvider>
      <TodosContextProvider>
        <AppContainer>
          <div className="container my-4">
            <h1 className="text-center">ToDos App</h1>
            <Todos />
          </div>
        </AppContainer>
      </TodosContextProvider>
    </ModeContextProvider>
  );
}

export default App;
