import SingleTodo from "./SingleTodo";
import useGlobalContext from "../Hooks/useGlobalHook";

const TodoLists = () => {
  const data = useGlobalContext();
  return (
    <ul>
      {data.map((todo, index) => (
        <SingleTodo key={index} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoLists;
