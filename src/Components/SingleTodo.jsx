import useGlobalHook from "../Hooks/useGlobalHook";
import Cross from "../assets/icon-cross.svg";
import { useRef } from "react";
const SingleTodo = ({ todo, id }) => {
  const { todoLists, deleteTodo, updateTodo } = useGlobalHook();
  const pRef = useRef();

  function run(event) {
    if (event.code === "Enter") {
      updateTodo(id, { text: event.target.textContent });
      event.target.contentEditable = false;
    }
  }

  return (
    <li className="group bg-ex-blue-500 py-5 flex items-center gap-6  px-3 border-b border-ex-grayBlue-400">
      <span className="inline-block outline w-4 rounded-full aspect-square " />
      <p
        className="flex-1 "
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
