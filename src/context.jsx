import React, { useState } from "react";
import data from "../data.json";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [todoLists, setTodoLists] = useState(data);

  function addTodo(value) {
    setTodoLists([...todoLists, value]);
  }

  return (
    <AppContext.Provider value={{ todoLists, addTodo }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
