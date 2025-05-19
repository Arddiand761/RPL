import React, { useState } from "react";
import Navbar from "./navbar";

const Explore = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleFocus = () => setIsOpen(true);
  const handleBlur = () => setTimeout(() => setIsOpen(false), 150); // delay agar klik item sempat diproses

  return (
      <div>
            <Navbar/>
       
    <div className="flex justify-center items-center min-h-screen bg-white">
      
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
            {/* Render hasil pencarian di sini */}
          </div>
        )}
      </div>
    </div>
     </div>
  );
};

export default Explore;
