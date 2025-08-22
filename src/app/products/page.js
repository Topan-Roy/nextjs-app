"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.data || []));
  }, []);

  return (
    <div className="min-h-screen text-black p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p>{product.description.slice(0, 100)}...</p>
            <p className="font-bold mt-2">${product.price}</p>
            <Link
              href={`/products/${product._id}`}
              className="mt-2 inline-block text-blue-600 hover:underline"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
