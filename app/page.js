// pages/index.js

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link> | 
        <Link href="/about">About</Link> | 
        <Link href="/contact">Contact</Link>
      </nav>

      <h1>Home Page</h1>
      <p>Welcome to the Home page!</p>
    </div>
  );
}
