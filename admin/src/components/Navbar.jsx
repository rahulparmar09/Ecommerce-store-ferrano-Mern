import React from "react";
import { FiLogOut } from "react-icons/fi";

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center justify-between py-3 px-[4%] bg-gradient-to-r from-pink-100 to-pink-50 border-b border-pink-200 shadow-md">
      
      {/* LEFT - Logo + Admin */}
      <div className="flex items-center gap-4">
        <img
          className="w-[120px] sm:w-[140px]"
          src="https://demo.gloriathemes.com/ferrano/demo/wp-content/uploads/2026/02/brand.svg"
          alt="admin_logo"
        />

        {/* Admin Badge */}
        <span className="text-xs bg-pink-200 text-pink-800 px-3 py-1 rounded-full font-medium">
          Admin Panel
        </span>
      </div>

      {/* RIGHT - Logout */}
      <button
        onClick={() => setToken("")}
        className="flex items-center gap-2 bg-pink-500 text-white px-5 py-2 rounded-full text-xs sm:text-sm hover:bg-pink-600 transition-all shadow-md"
      >
        <FiLogOut className="text-lg" />
        Logout
      </button>

    </div>
  );
};

export default Navbar;