import React, { useState } from "react";
import data from "../data.json";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [todoLists, setTodoLists] = useState(data);

  function addTodo(value) {
    setTodoLists([...todoLists, value]);
  }

  function deleteTodo(id) {
    const newTodoList = todoLists.filter((todo, index) => index !== id);
    console.log(id);
    setTodoLists(newTodoList);
  }
  return (
    <AppContext.Provider value={{ todoLists, addTodo, deleteTodo }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
