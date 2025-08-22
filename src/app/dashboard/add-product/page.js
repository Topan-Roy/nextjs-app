"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const { data: session } = useSession();
  const router = useRouter();

  const [form, setForm] = useState({ name: "", description: "", price: "" });

  if (!session) {
    router.push("/login");
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, price: Number(form.price) }),
    });

    const data = await res.json();
    if (data.success) {
      alert("Product added successfully!");
      setForm({ name: "", description: "", price: "" });
      router.push("/products");
    } else {
      alert("Error: " + data.error);
    }
  };

  return (
    <div className="min-h-screen text-black flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">Add Product</h2>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
