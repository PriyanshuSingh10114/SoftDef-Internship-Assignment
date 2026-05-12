import { FiShoppingBag } from "react-icons/fi";

export default function ProductCard({ item }) {
  return (
    <div className="backdrop-blur-xl bg-[#ffffff10] border border-[#ffffff20] rounded-[40px] p-8 hover:scale-[1.02] transition">
      <img
        src={item.image}
        alt=""
        className="w-[220px] h-[220px] object-contain mx-auto"
      />

      <h3 className="text-3xl mt-6">{item.title}</h3>

      <p className="text-[#D0D0D0] leading-7 mt-4">
        {item.desc}
      </p>

      <div className="flex items-center justify-between mt-8">
        <h4 className="text-4xl">Rs. {item.price}/-</h4>

        <button className="border p-4 rounded-lg">
          <FiShoppingBag />
        </button>
      </div>
    </div>
  );
}