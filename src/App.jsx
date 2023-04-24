import "./App.css";
import Cross from "./assets/icon-cross.svg";

function App() {
  return (
    <main className="bg-mobile bg-no-repeat bg-contain   bg-ex-blue-300 min-h-screen  pt-1 px-6 text-sm text-ex-grayBlue-100 md:bg-desktop">
      <div className="max-w-[720px] mx-auto">
        <h1 className="text-2xl  font-bold tracking-[.5rem] mt-10 mb-8 text-white md:mt-16">
          TODO
        </h1>
        <input
          type="text"
          placeholder="Create a new todo..."
          className="w-full bg-ex-blue-500 py-3 rounded-md pl-9 mb-7"
        />
        <div className="rounded-xl  overflow-hidden relative">
          <ul>
            <li className="bg-ex-blue-500 py-5 flex items-center gap-6  px-3 border-b border-ex-grayBlue-400">
              <span className="inline-block outline w-4 rounded-full aspect-square " />
              <p className="flex-1 ">Lorem ipsum dolor, sit amet conse</p>
              <img src={Cross} />
            </li>
            <li className="bg-ex-blue-500 py-5 flex items-center justify-between gap-6 px-3 border-b border-ex-grayBlue-400">
              <span className="inline-block outline w-4 rounded-full aspect-square" />
              <p className="flex-1 ">Lorem ipsum dolor, sit amet conse</p>
              <img src={Cross} />
            </li>
            <li className="bg-ex-blue-500 py-5 flex items-center justify-between gap-6 px-3 border-b border-ex-grayBlue-400">
              <span className="inline-block outline w-4 rounded-full aspect-square" />
              <p className="flex-1 ">Lorem ipsum dolor, sit amet conse</p>
              <img src={Cross} />
            </li>
            <li className="bg-ex-blue-500 py-5 flex items-center justify-between gap-6 px-3 border-b border-ex-grayBlue-400">
              <span className="inline-block outline w-4 rounded-full aspect-square" />
              <p className="flex-1 ">Lorem ipsum dolor, sit amet conse</p>
              <img src={Cross} />
            </li>
            <li className="bg-ex-blue-500 flex items-center justify-between py-5 gap-6 px-3 border-b border-ex-grayBlue-400">
              <span className="inline-block outline w-4 rounded-full aspect-square" />
              <p className="flex-1 ">Lorem ipsum dolor, sit amet conse</p>
              <img src={Cross} />
            </li>
          </ul>
          <div className="bg-ex-blue-500 text-ex-grayBlue-300 font-bold flex justify-between py-5 px-3 mb-16">
            <p className=" ">5 items left</p>
            <div className="bg-ex-blue-500 font-bold flex justify-center gap-5 p-3 text-ex-grayBlue-300 absolute bottom-0 left-0 w-full rounded-lg md:p-0 md:static md:flex-1">
              <button>All</button>
              <button>Active</button>
              <button>Completed</button>
            </div>
            <button>Clear completed</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
