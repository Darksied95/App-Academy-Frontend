import Cross from "../assets/icon-cross.svg";

const SingleTodo = ({ todo }) => {
  return (
    <li className="group bg-ex-blue-500 py-5 flex items-center gap-6  px-3 border-b border-ex-grayBlue-400">
      <span className="inline-block outline w-4 rounded-full aspect-square " />
      <p className="flex-1 ">{todo}</p>
      <img src={Cross} className="hidden group-hover:block" />
    </li>
  );
};

export default SingleTodo;
