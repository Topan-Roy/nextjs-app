import Link from "next/link";

const sampleProducts = [
  {
    id: 1,
    name: "Product One",
    description: "This is a great product with awesome features.",
    price: "$49.99",
  },
  {
    id: 2,
    name: "Product Two",
    description: "High quality and reliable product for everyone.",
    price: "$59.99",
  },
  {
    id: 3,
    name: "Product Three",
    description: "Affordable and useful, a perfect choice.",
    price: "$39.99",
  },
  {
    id: 4,
    name: "Product Four",
    description: "Top-rated product with amazing reviews.",
    price: "$69.99",
  },
];

export default function ProductHighlights() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-black font-bold text-center mb-12">Product Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sampleProducts.map((product) => (
            <div key={product.id} className="border rounded-lg p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl text-black font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="font-bold text-black mb-4">{product.price}</p>
              <Link
                href={`/products/${product.id}`}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
