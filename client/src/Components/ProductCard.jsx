import { FiShoppingBag } from "react-icons/fi";

export default function ProductCard({ item }) {
  return (
    <div className="glass-card product-card">

      <img
        src={item.image}
        alt={item.title}
        className="product-img"
      />

      <h3 className="product-title">
        {item.title}
      </h3>

      <p className="product-desc">
        {item.desc}
      </p>

      <div className="product-bottom">

        <h4 className="product-price">
          Rs. {item.price}/-
        </h4>

        <button className="icon-btn">
          <FiShoppingBag />
        </button>

      </div>

    </div>
  );
}