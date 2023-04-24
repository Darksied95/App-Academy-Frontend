import SingleTodo from "./SingleTodo";
import useGlobalContext from "../Hooks/useGlobalHook";

const TodoLists = () => {
  const { todoLists } = useGlobalContext();
  return (
    <ul>
      {todoLists.map((todo) => (
        <SingleTodo key={todo.id} todo={todo.text} id={todo.id} />
      ))}
    </ul>
  );
};

export default TodoLists;
