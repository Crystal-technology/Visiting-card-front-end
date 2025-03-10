import React from 'react';
import Link from "next/link"
import {  PenTool} from "lucide-react"

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-6 md:py-12">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <PenTool className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">CardCraft</span>
          </div>
          <p className="text-sm text-gray-500">
            Create stunning digital visiting cards that leave a lasting impression.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-bold">Product</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#features" className="text-gray-500 hover:text-gray-900">
                Features
              </Link>
            </li>
            <li>
              <Link href="#templates" className="text-gray-500 hover:text-gray-900">
                Templates
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="text-gray-500 hover:text-gray-900">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-bold">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                Guides
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                Support
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                API
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-bold">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-xs text-gray-500">© {new Date().getFullYear()} CardCraft. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <Link href="#" className="text-gray-500 hover:text-gray-900">
            <span className="sr-only">Twitter</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-900">
            <span className="sr-only">Instagram</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-900">
            <span className="sr-only">LinkedIn</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;