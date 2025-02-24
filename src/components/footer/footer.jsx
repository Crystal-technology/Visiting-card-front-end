import Link from "next/link";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; {new Date().getFullYear()} Digital Card. All rights reserved.</p>
        
        {/* Social Links */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="https://facebook.com" target="_blank" className="hover:text-blue-500">
            <Facebook size={20} />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="hover:text-blue-400">
            <Twitter size={20} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:text-blue-300">
            <Linkedin size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
