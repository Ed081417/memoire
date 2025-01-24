export default function Navbar({ Link }) {
  return (
    <div>
      <nav className="bg-white border-b-2 border-gray-900">
        <div className="max-w-2xl mx-auto py-3 flex justify-between items-center">
          <div className="flex space-x-2 items-center">
            <Link
              href={`/`}
              className="text-gray-900 hover:text-gray-700 hover:underline"
            >
              Home
            </Link>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-700 hover:underline"
            >
              Profile
            </a>
          </div>

          <a
            href="#"
            className="text-gray-900 hover:text-gray-700 hover:underline"
          >
            Logout
          </a>
        </div>
      </nav>
    </div>
  );
}
