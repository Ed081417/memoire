import Link from 'next/link'

export default function Register() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white border-2 border-gray-900 p-8 rounded-none shadow-lg w-full max-w-xs">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Register</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 block w-full border-2 border-gray-900 rounded-none px-2 py-1 focus:outline-none focus:border-gray-900 text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full border-2 border-gray-900 rounded-none px-2 py-1 focus:outline-none focus:border-gray-900 text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 block w-full border-2 border-gray-900 rounded-none px-2 py-1 focus:outline-none focus:border-gray-900 text-sm"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
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
            Already have an account?{' '}
            <Link href={`/login`} className="text-gray-900 font-semibold hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
