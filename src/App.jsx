import "./App.css";
import Cross from "./assets/icon-cross.svg";

function App() {
  return (
    <main>
      <h1>TODO</h1>
      <input type="text" placeholder="Create a new todo..." />
      <div>
        <ul>
          <li>
            <span />
            <p>Lorem ipsum dolor, sit amet conse</p>
            <img src={Cross} />
          </li>
          <li>
            <span />
            <p>Lorem ipsum dolor, sit amet conse</p>
            <img src={Cross} />
          </li>
          <li>
            <span />
            <p>Lorem ipsum dolor, sit amet conse</p>
            <img src={Cross} />
          </li>
          <li>
            <span />
            <p>Lorem ipsum dolor, sit amet conse</p>
            <img src={Cross} />
          </li>
          <li>
            <span />
            <p>Lorem ipsum dolor, sit amet conse</p>
            <img src={Cross} />
          </li>
        </ul>
      </div>
      <div>
        <p>5 items left</p>
        <div>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
          <button>Clear completed</button>
        </div>
      </div>
    </main>
  );
}

export default App;
