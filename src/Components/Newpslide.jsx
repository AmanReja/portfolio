// import React from "react";
// import Task from "../assets/new/task.png";
// import Loca from "../assets/new/location.png";
// import Mark from "../assets/new/marker.png";
// import Blog from "../assets/new/blog.png";

// import { Pagination, Autoplay } from "swiper/modules";
// import { SwiperSlide, Swiper } from "swiper/react";
// import "swiper/css/pagination";

// const Newpslide = () => {
//   const project = [
//     {
//       name: "Task Master",
//       img: Task,
//       wlink: "https://task-frontend-three-liard.vercel.app/",
//     },
//     {
//       name: "Location tracker",
//       img: Loca,
//       wlink: "https://tracker-frontend-zeta.vercel.app/",
//     },
//     {
//       name: "Attendance Marker(react native)",
//       img: Mark,
//       wlink: "",
//     },
//     {
//       name: "Blog post(Redux)",
//       img: Blog,
//       wlink: "",
//     },
//   ];
//   return (
//     <div className="flex justify-center">
//       <Swiper
//         modules={[Pagination, Autoplay]}
//         spaceBetween={20}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{ delay: 2000, disableOnInteraction: false }}
//         centeredSlides={true}
//         pagination={{ clickable: true }}
//         className="w-full"
//       >
//         {project.map((card, index) => (
//           <SwiperSlide key={index} className="flex justify-center items-center">
//             <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-[800px]">
//               <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
//                 <img
//                   className="w-full h-full object-cover"
//                   src={card.img}
//                   alt="profile-picture"
//                 />
//               </div>
//               <div className="p-6 text-center">
//                 <h4 className="mb-1 text-xl font-semibold text-slate-800">
//                   {card.name}
//                 </h4>
//                 <p className="text-sm font-semibold text-slate-500 uppercase">
//                   Product Manager
//                 </p>
//               </div>
//               <div className="flex justify-center p-6 pt-2 gap-7">
//                 <button
//                   className="min-w-32 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                   type="button"
//                 >
//                   Visite
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//         <div className="swiper-pagination"></div>
//       </Swiper>
//     </div>
//   );
// };

// export default Newpslide;
