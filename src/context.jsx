import React, { useState } from "react";
import data from "../data.json";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [todoLists, setTodoLists] = useState(data);

  function addTodo(value) {
    const newTodo = {
      id: todoLists.length + 1,
      isCompleted: false,
      text: value,
    };
    setTodoLists([...todoLists, newTodo]);
  }

  function deleteTodo(id) {
    const newTodoList = todoLists.filter((todo) => todo.id !== id);
    setTodoLists(newTodoList);
  }

  function updateTodo(id, updateObj) {
    const newTodoLists = [...todoLists];
    const updatedTodoListIndex = newTodoLists.findIndex(
      (todo) => todo.id === id
    );
    newTodoLists[updatedTodoListIndex] = {
      ...newTodoLists[updatedTodoListIndex],
      ...updateObj,
    };
    setTodoLists(newTodoLists);
  }
  return (
    <AppContext.Provider value={{ todoLists, addTodo, deleteTodo, updateTodo }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
