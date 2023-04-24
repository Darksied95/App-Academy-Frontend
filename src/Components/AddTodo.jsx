import { useState } from "react";
import useGlobalHook from "../Hooks/useGlobalHook";
const AddTodo = () => {
  const { addTodo } = useGlobalHook();
  const [inputValue, setInputValue] = useState("");

  function run() {
    addTodo(inputValue);
    setInputValue("");
  }
  return (
    <input
      type="text"
      placeholder="Create a new todo..."
      className="w-full bg-ex-blue-500 py-5 rounded-md pl-9 mb-7"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={(e) => e.code === "Enter" && run()}
    />
  );
};

export default AddTodo;
