import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">Memoire</h1>
      <p className="text-xl text-gray-700 mb-8 italic">Record your daily life.</p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
        Get Started
      </button>
    </div>
  );
}
