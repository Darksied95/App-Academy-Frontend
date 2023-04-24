import React, { useContext, useState } from "react";
import data from "../data.json";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [todoLists, setTodoLists] = useState(data);
  console.log(todoLists);

  return (
    <AppContext.Provider value={todoLists}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider };
