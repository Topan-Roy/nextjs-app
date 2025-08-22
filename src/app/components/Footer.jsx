import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">MyShop</h2>
          <p className="text-sm leading-relaxed">
            The best place to explore and manage your products.  
            Shop smart, live better.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white">Products</Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-white">Login</Link>
            </li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect with us</h3>
          <p>Email: support@myshop.com</p>
          <div className="flex gap-4 text-2xl">
            <Link href="https://github.com/Topan-Roy" target="_blank" className="hover:text-white">
              <FaGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/topanroy/" target="_blank" className="hover:text-white">
              <FaLinkedin />
            </Link>
            <Link href="https://web.facebook.com/TopanRoy41105" target="_blank" className="hover:text-white">
              <FaFacebook />
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
}
