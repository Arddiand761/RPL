import { ReceiptPoundSterling } from "lucide-react";
import React from "react";
import Navbar from "./navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-white ">
      <Navbar />
      <div className="max-w-5xl mx-auto py-16 px-6 sm:px-10 lg:px-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-orange-100 p-3 rounded-full">
            <ReceiptPoundSterling className="text-orange-500 w-6 h-6" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
        </div>

        <p className="text-gray-600 leading-relaxed text-lg">
          Selamat datang di platform kami! Kami hadir untuk memberikan layanan
          terbaik dalam dunia digital. <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          faucibus ex sapien, vitae pellentesque sem placerat. In id cursus mi,
          pretium tellus duis convallis. Pulvinar vivamus fringilla lacus nec
          metus bibendum egestas.
          <br />
          <br />
          Kami percaya bahwa inovasi, kualitas, dan kepercayaan adalah kunci
          dari hubungan yang baik dengan para pengguna. Dengan tim yang
          berpengalaman dan berdedikasi, kami siap membantu Anda mencapai tujuan
          Anda.
        </p>

        <div className="text-3xl font-bold mt-10">
          <h3>Follow Us</h3>
        </div>

        <div className="mt-10">
          <a href="#" className="flex flex-row gap-2 text-2xl">
            <img src="/assets/Mail.svg" alt="" />
            pojokkomik.id
          </a>

          <a href="#" className="flex flex-row gap-2 text-2xl mt-5">
            <img src="/assets/Instagram.svg" alt="" />
            pojokkomik@email.com
          </a>
        </div>

        <div className="mt-10 text-2xl font-bold ">
          <h2>Our Address</h2>
        </div>

        <p>Kampus 4 Universitas Ahmad Dahlan </p>
      </div>
    </div>
  );
};

export default About;
