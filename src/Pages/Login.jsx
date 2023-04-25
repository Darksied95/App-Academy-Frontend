import { Link } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../Services/UserService";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = await loginUser(loginDetails);
      localStorage.setItem("token", data.token);
      window.location = "/dashboard";
    } catch (error) {
      alert("something went wrong");
      console.log(error);
    }
  }
  return (
    <main className="min-h-screen bg-ex-blue-500 text-white ">
      <div className="px-5 py-[20vh] max-w-[700px] mx-auto">
        <h1 className="text-3xl mb-8">LOGIN</h1>

        <form className="mb-10" onSubmit={handleSubmit}>
          <div className="mb-10">
            <label className="block">Username : </label>
            <input
              type="text"
              className="text-black w-full rounded-sm py-2"
              value={loginDetails.username}
              onChange={(e) =>
                setLoginDetails((prev) => ({
                  ...prev,
                  username: e.target.value,
                }))
              }
            />
          </div>
          <div>
            <label className="block">Password :</label>
            <input
              type="password"
              className="text-black w-full rounded-sm py-2"
              value={loginDetails.password}
              onChange={(e) =>
                setLoginDetails((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
          </div>
          <button className="bg-green-400 mt-9 py-2 px-4 rounded">Login</button>
        </form>
        <p>
          Not a User?{" "}
          <Link to={"/register"} className="text-blue-300 underline">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
