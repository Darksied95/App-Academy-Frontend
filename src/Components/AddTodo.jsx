import { useState } from "react";
import useGlobalHook from "../Hooks/useGlobalHook";
import { createTodo } from "../Services/TodoService";
import isUserValid from "../Services/isUserValid";

const AddTodo = () => {
  const { addTodo, todoLists, setTodoLists } = useGlobalHook();
  const [inputValue, setInputValue] = useState("");

  async function createNewTodo() {
    const oldTodoLists = [...todoLists];
    try {
      isUserValid();

      addTodo(inputValue);

      setInputValue("");

      await createTodo(inputValue);
    } catch (error) {
      setTodoLists(oldTodoLists);

      alert("Something went wrong");
    }
  }
  return (
    <input
      type="text"
      placeholder="Create a new todo..."
      className="w-full bg-ex-blue-500 py-5 rounded-md pl-9 mb-7"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={(e) => e.code === "Enter" && createNewTodo()}
    />
  );
};

export default AddTodo;
