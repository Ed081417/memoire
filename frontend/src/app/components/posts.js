export default function Posts({ Link }) {
  return (
    <div className="p-6">
      <div className="max-w-2xl mx-auto flex justify-end items-center mb-6">
        <Link
          href={`/`}
          className="text-gray-900 hover:text-gray-700 underline flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
          Record my day
        </Link>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white border-2 border-gray-900 rounded-none p-6 mb-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Title 1</h2>
          <p className="text-gray-700">Content 1</p>
        </div>

        <div className="bg-white border-2 border-gray-900 rounded-none p-6 mb-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Title 2</h2>
          <p className="text-gray-700">Content 2</p>
        </div>

        <div className="bg-white border-2 border-gray-900 rounded-none p-6 mb-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Title 3</h2>
          <p className="text-gray-700">Content 3</p>
        </div>

        <div className="bg-white border-2 border-gray-900 rounded-none p-6 mb-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Title 4</h2>
          <p className="text-gray-700">Content 4</p>
        </div>
      </div>
    </div>
  );
}
