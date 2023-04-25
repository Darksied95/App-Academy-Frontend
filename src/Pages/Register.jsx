import { Link } from "react-router-dom";
import { registerUser } from "../Services/UserService";
import { useState } from "react";

const Register = () => {
  const [registrationDetails, setRegistrationDetails] = useState({
    username: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = await registerUser(registrationDetails);
      console.log(data);
    } catch (error) {
      alert("something went wrong");
      console.log(error);
    }
  }

  return (
    <main className="min-h-screen bg-ex-blue-500 text-white ">
      <div className="px-5 py-[10vh] max-w-[700px] mx-auto">
        <h1 className="text-3xl mb-8">Register</h1>

        <form className="mb-10" onSubmit={handleSubmit}>
          <div className="mb-10">
            <label className="block">Username : </label>
            <input
              type="text"
              className="text-black w-full rounded-sm py-2"
              value={registrationDetails.username}
              onChange={(e) =>
                setRegistrationDetails((prev) => ({
                  ...prev,
                  username: e.target.value,
                }))
              }
            />
          </div>
          <div className="mb-10">
            <label className="block ">Password :</label>
            <input
              type="password"
              className="text-black w-full rounded-sm py-2"
              value={registrationDetails.password}
              onChange={(e) =>
                setRegistrationDetails((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
          </div>
          <button className="bg-green-400 mt-9 py-2 px-4 rounded" type="submit">
            Register
          </button>
        </form>
        <p>
          Already a User?{" "}
          <Link to="/" className="text-blue-300 underline">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
