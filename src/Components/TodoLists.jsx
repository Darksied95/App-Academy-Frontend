import SingleTodo from "./SingleTodo";
import useGlobalContext from "../Hooks/useGlobalHook";

const TodoLists = () => {
  const { todoLists } = useGlobalContext();
  return (
    <ul className="max-h-[350px] overflow-y-auto">
      {todoLists.map((todo) => (
        <SingleTodo
          key={todo.id}
          todo={todo.text}
          id={todo.id}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};

export default TodoLists;
