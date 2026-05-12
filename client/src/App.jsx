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
        <TrendingPlants />
        <ProductsGrid />
        <TestimonialsSection />
        <OxygenSection />
      </main>
      <Footer />
    </div>
  );
}