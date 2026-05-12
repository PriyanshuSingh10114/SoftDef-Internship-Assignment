import { FiArrowRight } from "react-icons/fi";
import trendyPlant from "../assets/trendyPlant.png";
import review4 from "../assets/review4.png";

export default function Hero() {
  return (
    <section className="relative">

      {/* Main Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12 pt-20 pb-28">

        <div className="grid lg:grid-cols-2 items-center min-h-screen">

          {/* Left Side */}
          <div>

            <h1 className="text-[55px] md:text-[90px] leading-none font-semibold text-white">
              Earth’s Exhale
            </h1>

            <p className="text-[#DADADA] mt-6 max-w-[520px] leading-8 text-lg">
              "Earth Exhale" symbolizes the purity and vitality
              of the Earth's natural environment and its
              essential role in sustaining life.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-5 mt-10">

              <button className="border border-[#DADADA] px-8 py-4 rounded-xl hover:bg-white hover:text-black transition duration-300">
                Buy Now
              </button>

              <button className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border border-white flex items-center justify-center">
                  ▶
                </div>

                <span className="text-white">
                  Live Demo...
                </span>
              </button>

            </div>

            {/* Review Card */}
            <div className="mt-20 w-[320px] backdrop-blur-xl bg-[#ffffff10] border border-[#ffffff20] rounded-[35px] p-6">

              <div className="flex items-center gap-4">

                <img
                  src={review4}
                  alt=""
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold text-lg">
                    Ron
                  </h3>

                  <div className="text-yellow-400">
                    ★★★★★
                  </div>
                </div>

              </div>

              <p className="text-sm text-[#D5D5D5] mt-5 leading-7">
                I can't express how thrilled I am with my new
                natural plants! They bring such a fresh and
                vibrant energy to my home.
              </p>

            </div>

          </div>

          {/* Right Side */}
          <div className="relative hidden lg:flex justify-end">

            {/* Floating Product Card */}
            <div className="w-[340px] backdrop-blur-2xl bg-[#ffffff10] border border-[#ffffff20] rounded-[40px] p-6">

              <img
                src={trendyPlant}
                alt=""
                className="w-[220px] mx-auto"
              />

              <p className="text-[#DADADA] mt-5">
                Indoor Plant
              </p>

              <div className="flex items-center justify-between mt-3">

                <h2 className="text-[34px] leading-[42px] font-medium">
                  Aglaonema plant
                </h2>

                <FiArrowRight className="text-2xl" />

              </div>

              <button className="mt-8 border border-[#DADADA] px-8 py-4 rounded-xl hover:bg-white hover:text-black transition duration-300">
                Buy Now
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}