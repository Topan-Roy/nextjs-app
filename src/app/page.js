import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductHighlights from "./components/ProductHighlights";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
        <Hero></Hero>
        <ProductHighlights></ProductHighlights>
        <Footer></Footer>
      </div>
  );
}
