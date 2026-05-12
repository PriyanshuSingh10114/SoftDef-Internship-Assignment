import ProductCard from "./ProductCard";

import plant1 from "../assets/plant1.png";
import plant2 from "../assets/plant2.png";
import plant3 from "../assets/plant3.png";
import plant4 from "../assets/plant4.png";
import plant5 from "../assets/plant5.png";
import plant6 from "../assets/plant6.png";

const products = [
  {
    id: 1,
    title: "Aglaonema plant",
    price: "300",
    image: plant1,
    desc: "Chinese Evergreen plant.",
  },
  {
    id: 2,
    title: "Plantain Lilies",
    price: "380",
    image: plant2,
    desc: "Decorative lush leaves.",
  },
  {
    id: 3,
    title: "Cactus",
    price: "259",
    image: plant3,
    desc: "Thrives in dry environments.",
  },
  {
    id: 4,
    title: "Swiss cheese Plant",
    price: "400",
    image: plant4,
    desc: "Perforated tropical leaves.",
  },
  {
    id: 5,
    title: "Sansevieria plant",
    price: "450",
    image: plant5,
    desc: "Low maintenance indoor plant.",
  },
  {
    id: 6,
    title: "Agave plant",
    price: "359",
    image: plant6,
    desc: "Architectural succulent plant.",
  },
];

export default function ProductsGrid() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 lg:px-12 mt-32">
      <h2 className="text-center text-5xl font-semibold mb-20">
        Our Top Selling Plants
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}