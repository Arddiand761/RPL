import React, { useState } from "react";
import { Menu, X, Search, Sun } from "lucide-react";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
     <nav className="bg-white border-b px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gray-200" />
          <div className="hidden md:flex gap-6 ml-4">
            <a href="/about" className="font-medium text-gray-700 hover:text-orange-500 transition">
              About Us
            </a>
            <a href="/explore" className="font-medium text-gray-700 hover:text-orange-500 transition">
              Explore
            </a>
            <a href="#" className="font-medium text-gray-700 hover:text-orange-500 transition">
              Collection
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search Input */}
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search comics..."
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition w-48 text-sm"
            />
          </div>

          {/* Theme Button */}
          <button className="text-gray-600 hover:text-orange-500 transition">
            <Sun className="w-5 h-5" />
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-4 space-y-2">
          <a href="/about" className="block font-medium text-gray-700 hover:text-orange-500 transition">
            About Us
          </a>
          <a href="#" className="block font-medium text-gray-700 hover:text-orange-500 transition">
            Explore
          </a>
          <a href="#" className="block font-medium text-gray-700 hover:text-orange-500 transition">
            Collection
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
