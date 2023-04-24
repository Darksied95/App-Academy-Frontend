import SingleTodo from "./SingleTodo";
import useGlobalContext from "../Hooks/useGlobalHook";

const TodoLists = () => {
  const { todoLists } = useGlobalContext();
  return (
    <ul>
      {todoLists.map((todo, index) => (
        <SingleTodo key={index} todo={todo} id={index} />
      ))}
    </ul>
  );
};

export default TodoLists;
