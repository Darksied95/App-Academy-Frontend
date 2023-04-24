const Login = () => {
  return (
    <main className="min-h-screen bg-ex-blue-500 text-white ">
      <div className="px-5 py-[20vh] max-w-[700px] mx-auto">
        <h1 className="text-3xl mb-8">LOGIN</h1>

        <form className="mb-10">
          <div className="mb-10">
            <label className="block">Username : </label>
            <input type="text" className="text-black w-full rounded-sm py-2" />
          </div>
          <div>
            <label className="block">Password :</label>
            <input
              type="password"
              className="text-black w-full rounded-sm py-2"
            />
          </div>
          <button className="bg-green-400 mt-9 py-2 px-4 rounded">Login</button>
        </form>
        <p>
          Not a User?{" "}
          <a href="http://" className="text-blue-300 underline">
            Register
          </a>
        </p>
      </div>
    </main>
  );
};

export default Login;
