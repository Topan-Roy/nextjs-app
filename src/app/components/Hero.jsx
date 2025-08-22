import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-100 py-20 text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl text-black md:text-5xl font-bold mb-6">
          Welcome to <span className="text-blue-600">MyShop</span>
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Explore our products, check details and manage your own products after login.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/products"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            View Products
          </Link>
          {/* <Link
            href="/login"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300"
          >
            Login
          </Link> */}
        </div>
      </div>
    </section>
  );
}
