// React
import { useState } from "react";

// hooks
import { useSignup } from "../hooks/useSignup";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center p-10 gap-6"
    >
      <h1 className="text-3xl font-bold">Sign Up</h1>
      <section className="flex flex-col w-full gap-2">
        <label htmlFor="email" className="text-xl">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="p-2 rounded-md text-gray-600"
        />
        <label htmlFor="password" className="text-xl">
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="p-2 rounded-md text-gray-600"
        />
      </section>
      <button
        type="submit"
        className="bg-teal-500 py-2 px-6 rounded-md font-bold text-white active:bg-teal-600"
        disabled={isLoading}
      >
        Sign Up
      </button>
      {error && <div className="text-red-500">{error}</div>}
    </form>
  );
}
