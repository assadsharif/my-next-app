// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <nav className="bg-blue-500 w-full text-center py-4">
        <Link href="/" className="text-white mx-4">Home</Link>
        <Link href="/about" className="text-white mx-4">About</Link>
        <Link href="/contact" className="text-white mx-4">Contact</Link>
      </nav>

      <h1 className="text-4xl font-bold text-blue-700 mt-10">Home Page</h1>
      <p className="text-lg text-gray-700 mt-4">Welcome to the Home page!</p>
    </div>
  );
}
