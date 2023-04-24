import SingleTodo from "./SingleTodo";
import useGlobalContext from "../Hooks/useGlobalHook";

const TodoLists = () => {
  const { todoLists } = useGlobalContext();
  return (
    <ul>
      {todoLists.map((todo, index) => (
        <SingleTodo key={index} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoLists;
