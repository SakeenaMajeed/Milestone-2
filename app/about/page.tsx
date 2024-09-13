import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component

const About: React.FC = () => {
    return (
        <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 flex flex-col items-center text-center p-4 min-h-screen">
            {/* Navbar Section */}
            <nav className="w-full bg-gray-900 h-16 flex items-center px-4 shadow-lg mb-6">
                <Link href="/" aria-label="Sakeena's Portfolio" className="text-yellow-400 font-bold tracking-wide p-2 border-2 border-gray-400 transition-all duration-300 hover:border-yellow-400 hover:text-gray-300">
                    sakeena
                </Link>
                <ul className="flex gap-5 ml-auto">
                    <li>
                        <Link href="/" aria-label="Go to Home Page" className="hover:text-amber-400 text-slate-100">
                            <b>Home</b>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" aria-label="Go to About Page" className="hover:text-amber-400 text-slate-100">
                            <b>About</b>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" aria-label="Go to Contact Page" className="hover:text-amber-400 text-slate-100">
                            <b>Contact</b>
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* About Section */}
            <section
                id="about"
                className="bg-gray-900 text-white p-4 md:p-6 rounded-2xl shadow-lg max-w-3xl md:max-w-4xl mx-auto transition-transform transform hover:scale-105 duration-300 ease-in-out mb-8"
                style={{ height: 'auto', minHeight: '300px' }} // Adjust height as needed
            >
                <div className="text-center mb-4 md:mb-6">
                    <h2 className="text-2xl md:text-4xl font-extrabold mb-2 md:mb-3 text-yellow-400 hover:text-gray-200">
                        About Me
                    </h2>
                    <div className="flex justify-center mb-3 md:mb-4">
                        {/* Ensure the image is placed in the "public" folder as "/public/profile-pic.png" */}
                        <Image
                            src="//portfolio-8kfv.vercel.app/profile-pic%20(2).png" // Correct image path from public folder
                            alt="Sakeena's Image"
                            width={112} // Adjust width as needed
                            height={112} // Adjust height as needed
                            className="rounded-full border-4 border-yellow-500 shadow-lg transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <p className="text-sm md:text-base leading-relaxed max-w-lg md:max-w-xl mx-auto">
                        {`
                            Hello! I am Sakeena, a passionate 16-year-old web developer currently navigating through the exciting world of technology as a senior student at the Governor Sindh IT Initiative for AI, web 3, Metaverse (GIAIC). I thrive on creating innovative and dynamic web experiences, with a strong foundation in HTML, CSS, JavaScript, TypeScript, React, and Next.js. My journey is fueled by a love for coding and a commitment to continuous learning and growth in the tech field.
                        `}
                    </p>
                </div>
                <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-yellow-400 hover:text-gray-200">
                        Skills
                    </h3>
                    <ul className="flex flex-wrap justify-center gap-3 md:gap-4">
                        {["HTML", "CSS", "JavaScript", "TypeScript", "Next.js", "React.js"].map((skill, index) => (
                            <li key={index}>
                                <button
                                    className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-lg text-white transition-colors duration-300 transform hover:scale-105 hover:shadow-xl ${
                                        skill === "HTML"
                                            ? "bg-red-600 hover:bg-red-700"
                                            : skill === "CSS"
                                            ? "bg-blue-600 hover:bg-blue-700"
                                            : skill === "JavaScript"
                                            ? "bg-green-600 hover:bg-green-700"
                                            : skill === "TypeScript"
                                            ? "bg-purple-600 hover:bg-purple-700"
                                            : skill === "Next.js"
                                            ? "bg-pink-600 hover:bg-pink-700"
                                            : "bg-yellow-500 text-black hover:bg-yellow-600"
                                    }`}
                                >
                                    {skill}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="w-full bg-gray-900 text-center py-4 border-t border-gray-700 mt-auto">
                <div className="container mx-auto text-gray-300">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Sakeena. All rights reserved. &#9829;</p>
                    <p className="text-sm mt-2">
                        <Link href="/" className="hover:text-yellow-400">Home</Link> |  
                        <Link href="/about" className="hover:text-yellow-400">About</Link> | 
                        <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default About;
