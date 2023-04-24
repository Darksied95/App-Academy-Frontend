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
    setTodoLists(newTodoList);
  }

  function updateTodo(id, todo) {
    const newTodoLists = [...todoLists];
    newTodoLists[id] = todo;
    setTodoLists(newTodoLists);
  }
  return (
    <AppContext.Provider value={{ todoLists, addTodo, deleteTodo, updateTodo }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
