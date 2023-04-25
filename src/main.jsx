import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./context.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Components/page/Register.jsx";
import "./index.css";
import Login from "./Components/page/Login.jsx";
import Todo from "./Components/page/Todo.jsx";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Todo />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AppProvider>
  </React.StrictMode>
);
