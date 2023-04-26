import useGlobalHook from "../Hooks/useGlobalHook";
import Cross from "../assets/icon-cross.svg";
import Check from "../assets/icon-check.svg";
import { useRef } from "react";
import isUserValid from "../Services/isUserValid";
import * as TodoHandlers from "../Services/TodoService";

const SingleTodo = ({ todo, id, completed }) => {
  const { deleteTodo, updateTodo, todoLists, setTodoLists } = useGlobalHook();
  const pRef = useRef();

  async function handleTodoUpdate(event, id) {
    if (event.code === "Enter") {
      isUserValid();
      updateTodo(id, { text: event.target.textContent });
      await TodoHandlers.updateTodo(id, { text: event.target.textContent });
      event.target.contentEditable = false;
    }
  }

  async function handleComplete(id) {
    isUserValid();
    try {
      updateTodo(id, { completed: !completed });
      await TodoHandlers.updateTodo(id, { completed: !completed });
    } catch (error) {
      setTodoLists(todoLists);
      alert("Something went wrong");
    }
  }

  async function handleDelete(id) {
    isUserValid();
    try {
      deleteTodo(id);
      await TodoHandlers.deleteTodo(id);
    } catch (error) {
      setTodoLists(todoLists);
      alert("Something went wrong");
    }
  }

  return (
    <li className="group bg-ex-blue-500 py-5 flex items-center gap-6  px-3 border-b border-ex-grayBlue-400">
      <div
        onClick={() => handleComplete(id)}
        className={`flex justify-center items-center outline w-4 rounded-full aspect-square ${
          completed && "bg-gradient-to-r"
        } from-gradient-start  to-gradient-end outline-1`}
      >
        {completed && <img src={Check} />}
      </div>
      <p
        className={`flex-1 ${completed && "line-through"}`}
        ref={pRef}
        onDoubleClick={(e) => (e.target.contentEditable = true)}
        onKeyDown={(event) => handleTodoUpdate(event, id)}
      >
        {todo}
      </p>
      <img
        src={Cross}
        className="hidden group-hover:block"
        onClick={() => handleDelete(id)}
      />
    </li>
  );
};

export default SingleTodo;
