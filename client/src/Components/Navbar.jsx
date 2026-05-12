import {
  FiMenu,
  FiSearch,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-8 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="" className="w-10" />

          <h1 className="text-2xl font-semibold text-white">
            FloraVision.
          </h1>
        </div>

        {/* Nav Links */}
        <ul className="hidden lg:flex items-center gap-12 text-[15px] text-[#E5E5E5]">

          <li className="cursor-pointer hover:text-white transition">
            Home
          </li>

          <li className="cursor-pointer hover:text-white transition">
            Plant Type
          </li>

          <li className="cursor-pointer hover:text-white transition">
            More
          </li>

          <li className="cursor-pointer hover:text-white transition">
            Contact
          </li>

        </ul>

        {/* Icons */}
        <div className="flex items-center gap-5 text-xl text-white">

          <FiSearch className="cursor-pointer" />

          <FiShoppingBag className="cursor-pointer" />

          <FiUser className="cursor-pointer" />

          <FiMenu className="lg:hidden cursor-pointer" />

        </div>

      </div>
    </nav>
  );
}