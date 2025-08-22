"use client";

import { useEffect, useState } from "react";

export default function ProductDetail({ params }) {
  const { id } = params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`/api/products`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.data.find((p) => p._id === id);
        setProduct(found);
      });
  }, [id]);

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <div className="min-h-screen text-black p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="mb-2">{product.description}</p>
      <p className="font-bold">Price: ${product.price}</p>
    </div>
  );
}
