import React from "react";
import Navbar from "./navbar";
import Testi from "./testimonials";
import TransitionWrapper from "../utils/TransitionWarper.jsx";

const comics = [
  { title: "Judul 1", reads: 5, author: "Penulis" },
  { title: "Judul 2", reads: 5, author: "Penulis" },
  { title: "Judul 3", reads: 5, author: "Penulis" },
  { title: "Judul 4", reads: 5, author: "Penulis" },
  { title: "Judul 5", reads: 5, author: "Penulis" },
  { title: "Judul 6", reads: 5, author: "Penulis" },
  { title: "Judul 7", reads: 5, author: "Penulis" },
  { title: "Judul 8", reads: 5, author: "Penulis" },
];

const Reader = () => {
  return (
    <TransitionWrapper>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex flex-row justify-between ps-10 pe-15 m-4 ">
          <h2 className="flex text-2xl font-bold">Komik Gratis Pilihan </h2>
          <a href="#" className="text-1xl font-bold text-link ">
            Komik lainya
          </a>
        </div>
        <div className="font-sans max-w-6xl mx-auto p-5">
          <div className="overflow-x-auto">
            <div className="flex flex-row gap-6 p-4">
              {comics.map((comic, index) => (
                <div
                  key={index}
                  className="min-w-[220px] bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex-shrink-0"
                >
                  <div className="bg-gray-100 rounded-t-2xl h-48 flex items-center justify-center">
                    <span className="text-sm font-semibold text-gray-500">
                      Cover Komik
                    </span>
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-bold text-gray-800">
                      {comic.title}
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">
                      {comic.reads} dibaca • {comic.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Testi />
      </div>
    </TransitionWrapper>
  );
};

export default Reader;
