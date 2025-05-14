import React from "react";
import Navbar from "./navbar";

const comics = [
  { title: "Judul Komik", reads: 5, author: "Penulis" },
  { title: "Judul Komik", reads: 5, author: "Penulis" },
  { title: "Judul Komik", reads: 5, author: "Penulis" },
  { title: "Judul Komik", reads: 5, author: "Penulis" },
];

const testimonials = [{}, {}, {}];

const Reader = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-5xl mx-auto py-8 px-4">
        {/* Komik Gratis Pilihan */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold text-xl md:text-2xl">
              Komik Gratis Pilihan
            </span>
            <a
              href="#"
              className="text-red-500 font-semibold text-base hover:underline transition"
            >
              Lihat Semua
            </a>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300">
            {comics.map((comic, idx) => (
              <div
                key={idx}
                className="min-w-[180px] flex-shrink-0 bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="h-48 bg-orange-400 rounded-t-xl flex items-center justify-center text-black font-bold text-lg mb-2">
                  Cover Komik
                </div>
                <div className="px-3 pb-3">
                  <div className="font-semibold text-base mb-1">
                    {comic.title}
                  </div>
                  <div className="text-xs text-gray-500 flex items-center gap-1">
                    <span role="img" aria-label="eye">
                      👁️
                    </span>
                    {comic.reads} dibaca • {comic.author}
                  </div>
                </div>
              </div>
            ))}
            <button className="ml-2 px-3 py-2 bg-white border border-gray-300 rounded-full self-center shadow hover:bg-gray-100 transition">
              <span className="text-xl">{">"}</span>
            </button>
          </div>
        </div>

        {/* Kata Mereka Tentang Seri Ini */}
        <div className="bg-white border rounded-xl p-6 shadow">
          <div className="font-bold text-xl mb-4">
            Kata Mereka Tentang Seri Ini
          </div>
          <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300">
            {testimonials.map((_, idx) => (
              <div
                key={idx}
                className="min-w-[320px] h-32 bg-orange-300 rounded-lg flex items-center justify-center text-black font-semibold text-lg shadow hover:shadow-lg transition"
              >
                Testimoni
              </div>
            ))}
            <button className="ml-2 px-3 py-2 bg-white border border-gray-300 rounded-full self-center shadow hover:bg-gray-100 transition">
              <span className="text-xl">{">"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reader;
