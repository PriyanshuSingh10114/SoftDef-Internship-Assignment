import { FiArrowRight } from "react-icons/fi";

import heroPlant from "../assets/hero.png";
import trendyPlant from "../assets/trendyPlant.png";
import review4 from "../assets/review4.png";

export default function Hero() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-10 relative">
      <div className="grid lg:grid-cols-2 items-center">
        <div>
          <h1 className="text-[55px] md:text-[75px] leading-none font-semibold">
            Earth’s Exhale
          </h1>

          <p className="text-[#CFCFCF] mt-5 max-w-[500px] leading-7">
            Earth Exhale symbolizes the purity and vitality of the Earth's
            natural environment.
          </p>

          <div className="flex items-center gap-5 mt-8">
            <button className="border border-[#A6A6A6] px-7 py-3 rounded-lg hover:bg-white hover:text-black transition">
              Buy Now
            </button>

            <button className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border flex items-center justify-center">
                ▶
              </div>

              <span>Live Demo...</span>
            </button>
          </div>

          <div className="mt-16 w-[280px] backdrop-blur-xl bg-[#ffffff10] border border-[#ffffff20] rounded-[35px] p-6">
            <div className="flex items-center gap-4">
              <img
                src={review4}
                alt=""
                className="w-14 h-14 rounded-full object-cover"
              />

              <div>
                <h3 className="font-semibold">Ron</h3>
                <div className="text-yellow-400">★★★★★</div>
              </div>
            </div>

            <p className="text-sm text-[#D5D5D5] mt-5 leading-6">
              I can't express how thrilled I am with my new natural plants.
            </p>
          </div>
        </div>

        <div className="relative mt-16 lg:mt-0">
          <img
            src={heroPlant}
            alt=""
            className="w-full object-contain"
          />

          <div className="absolute top-10 right-0 lg:right-10 w-[300px] backdrop-blur-xl bg-[#ffffff10] border border-[#ffffff20] rounded-[35px] p-5">
            <img
              src={trendyPlant}
              alt=""
              className="w-[180px] mx-auto"
            />

            <p className="text-[#CFCFCF] mt-4">Indoor Plant</p>

            <div className="flex items-center justify-between mt-2">
              <h2 className="text-3xl">Aglaonema plant</h2>

              <FiArrowRight />
            </div>

            <button className="mt-6 border px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}