import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main className="min-h-screen bg-ex-blue-500 text-white ">
      <div className="px-5 py-[10vh] max-w-[700px] mx-auto">
        <h1 className="text-3xl mb-8">Register</h1>

        <form className="mb-10">
          <div className="mb-10">
            <label className="block">Username : </label>
            <input type="text" className="text-black w-full rounded-sm py-2" />
          </div>
          <div className="mb-10">
            <label className="block ">Password :</label>
            <input
              type="password"
              className="text-black w-full rounded-sm py-2"
            />
          </div>
          <button className="bg-green-400 mt-9 py-2 px-4 rounded">
            <Link to={"/dashboard"}>Register</Link>
          </button>
        </form>
        <p>
          Already a User?{" "}
          <Link to="/login" className="text-blue-300 underline">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
