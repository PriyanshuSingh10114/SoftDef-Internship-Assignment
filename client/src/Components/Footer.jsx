export default function Footer() {
  return (
    <footer className="max-w-[1280px] mx-auto px-6 lg:px-12 py-24 mt-28">
      <div className="grid lg:grid-cols-3 gap-20">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt=""
              className="w-10"
            />

            <h1 className="text-4xl font-semibold">
              FloraVision.
            </h1>
          </div>

          <p className="mt-8 text-[#D0D0D0] leading-8 max-w-[350px]">
            From lush indoor greens to vibrant outdoor
            blooms, our plants are crafted to elevate
            your living environment.
          </p>

          <div className="flex gap-6 mt-10 text-xl">
            <span>FB</span>
            <span>TW</span>
            <span>LI</span>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-semibold mb-8">
            Quick Link's
          </h3>

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
  );
}