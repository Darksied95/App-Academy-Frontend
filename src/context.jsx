import React, { useEffect, useState } from "react";
import {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} from "./Services/TodoService";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [todoLists, setTodoLists] = useState([]);

  useEffect(() => {
    async function run() {
      const data = await getTodos();
      setTodoLists(data);
    }

    run();
  }, []);

  function addTodo(value) {
    const newTodo = {
      id: todoLists.length + 1,
      completed: false,
      text: value,
    };
    setTodoLists([...todoLists, newTodo]);
  }

  function deleteTodo(id) {
    const newTodoList = todoLists.filter((todo) => todo.id !== id);
    setTodoLists(newTodoList);
  }

  function updateTodo(id, updateObj) {
    const newTodoLists = todoLists.map((todo) =>
      todo.id === id ? { ...todo, ...updateObj } : todo
    );

    setTodoLists(newTodoLists);
  }
  return (
    <AppContext.Provider value={{ todoLists, addTodo, deleteTodo, updateTodo }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
