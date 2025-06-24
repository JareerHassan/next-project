'use client'; 

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl flex items-center">
          <img
            src="https://landing.zytheme.com/cobuild/assets/images/logo/logo-light.png"
            alt="Logo"
            className="h-8"
          />
          <h4 className="ml-2 mt-1 text-black">COBUILD</h4>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-small">
          <li><Link href="/" className="hover:text-yellow-700">Home</Link></li>
          <li><Link href="/services" className="hover:text-yellow-700">Services</Link></li>
          <li><Link href="/featured" className="hover:text-yellow-700">Work</Link></li>
          <li><Link href="/skills" className="hover:text-yellow-700">Skills</Link></li>
          <li><Link href="/ourclient" className="hover:text-yellow-700">Testimonials</Link></li>
        </ul>

        {/* Toggle Button (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 text-gray-700 font-small">
          <li><Link href="/" className="block hover:text-yellow-700">Home</Link></li>
          <li><Link href="/services" className="block hover:text-yellow-700">Services</Link></li>
          <li><Link href="/featured" className="block hover:text-yellow-700">Work</Link></li>
          <li><Link href="/skills" className="block hover:text-yellow-700">Skills</Link></li>
          <li><Link href="/ourclient" className="block hover:text-yellow-700">Testimonials</Link></li>
        </ul>
      )}
    </nav>
  );
}
