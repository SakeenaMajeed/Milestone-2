import React from 'react';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

const Contact: React.FC = () => {
    return (
        <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 min-h-screen flex flex-col">
            {/* Navigation Bar */}
            <nav className="w-full bg-gray-900 h-16 flex items-center px-4 shadow-lg fixed top-0 left-0 z-50">
                <Link
                    href="/"
                    className="text-yellow-400 font-bold tracking-wide p-2 border-2 border-gray-400 transition-all duration-300 hover:border-yellow-400 hover:text-gray-300"
                    aria-label="Sakeena's Portfolio"
                >
                    sakeena
                </Link>
                <ul className="flex gap-4 ml-auto text-sm md:text-base">
                    <li>
                        <Link
                            href="/"
                            className="hover:text-amber-400 text-slate-100 transition-colors duration-300"
                            aria-label="Go to Home Page"
                        >
                            <b>Home</b>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="hover:text-amber-400 text-slate-100 transition-colors duration-300"
                            aria-label="Go to About Page"
                        >
                            <b>About</b>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="hover:text-amber-400 text-slate-100 transition-colors duration-300"
                            aria-label="Go to Contact Page"
                        >
                            <b>Contact</b>
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Main Content */}
            <main className="flex-grow mt-16 flex items-center justify-center">
                {/* Contact Section */}
                <section
                    id="contact"
                    className="bg-gray-900 text-white p-6 md:p-8 rounded-2xl shadow-lg max-w-full md:max-w-3xl lg:max-w-4xl mx-auto mt-6 max-h-[400px] flex flex-col items-center justify-center overflow-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                >
                    <h2 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4 text-yellow-400 hover:text-gray-200 transition-colors duration-300">
                        Contact Me
                    </h2>
                    <p className="text-sm md:text-base leading-relaxed mb-6">
                      { "Got questions or want to get in touch? I am here to help!"}
                    </p>
                    <div className="text-left mb-6">
                        <p className="mb-2">
                            <strong>Email : </strong>
                            <span className="hover:text-yellow-300 transition-colors duration-300">
                                sakeenamajeed24@gmail.com
                            </span>
                        </p>
                        <p className="mb-2">
                            <strong>Phone : </strong>
                            <span className="hover:text-yellow-300 transition-colors duration-300">
                                03701131858
                            </span>
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        <SocialIcon
                            url="https://www.linkedin.com/in/sakeena-majeed-101733322"
                            className="transition-transform transform hover:scale-110 hover:rotate-12 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 p-3 rounded-full text-white"
                        />
                        <SocialIcon
                            url="https://www.facebook.com/sukaina.majeed.98"
                            className="transition-transform transform hover:scale-110 hover:rotate-12 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-900 p-3 rounded-full text-white"
                        />
                        <SocialIcon
                            url="https://www.instagram.com/_sakeena_majeed/"
                            className="transition-transform transform hover:scale-110 hover:rotate-12 hover:shadow-xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 p-3 rounded-full text-white"
                        />
                        <SocialIcon
                            url="https://github.com/SakeenaMajeed"
                            className="transition-transform transform hover:scale-110 hover:rotate-12 hover:shadow-xl hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 p-3 rounded-full text-white"
                        />
                    </div>
                </section>
            </main>

            {/* Footer Section */}
            <footer className="w-full bg-gray-900 text-center py-4 border-t border-gray-700">
                <div className="container mx-auto text-gray-300">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Sakeena. All rights reserved. 	&#9829;</p>
                    <p className="text-sm mt-2">
                        <Link href="/" className="hover:text-yellow-400">Home</Link> | 
                        <Link href="/about" className="hover:text-yellow-400">About</Link> | 
                        <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Contact;
