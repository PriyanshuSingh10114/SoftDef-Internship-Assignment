import {
  FiMenu,
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiArrowRight,
} from "react-icons/fi";

import heroPlant from "../assets/hero.png";
import trendyPlant from "../assets/trendyPlant.png";
import deskPlant from "../assets/deskPlant.png";

import plant1 from "../assets/plant1.png";
import plant2 from "../assets/plant2.png";
import plant3 from "../assets/plant3.png";
import plant4 from "../assets/plant4.png";
import plant5 from "../assets/plant5.png";
import plant6 from "../assets/plant6.png";

import review1 from "../assets/review1.png";
import review2 from "../assets/review2.png";
import review3 from "../assets/review3.png";
import review4 from "../assets/review4.png";

import oxygenPlant from "../assets/oxygenPlant.png";

const products = [
  {
    id: 1,
    title: "Aglaonema plant",
    price: "300",
    image: plant1,
    desc: "The Aglaonema plant, commonly known as Chinese Evergreen.",
  },
  {
    id: 2,
    title: "Plantain Lilies",
    price: "380",
    image: plant2,
    desc: "Hostas are primarily grown for decorative leaves.",
  },
  {
    id: 3,
    title: "Cactus",
    price: "259",
    image: plant3,
    desc: "Known for thriving in dry environments.",
  },
  {
    id: 4,
    title: "Swiss cheese Plant",
    price: "400",
    image: plant4,
    desc: "Popular tropical houseplant with perforated leaves.",
  },
  {
    id: 5,
    title: "Sansevieria plant",
    price: "450",
    image: plant5,
    desc: "Low maintenance indoor plant admired for appearance.",
  },
  {
    id: 6,
    title: "Agave plant",
    price: "359",
    image: plant6,
    desc: "Known for thick fleshy leaves and architecture.",
  },
];

export default function Home() {
  return (
    <div className="bg-[#07130A] text-white overflow-hidden">
      {/* Navbar */}
      <nav className="max-w-[1280px] mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="" className="w-10" />
          <h1 className="text-2xl font-semibold">FloraVision.</h1>
        </div>

        <ul className="hidden lg:flex items-center gap-10 text-[15px] text-[#DADADA]">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Plant Type</li>
          <li className="cursor-pointer">More</li>
          <li className="cursor-pointer">Contact</li>
        </ul>

        <div className="flex items-center gap-5 text-xl">
          <FiSearch />
          <FiShoppingBag />
          <FiUser />
          <FiMenu className="lg:hidden" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-10 relative">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Left */}
          <div>
            <h1 className="text-[55px] md:text-[75px] leading-none font-semibold">
              Earth’s Exhale
            </h1>

            <p className="text-[#CFCFCF] mt-5 max-w-[500px] leading-7">
              "Earth Exhale" symbolizes the purity and vitality of the Earth's
              natural environment and its essential role in sustaining life.
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

            {/* Review Card */}
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
                I can't express how thrilled I am with my new natural plants!They bring such a fresh and vibrant energy to my home.
              </p>
              
            </div>
          </div>

          {/* Right */}
          <div className="relative mt-16 lg:mt-0">
            <img
              src={heroPlant}
              alt=""
              className="w-full object-contain"
            />

            {/* Floating Card */}
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

      {/* Trendy Plants */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-12 mt-24">
        <h2 className="text-center text-4xl font-semibold mb-16">
          Our Trendy plants
        </h2>

        <div className="space-y-10">
          {/* Card */}
          <div className="backdrop-blur-xl bg-[#ffffff10] border border-[#ffffff20] rounded-[60px] px-10 py-8 grid lg:grid-cols-2 items-center">
            <div>
              <img src={deskPlant} alt="" className="w-[350px]" />
            </div>

            <div>
              <h2 className="text-4xl font-semibold">
                For Your Desks Decorations
              </h2>

              <p className="mt-6 text-[#D0D0D0] leading-7">
                I recently added a beautiful desk decoration plant to my
                workspace, and it has made such a positive difference!
              </p>

              <h3 className="text-4xl mt-8 font-semibold">Rs. 599/-</h3>

              <div className="flex items-center gap-5 mt-8">
                <button className="border px-8 py-3 rounded-lg hover:bg-white hover:text-black transition">
                  Explore
                </button>

                <button className="border p-4 rounded-lg">
                  <FiShoppingBag />
                </button>
              </div>
            </div>
          </div>

          {/* Second */}
          <div className="backdrop-blur-xl bg-[#ffffff10] border border-[#ffffff20] rounded-[60px] px-10 py-8 grid lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-4xl font-semibold">
                For Your Desks Decorations
              </h2>

              <p className="mt-6 text-[#D0D0D0] leading-7">
                The greenery adds a touch of nature and serenity to my desk.
              </p>

              <h3 className="text-4xl mt-8 font-semibold">Rs. 399/-</h3>

              <div className="flex items-center gap-5 mt-8">
                <button className="border px-8 py-3 rounded-lg hover:bg-white hover:text-black transition">
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

      {/* Top Selling */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-12 mt-32">
        <h2 className="text-center text-5xl font-semibold mb-20">
          Our Top Selling Plants
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((item) => (
            <div
              key={item.id}
              className="backdrop-blur-xl bg-[#ffffff10] border border-[#ffffff20] rounded-[40px] p-8 hover:scale-[1.02] transition"
            >
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
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-12 mt-36">
        <h2 className="text-center text-5xl font-semibold mb-20">
          Customer Review
        </h2>

        <div className="grid lg:grid-cols-3 gap-10">
          {[review1, review2, review3].map((img, i) => (
            <div
              key={i}
              className="backdrop-blur-xl bg-[#ffffff10] border border-[#ffffff20] rounded-[45px] p-8"
            >
              <div className="flex items-center gap-5">
                <img
                  src={img}
                  alt=""
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-2xl font-semibold">
                    {i === 0
                      ? "Shelly Russel"
                      : i === 1
                      ? "Lula Rolfson"
                      : "Carol Huels"}
                  </h3>

                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>

              <p className="mt-8 text-[#D0D0D0] leading-8">
                It's like bringing a little piece of nature indoors.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Oxygen Section */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-12 mt-36">
        <h2 className="text-center text-5xl font-semibold mb-20">
          Our Best o2
        </h2>

        <div className="backdrop-blur-xl bg-[#ffffff10] border border-[#ffffff20] rounded-[60px] p-10 grid lg:grid-cols-2 items-center">
          <div>
            <img
              src={oxygenPlant}
              alt=""
              className="w-[450px]"
            />
          </div>

          <div>
            <h2 className="text-5xl font-semibold leading-[70px]">
              We Have Small And Best O2 Plants Collection’s
            </h2>

            <p className="mt-8 text-[#D0D0D0] leading-9 text-lg">
              Oxygen-producing plants release oxygen into the atmosphere through
              photosynthesis and help filter toxins.
            </p>

            <button className="mt-10 border px-8 py-3 rounded-lg hover:bg-white hover:text-black transition">
              Explore
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-[1280px] mx-auto px-6 lg:px-12 py-24 mt-28">
        <div className="grid lg:grid-cols-3 gap-20">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="" className="w-10" />
              <h1 className="text-4xl font-semibold">FloraVision.</h1>
            </div>

            <p className="mt-8 text-[#D0D0D0] leading-8 max-w-[350px]">
              From lush indoor greens to vibrant outdoor blooms.
            </p>

            <div className="flex gap-6 mt-10 text-xl">
              <span>FB</span>
              <span>TW</span>
              <span>LI</span>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-8">Quick Link's</h3>

            <div className="flex flex-col gap-5 text-[#D0D0D0]">
              <a href="/">Home</a>
              <a href="/">Type's Of plant's</a>
              <a href="/">Contact</a>
              <a href="/">Privacy</a>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-8">
              For Every Update.
            </h3>

            <div className="flex">
              <input
                type="text"
                placeholder="Enter Email"
                className="bg-transparent border border-[#ffffff30] h-[60px] px-5 outline-none w-full"
              />

              <button className="bg-white text-black px-6 font-semibold">
                SUBSCRIBE
              </button>
            </div>

            <p className="mt-16 text-[#D0D0D0]">
              FloraVision © all right reserve
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}