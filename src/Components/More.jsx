import SortButtons from "./SortButtons";

const More = () => {
  return (
    <div className="bg-ex-blue-500 text-ex-grayBlue-300 font-bold flex justify-between py-5 px-3 mb-16">
      <p className=" ">5 items left</p>
      <SortButtons />
      <button>Clear completed</button>
    </div>
  );
};

export default More;
