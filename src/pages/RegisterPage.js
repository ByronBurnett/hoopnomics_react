import React from "react";
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(username, password);
  };

  return (
    <form className="login max-w-lg mx-auto p-10 m-20" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold text-center m-5">Register</h1>
      <input
        type="text"
        placeholder="username"
        className="block mb-1 w-full py-1 px-2 border-2 border-gray-300 rounded-lg"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        className="block mb-1 w-full py-1 px-2 border-2 border-gray-300 rounded-lg  "
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        disabled={isLoading}
        type="submit"
        className="w-full block bg-primary text-white rounded py-1 px-2"
      >
        Register
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default RegisterPage;
