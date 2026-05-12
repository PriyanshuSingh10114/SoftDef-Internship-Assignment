import {
  FiMenu,
  FiSearch,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi";

export default function Navbar() {
  return (
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
  );
}