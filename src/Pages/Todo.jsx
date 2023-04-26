import AddTodo from "../Components/AddTodo";
import More from "../Components/More";
import TodoLists from "../Components/TodoLists";

const Todo = () => {
  const token = localStorage.getItem("token");
  if (!token) return (window.location = "/");

  return (
    <main className="bg-[url('https://i.ibb.co/PrcYxMs/bg-mobile-dark.jpg')] md:bg-[url('https://i.ibb.co/K5nWphm/bg-desktop-dark.jpg')] bg-no-repeat bg-contain   bg-ex-blue-300 min-h-screen  pt-1 px-6 text-sm text-ex-grayBlue-100">
      <div className="max-w-[720px] mx-auto">
        <h1 className="text-2xl  font-bold tracking-[.5rem] mt-10 mb-8 text-white md:mt-16">
          TODO
        </h1>
        <AddTodo />
        <div className="rounded-xl  overflow-hidden relative ">
          <TodoLists />
          <More />
        </div>
      </div>
    </main>
  );
};

export default Todo;
