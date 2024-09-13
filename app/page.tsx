'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component

const Navbar: React.FC = () => {
  const [isFooterVisible, setFooterVisible] = useState(false);

  const toggleFooterVisibility = () => {
    setFooterVisible(!isFooterVisible);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 flex flex-col items-center text-center p-4 md:p-8">
      {/* Navbar Section */}
      <nav className="w-full bg-gray-900 h-16 flex items-center px-4 shadow-lg fixed top-0 left-0 z-50">
        <Link
          href="#"
          className="text-yellow-400 font-bold tracking-wide p-2 border-2 border-gray-400 transition-all duration-300 hover:border-yellow-400 hover:text-gray-300"
          aria-label="Sakeena's Portfolio"
          onClick={toggleFooterVisibility}
        >
          sakeena
        </Link>
        <ul className="flex gap-3 md:gap-5 ml-auto">
          <li>
            <Link
              href="/"
              className="hover:text-amber-400 text-slate-100"
              aria-label="Go to Home Page"
            >
              <b>Home</b>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-amber-400 text-slate-100"
              aria-label="Go to About Page"
            >
              <b>About</b>
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-amber-400 text-slate-100"
              aria-label="Go to Contact Page"
            >
              <b>Contact</b>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content Section */}
      <main className="mt-20 flex flex-col md:flex-row items-center justify-center bg-gray-900 p-4 md:p-8 rounded-3xl shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out h-[70vh] w-full md:w-3/4 lg:w-2/3">
        <Image
          src="//portfolio-8kfv.vercel.app/profile-pic%20(2).png"
          alt="Sakeena's Image"
          width={240} // Define the width
          height={240} // Define the height
          className="rounded-full border-4 border-yellow-500 shadow-2xl transform hover:scale-110 transition-transform duration-300"
        />
        <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl mb-3 text-white hover:text-yellow-600">
         { "  Hey, I am Sakeena"}
          </h1>
          <h2 className="text-xl md:text-2xl mb-3 text-gray-300 hover:text-pink-700">
      {    "  Future Cloud Applied Gen-AI Engineer..."}
          </h2>
        </div>
      </main>

      {/* Footer Section */}
      {isFooterVisible && (
        <footer className="w-full bg-gray-900 text-center py-4 border-t border-gray-700 mt-auto fixed bottom-0 left-0">
          <div className="container mx-auto text-gray-300">
            <p className="text-xs md:text-sm">
              &copy; {new Date().getFullYear()} Sakeena. All rights reserved.
            </p>
            <p className="text-xs md:text-sm mt-2">
              <Link href="/" className="hover:text-yellow-400">
                Home
              </Link>{' '}
              |{' '}
              <Link href="/about" className="hover:text-yellow-400">
                About
              </Link>{' '}
              |{' '}
              <Link href="/contact" className="hover:text-yellow-400">
                Contact
              </Link>
            </p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Navbar;
