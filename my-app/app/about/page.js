'use client';

import { useRouter } from "next/navigation";

function About() {
  const router = useRouter();

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <button
        onClick={() => router.push('/home')}
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        Home
      </button>
    </>
  );
}

export default About;
