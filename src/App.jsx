import "./App.css";
import AddTodo from "./Components/AddTodo";
import More from "./Components/More";
import TodoLists from "./Components/TodoLists";
import useGlobalContext from "./Hooks/useGlobalHook";

function App() {
  const data = useGlobalContext();
  console.log(data);

  return (
    <main className="bg-mobile bg-no-repeat bg-contain   bg-ex-blue-300 min-h-screen  pt-1 px-6 text-sm text-ex-grayBlue-100 md:bg-desktop">
      <div className="max-w-[720px] mx-auto">
        <h1 className="text-2xl  font-bold tracking-[.5rem] mt-10 mb-8 text-white md:mt-16">
          TODO
        </h1>
        <AddTodo />
        <div className="rounded-xl  overflow-hidden relative">
          <TodoLists />
          <More />
        </div>
      </div>
    </main>
  );
}

export default App;
