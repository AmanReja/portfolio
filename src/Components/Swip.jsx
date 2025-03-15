import React from "react";
import Srk from "../assets/images/srk.jpg";

import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../App.css";
import "swiper/css/pagination";

const Swip = () => {
  const cards = [
    {
      name: "Shahrukh khan",
      profile: "Actor",
      image: Srk,
      description:
        "I recently worked with this amazing developer who created a business website for me. I must say, the website exceeded my expectations! The design is sleek, modern, and incredibly user-friendly. It truly reflects my brand and provides a seamless experience for everyone visiting. The attention to detail and the technical execution were spot on. I’m really happy with the final result and would highly recommend this developer to anyone looking for quality work!",
    },
    {
      name: "Bill Gates",
      profile: "Engineer",
      image: "https://wallpapercave.com/wp/wp12612747.jpg",
      description:
        "I had the pleasure of working with this talented developer who built a React Native app for me. The app was designed with great attention to detail, providing a smooth and efficient user experience across both iOS and Android platforms. I was impressed with the app’s functionality, performance, and how well it aligns with our goals. The developer demonstrated excellent technical skills, and I’m pleased with the result. It’s a solution that will serve us well moving forward.",
    },
    {
      name: "Elon Musk",
      profile: "Software Developer",
      image:
        "https://wallpapers.com/images/high/elon-musk-background-bqss7x66859br5gr.webp",
      description:
        "I recently collaborated with this skilled developer on a location tracking system built with Socket.IO and the MERN stack. The system is highly efficient, real-time, and robust—exactly what we needed. The developer’s ability to implement cutting-edge technology while ensuring smooth performance and scalability impressed me. It’s a great tool that will help us track and manage data more effectively. I’m very pleased with the results and would definitely recommend this developer for any advanced tech projects.",
    },
  ];
  return (
    <>
      <div className="flex justify-center  m-b-60px">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          centeredSlides={true}
          pagination={{ clickable: true }}
          className="max-w-[500px] w-[1000px] "
        >
          {cards.map((card) => (
            <SwiperSlide className="flex w-full p-4 max-w-lg flex-col rounded-lg  shadow-sm border border-slate-200 my-6">
              <div className="flex items-center gap-4 text-slate-800">
                <img
                  src={card.image}
                  alt="Tania Andrew"
                  className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center"
                />
                <div className="flex w-full flex-col">
                  <div className="flex items-center justify-between">
                    <h5 className="text-xl font-semibold ">{card.name}</h5>
                  </div>
                  <p className="text-xs uppercase font-bold text-slate-500 mt-0.5">
                    {card.profile}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-base text-gray-800 font-light leading-normal">
                  {card.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </>
  );
};

export default Swip;
