import SortButtons from "./SortButtons";
import useGlobalHook from "./../Hooks/useGlobalHook";

const More = () => {
  const { todoLists } = useGlobalHook();
  return (
    <div className="bg-ex-blue-500 text-ex-grayBlue-300 font-bold flex justify-between py-5 px-3 mb-16">
      <p className=" ">{todoLists.length} items left</p>
      <SortButtons />
      <button>Clear completed</button>
    </div>
  );
};

export default More;
