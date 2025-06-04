import React, { useState } from "react";
import Navbar from "./navbar";

const Explore = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleFocus = () => setIsOpen(true);
  const handleBlur = () => setTimeout(() => setIsOpen(false), 150);

  const genres = ['Fantasy', 'Sci-fi', 'Comedy', 'Romance', 'Action', 'Slice Of Life', 'Horror'];
  const creators = ['Arddi', 'Nadya', 'Rendy', 'Fairus', 'Diaz'];

  return (
      <div>
        <Navbar />

        <div className="bg-white min-h-screen p-6">
          {/* Search Box */}
          <div className="flex justify-center mt-12 mb-10">
            <div className="relative w-full max-w-md">
              <div className="flex items-center bg-red-50 rounded-xl shadow-md px-4 py-2">
                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="bg-transparent outline-none flex-grow text-gray-800"
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1117 9a7.5 7.5 0 01-.35 7.65z"
                  />
                </svg>
              </div>

              {/* Dropdown hasil pencarian */}
              {isOpen && search && (
                  <div className="absolute top-full mt-2 left-0 w-full bg-white shadow-md rounded-xl p-4 z-10">
                    <p className="text-sm text-gray-600">
                      Menampilkan hasil untuk: <strong>{search}</strong>
                    </p>
                  </div>
              )}
            </div>
          </div>

          {/* Genre Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 mt-20">
            {genres.map((genre, index) => (
                <button
                    key={index}
                    className="bg-[#ec6e4c] text-white px-4 py-2 rounded-md hover:bg-[#d85c3d] transition"
                >
                  {genre}
                </button>
            ))}
          </div>

          {/* Our Creator This Week */}
          <h2 className="text-xl font-semibold mb-4 text-center">Our Creator This Week</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {creators.map((name, index) => (
                <div
                    key={index}
                    className="bg-[#ec6e4c] text-white p-4 rounded-md flex items-start gap-4"
                >
                  <div className="text-2xl font-bold">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <div className="font-semibold">{name}</div>
                    <div className="text-sm">Penulis</div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Explore;
