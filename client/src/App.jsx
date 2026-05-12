import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import TrendingPlants from "./Components/TrendingPlants";
import ProductGrid from "./Components/ProductGrid";
import TestimonialsSection from "./Components/TestimonialsSection";
import OxygenSection from "./Components/OxygenSection";
import Footer from "./Components/Footer";

import heroBg from "./assets/hero.jpg";

export default function App() {
  return (
    <div className="app">

      {/* TOP SECTION */}
      <div
        className="top-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.7)), url(${heroBg})`,
        }}
      >

        <Navbar />

        <Hero />

        <TrendingPlants />

      </div>

      {/* OTHER SECTIONS */}
      <ProductGrid />

      <TestimonialsSection />

      <OxygenSection />

      <Footer />

    </div>
  );
}