'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">Memoire</h1>
      <p className="text-xl text-gray-700 mb-8 italic">Record your daily life.</p>

      <button type="button" onClick={() => router.push('/login')} className="bg-transparent border-2 border-gray-900 text-gray-900 px-6 py-2 rounded-none hover:bg-gray-900 hover:text-white transition duration-300">
        Get Started
      </button>
    </div>
  );
}
