"use client"

import { useRouter } from "next/navigation"
import Link from 'next/link'

export default function Login() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white border-2 border-gray-900 p-8 rounded-none shadow-lg w-full max-w-xs">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Login
        </h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              className="mt-1 block w-full border-2 border-gray-900 rounded-none px-2 py-1 focus:outline-none focus:border-gray-900 text-sm"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full border-2 border-gray-900 rounded-none px-2 py-1 focus:outline-none focus:border-gray-900 text-sm"
            />
            <a
              href="#"
              className="text-sm text-gray-700 hover:underline block text-right mt-1"
            >
              Forgot your password?
            </a>
          </div>
          <button
            type="button"
            onClick={() => router.push("/")}
            className="w-full bg-transparent border-2 border-gray-900 text-gray-900 px-3 py-1 rounded-none hover:bg-gray-900 hover:text-white transition duration-300 text-sm"
          >
            Sign In
          </button>
          <p className="mt-5 text-sm text-gray-700 text-center">
            Don't have an account?{" "}
            <Link href={`/register`} className="text-gray-900 font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
