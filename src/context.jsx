import React, { useEffect, useState } from "react";
import { getTodos } from "./Services/TodoService";
import PropTypes from "prop-types";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [persistentData, setPersistentData] = useState([]);
  const [todoLists, setTodoLists] = useState([]);

  useEffect(() => {
    async function run() {
      const { data } = await getTodos();
      setPersistentData(data);
      setTodoLists(data);
    }

    const token = localStorage.getItem("token");
    if (token) run();
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

  function showActiveTodos() {
    const newTodoLists = persistentData.filter((each) => !each.completed);
    setTodoLists(newTodoLists);
  }

  function showCompletedTodos() {
    const newTodoLists = persistentData.filter((each) => each.completed);
    setTodoLists(newTodoLists);
  }
  function showAllTodos() {
    setTodoLists(persistentData);
  }
  return (
    <AppContext.Provider
      value={{
        todoLists,
        addTodo,
        deleteTodo,
        updateTodo,
        setTodoLists,
        persistentData,
        showActiveTodos,
        showAllTodos,
        showCompletedTodos,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.element,
};
export { AppContext, AppProvider };
