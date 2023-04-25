import { useState } from "react";
import useGlobalHook from "../Hooks/useGlobalHook";
import { createTodo } from "../Services/TodoService";

const AddTodo = () => {
  const { addTodo } = useGlobalHook();
  const [inputValue, setInputValue] = useState("");

  async function createNewTodo() {
    try {
      await createTodo(inputValue);

      addTodo(inputValue);

      setInputValue("");
    } catch (error) {
      alert(error);
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
