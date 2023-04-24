import useGlobalHook from "../Hooks/useGlobalHook";
import Cross from "../assets/icon-cross.svg";
import Check from "../assets/icon-check.svg";
import { useRef } from "react";

const SingleTodo = ({ todo, id, completed }) => {
  const { deleteTodo, updateTodo } = useGlobalHook();
  const pRef = useRef();

  function run(event) {
    if (event.code === "Enter") {
      updateTodo(id, { text: event.target.textContent });
      event.target.contentEditable = false;
    }
  }

  return (
    <li className="group bg-ex-blue-500 py-5 flex items-center gap-6  px-3 border-b border-ex-grayBlue-400">
      <div
        onClick={() => updateTodo(id, { completed: !completed })}
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
        onKeyDown={run}
      >
        {todo}
      </p>
      <img
        src={Cross}
        className="hidden group-hover:block"
        onClick={() => deleteTodo(id)}
      />
    </li>
  );
};

export default SingleTodo;
