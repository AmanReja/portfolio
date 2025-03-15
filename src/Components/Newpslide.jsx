import React from "react";

import { Pagination, Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css/pagination";

const Newpslide = () => {
  const project = [
    {
      name: "Book Shop",
      img: "",
      wlink: "https://front-book-mu.vercel.app/",
    },
    {
      name: "Wallpaper Downloader",
      img: "",
      wlink: "https://wallpaperapp-w8f3.vercel.app/",
    },
    {
      name: "Travelia(working)",
      img: "",
      wlink: "https://travel-frontend-delta-steel.vercel.app/",
    },
  ];
  return (
    <div>
      <Swiper>
        {project.map((data) => (
          <SwiperSlide className="bg-gray-900 h-screen flex flex-col justify-center items-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg p-8">
              <h1 className="text-4xl font-bold text-white mb-4">
                Tailwind CSS
              </h1>
              <p className="text-lg text-white mb-8">
                A utility-first CSS framework for rapidly building custom
                designs.
              </p>
              <a
                href="#"
                className="bg-white hover:bg-gray-200 text-purple-600 font-bold py-2 px-4 rounded"
              >
                Get started
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Newpslide;
