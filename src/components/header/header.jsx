"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, PenTool } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <PenTool className="h-6 w-6 text-blue-600" />
          <span>CardCraft</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="flex gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link href="/contact-us" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </div>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/login" className="hidden sm:inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-100">
            Login
          </Link>
          <Link href="/sign-up" className="inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700">
            Sign-Up
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-gray-900 focus:outline-none"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        <nav className="mt-16 flex flex-col gap-6 p-6 text-lg">
            <Link href="/" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/contact-us" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="/login" className="text-gray-900 border border-gray-300 rounded-md py-2 text-center hover:bg-gray-100" onClick={() => setIsOpen(false)}>Login</Link>
          <Link href="/sign-up" className="text-white bg-blue-600 rounded-md py-2 text-center hover:bg-blue-700" onClick={() => setIsOpen(false)}>Sign-Up</Link>
        </nav>
      </div>
    </header>
  );
}