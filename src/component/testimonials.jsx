import React from "react";

const testimonials = [
  { nama: "Arddian", content: "Bagus sekali! Sangat membantu.", rating: 5 },
  { nama: "Nadia", content: "Desainnya keren dan mudah dipakai.", rating: 4 },
  { nama: "Rizky", content: "Fitur lengkap dan responsif.", rating: 5 },
  { nama: "Sinta", content: "Suka tampilannya, modern dan clean.", rating: 5 },
];

const Testi = () => {
  return (
    <div className="mt-20 w-full">
      <h1 className="flex justify-center items-center text-2xl font-bold font-sans px-6 ms-6 mb-6">Testimoni</h1>
      <div className="font-sans max-w-6xl mx-auto px-6">
        <div className="overflow-x-auto">
          <div className="flex flex-row gap-6 p-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[240px] bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex-shrink-0"
              >
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-1">
                      {testimonial.nama}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {testimonial.content}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${
                          i < testimonial.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.025 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testi;
