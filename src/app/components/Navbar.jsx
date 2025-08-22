"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold">
        MyShop
      </Link>

      <div className="flex gap-6">
        <Link href="/" className="hover:text-gray-200">Home</Link>
        <Link href="/products" className="hover:text-gray-200">Products</Link>

        {!session ? (
          <div className="flex gap-4">
            <Link href="/login" className="hover:text-gray-200">Login</Link>
            <Link href="/register" className="hover:text-gray-200">Register</Link>
          </div>
        ) : (
          <button onClick={() => signOut()} className="hover:text-gray-200">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
