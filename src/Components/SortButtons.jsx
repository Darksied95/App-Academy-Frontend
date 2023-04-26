import { useState } from "react";
import useGlobalHook from "../Hooks/useGlobalHook";

const SortButtons = () => {
  const [active, setActive] = useState(0);
  const { showActiveTodos, showAllTodos, showCompletedTodos } = useGlobalHook();
  return (
    <div className="bg-ex-blue-500 font-bold flex justify-center gap-5 p-3 text-ex-grayBlue-300 absolute bottom-0 left-0 w-full rounded-lg md:p-0 md:static md:flex-1">
      <button
        className={`${active === 0 && "text-blue-700"} `}
        onClick={() => {
          setActive(0);
          showAllTodos();
        }}
      >
        All
      </button>
      <button
        className={`${active === 1 && "text-blue-700"} `}
        onClick={() => {
          setActive(1);
          showActiveTodos();
        }}
      >
        Active
      </button>
      <button
        className={`${active === 2 && "text-blue-700"} `}
        onClick={() => {
          setActive(2);
          showCompletedTodos();
        }}
      >
        Completed
      </button>
    </div>
  );
};

export default SortButtons;
