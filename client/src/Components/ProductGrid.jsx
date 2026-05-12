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
    desc: "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
  },
  {
    id: 2,
    title: "Plantain Lilies",
    price: "380",
    image: plant2,
    desc: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
  },
  {
    id: 3,
    title: "Cactus",
    price: "259",
    image: plant3,
    desc: "It is known for their ability to thrive in arid environments",
  },
  {
    id: 4,
    title: "Swiss cheese Plant",
    price: "400",
    image: plant4,
    desc: "It is a popular tropical houseplant known for its distinctive, perforated leaves",
  },
  {
    id: 5,
    title: "Sansevieria plant",
    price: "450",
    image: plant5,
    desc: "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
  },
  {
    id: 6,
    title: "Agave plant",
    price: "359",
    image: plant6,
    desc: "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
  },
];

export default function ProductGrid() {
  return (
    <section className="products-section">

      <div className="container">

        <h2 className="section-title">
          Our Top Selling Plants
        </h2>

        <div className="products-grid">

          {products.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}