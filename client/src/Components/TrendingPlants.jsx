import { FiShoppingBag } from "react-icons/fi";

import deskPlant from "../assets/deskPlant.png";
import plant6 from "../assets/plant6.png";

export default function TrendingPlants() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 lg:px-12 mt-24">
      <h2 className="text-center text-4xl font-semibold mb-16">
        Our Trendy plants
      </h2>

      <div className="space-y-10">
        <div className="backdrop-blur-xl bg-[#ffffff10] border border-[#ffffff20] rounded-[60px] px-10 py-8 grid lg:grid-cols-2 items-center">
          <div>
            <img src={deskPlant} alt="" className="w-[350px]" />
          </div>

          <div>
            <h2 className="text-4xl font-semibold">
              For Your Desks Decorations
            </h2>

            <p className="mt-6 text-[#D0D0D0] leading-7">
              Beautiful desk decoration plant for workspace.
            </p>

            <h3 className="text-4xl mt-8 font-semibold">
              Rs. 599/-
            </h3>

            <div className="flex items-center gap-5 mt-8">
              <button className="border px-8 py-3 rounded-lg">
                Explore
              </button>

              <button className="border p-4 rounded-lg">
                <FiShoppingBag />
              </button>
            </div>
          </div>
        </div>

        <div className="backdrop-blur-xl bg-[#ffffff10] border border-[#ffffff20] rounded-[60px] px-10 py-8 grid lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-4xl font-semibold">
              For Your Desks Decorations
            </h2>

            <p className="mt-6 text-[#D0D0D0] leading-7">
              The greenery adds serenity to my desk.
            </p>

            <h3 className="text-4xl mt-8 font-semibold">
              Rs. 399/-
            </h3>

            <div className="flex items-center gap-5 mt-8">
              <button className="border px-8 py-3 rounded-lg">
                Explore
              </button>

              <button className="border p-4 rounded-lg">
                <FiShoppingBag />
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img src={plant6} alt="" className="w-[280px]" />
          </div>
        </div>
      </div>
    </section>
  );
}