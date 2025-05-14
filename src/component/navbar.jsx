import React, { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");

  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b bg-white">
      <div className="flex items-center gap-8">
        <div className="w-10 h-10 rounded-full bg-gray-200" />
        <a href="#" className="font-semibold">
          About Us
        </a>
        <a href="#" className="font-semibold">
          Explore
        </a>
        <a href="#" className="font-semibold">
          Collection
        </a>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search comics..."
            className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition w-48"
          />
          <span className="material-icons absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">
          </span>
        </div>
        <button>
          <span className="material-icons">light_mode</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
