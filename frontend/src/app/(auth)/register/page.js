"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password confirmation
    if (password !== passwordConfirmation) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Send a POST request to the Laravel Breeze API
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          password_confirmation: passwordConfirmation,
        }),
        credentials: "include", // Include cookies for session-based authentication
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }

      // Redirect to the dashboard or login page after successful registration
      router.push("/dashboard");
    } catch (err) {
      setError(err.message || "An error occurred during registration");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white border-2 border-gray-900 p-8 rounded-none shadow-lg w-full max-w-xs">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Register
        </h1>
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border-2 border-gray-900 rounded-none px-2 py-1 focus:outline-none focus:border-gray-900 text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border-2 border-gray-900 rounded-none px-2 py-1 focus:outline-none focus:border-gray-900 text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full border-2 border-gray-900 rounded-none px-2 py-1 focus:outline-none focus:border-gray-900 text-sm"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              className="mt-1 block w-full border-2 border-gray-900 rounded-none px-2 py-1 focus:outline-none focus:border-gray-900 text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-transparent border-2 border-gray-900 text-gray-900 px-3 py-1 rounded-none hover:bg-gray-900 hover:text-white transition duration-300 text-sm"
          >
            Register
          </button>
          <p className="mt-4 text-sm text-gray-700 text-center">
            Already have an account?{" "}
            <Link
              href={`/login`}
              className="text-gray-900 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
