import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import ProductsGrid from "./Components/ProductsGrid";
import TestimonialsSection from "./Components/TestimonialsSection";
import Footer from "./Components/Footer";
import TrendingPlants from "./Components/TrendingPlants";
import OxygenSection from "./Components/OxygenSection";

export default function App() {
  return (
    <div className="bg-[#07130A] text-white overflow-hidden font-sans">
      <Navbar />
      <main>
        <Hero />

        {/* Trending Plants Section */}
        <TrendingPlants />

        {/* Top Selling Plants */}
        <ProductsGrid />

        {/* Customer Reviews */}
        <TestimonialsSection />

        {/* O2 Plants Section */}
        <OxygenSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}