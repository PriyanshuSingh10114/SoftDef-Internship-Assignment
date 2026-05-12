import oxygenPlant from "../assets/oxygenPlant.png";

export default function OxygenSection() {
  return (
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
            We Have Small And Best O2 Plants
            Collection’s
          </h2>

          <p className="mt-8 text-[#D0D0D0] leading-9 text-lg">
            Oxygen-producing plants release oxygen
            into the atmosphere through photosynthesis
            and help filter toxins.
          </p>

          <button className="mt-10 border px-8 py-3 rounded-lg hover:bg-white hover:text-black transition">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}