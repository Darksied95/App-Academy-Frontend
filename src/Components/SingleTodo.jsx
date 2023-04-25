import useGlobalHook from "../Hooks/useGlobalHook";
import Cross from "../assets/icon-cross.svg";
import Check from "../assets/icon-check.svg";
import { useRef } from "react";
import * as TodoHandlers from "../Services/TodoService";

const SingleTodo = ({ todo, id, completed }) => {
  const { deleteTodo, updateTodo } = useGlobalHook();
  const pRef = useRef();

  async function handleTodoUpdate(event, id) {
    console.log(event);
    if (event.code === "Enter") {
      await TodoHandlers.updateTodo(id, { text: event.target.textContent });
      updateTodo(id, { text: event.target.textContent });
      event.target.contentEditable = false;
    }
  }

  async function handleComplete(id) {
    try {
      await TodoHandlers.updateTodo(id, { completed: !completed });
      updateTodo(id, { completed: !completed });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(id) {
    try {
      await TodoHandlers.deleteTodo(id);
      deleteTodo(id);
    } catch (error) {
      console.log(error);
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
