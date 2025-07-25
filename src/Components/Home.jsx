import { React, useContext, useEffect, useState } from "react";
import Aman from "../assets/images/Aman6.jpg";
import Theme from "./Context/Theme";
import js from "../assets/logo/js.png";
import react from "../assets/logo/react.png";
import express from "../assets/logo/express.png";
import html from "../assets/logo/html.png";
import css from "../assets/logo/css.png";
import node from "../assets/logo/nodejs.png";
import "./Home.css";
import game from "../assets/Project images/game.png";
import imbs from "../assets/Project images/imbs.png";
import book from "../assets/Project images/book.png";
import myntra from "../assets/Project images/myntra.png";
import recipe from "../assets/Project images/recipe.png";
import tictac from "../assets/Project images/tictac.png";
import todo from "../assets/Project images/todo.png";
import cal from "../assets/Project images/cal.png";
import text from "../assets/Project images/text.png";
import wal from "../assets/Project images/wal.png";
import chat from "../assets/Project images/chat.png";
import Task from "../assets/new/task.png";
import Loca from "../assets/new/location.png";
import Mark from "../assets/new/marker.png";
import Blog from "../assets/new/blog.png";
import { Link, NavLink } from "react-router-dom";
import cv from "../assets/images/cv.pdf";
import resume from "../assets/images/Amancv.pdf";
import travel from "../assets/Project images/travel.png";
import Swip from "./Swip";

function Home() {
  const value = useContext(Theme);
  const [load, setLoad] = useState(false);

  const handelload = () => {
    setLoad(true);
  };
  console.log(55, load);
  const project = [
    {
      name: "Book Shop",
      img: book,
      wlink: "https://front-book-mu.vercel.app/",
    },
    {
      name: "Wallpaper Downloader",
      img: wal,
      wlink: "https://wallpaperapp-w8f3.vercel.app/",
    },
    {
      name: "Travelia(working)",
      img: travel,
      wlink: "https://travel-frontend-delta-steel.vercel.app/",
    },
    {
      name: "Gaming website",
      img: game,
      wlink: "https://gaming-website-one.vercel.app/",
    },
    {
      name: "myntra Shope",
      img: myntra,
      wlink: "https://dvsdvsdb.vercel.app/",
    },
    {
      name: "Get recipes",
      img: recipe,
      wlink: "https://recipe-api-lyart.vercel.app/",
    },
    {
      name: "Tictacto",
      img: tictac,
      wlink: "https://tic-tac-to-xi.vercel.app/",
    },
    {
      name: "Todo List",
      img: todo,
      wlink: "https://todu-list-ten.vercel.app/",
    },
    {
      name: "Calculator",
      img: cal,
      wlink: "https://calculator2-0-vert.vercel.app/",
    },
    {
      name: "Text converter",
      img: text,
      wlink: "https://code-lac-eight.vercel.app/",
    },

    {
      name: "Chat application",
      img: chat,
      wlink: "https://chat-front-i6td.vercel.app/",
    },
    {
      name: "Task Master",
      img: Task,
      wlink: "https://task-frontend-three-liard.vercel.app/",
    },
    {
      name: "Location tracker",
      img: Loca,
      wlink: "https://tracker-frontend-zeta.vercel.app/",
    },
    // {
    //   name: "Attendance Marker(react native)",
    //   img: Mark,
    //   wlink: "",
    // },
    {
      name: "Blog post(Redux)",
      img: Blog,
      wlink: "",
    },
  ];

  const Skills = [
    { name: "Nodejs", color: "#bfff00", img: node, percent: 70, str: 132.6 },
    { name: "Reactjs", color: "#29cce5", img: react, percent: 80, str: 88.4 },

    {
      name: "Expressjs",
      color: "#7f00ff",
      img: express,
      percent: 82,
      str: 79.56,
    },
  ];
  const [animatedPercents, setAnimatedPercents] = useState(
    Skills.map(() => 0) // Initialize an array of 0s for each skill
  );

  useEffect(() => {
    setLoad(false);
    const timeout = setTimeout(() => {
      setLoad(true); // Trigger the load state after a short delay
    }, 50);

    // Animate each skill's percentage from 0 to the target percent
    Skills.forEach((skill, index) => {
      let currentPercent = 0;
      const interval = setInterval(() => {
        if (currentPercent < skill.percent) {
          currentPercent += 1;
          setAnimatedPercents((prev) => {
            const newPercents = [...prev];
            newPercents[index] = currentPercent;
            return newPercents;
          });
        } else {
          clearInterval(interval);
        }
      }, 20); // Adjust timing for smoother animation

      return () => clearInterval(interval); // Cleanup interval
    });
    return () => clearTimeout(timeout);
  }, []);

  const Downloadcv = () => {};

  return (
    <>
      <div className="flex justify-center relative w-[100%]">
        <div
          className={
            !value.theme
              ? " main-container px-[50px] w-[80%] h-[400px] relative rounded-[5px] top-[97px] shadow-2xl z-1 bg-white"
              : "  main-container px-[50px] w-[80%] h-[400px] relative rounded-[5px] top-[97px] shadow-2xl z-1 bg-black"
          }
        >
          <img
            className="rounded-full w-[60px] object-cover h-[60px]"
            src={Aman}
            alt=""
          />
          <div className="flex flex-col gap-[20px] sm:text-left text-center">
            <h1 className="text-3xl absolute font-medium top-[15%]  ">
              I am a,
            </h1>
            <h1 className="sm:text-5xl text-[30px] sm:top-0 top-[50px] font-medium  sm:left-[100px] relative left-[20px] sm:p-0 pb-[50px]">
              Mernstack developer
            </h1>
            <div
              className={
                !value.theme
                  ? "anim-container bg-white duration-0 "
                  : "anim-container bg-black duration-0 "
              }
            ></div>

            <button className="bg-lime-400 hover:bg-violet-600 w-[150px] relative sm:block  rounded h-[40px]">
              <a href={resume} download="resume">
                {" "}
                Download cv{" "}
              </a>
            </button>

            <h2 className="font-thin text-1xl relative sm:top-[60px]">
              Dynamic and detail-oriented MERN developer. Implementing
              user-friendly web applications. Proficient in HTML, CSS,
              JavaScript, and modern frameworks like React. Passionate about
              creating responsive and accessible interfaces that enhance user
              experience. Strong problem-solving skills and a collaborative
              approach to working with cross-functional teams. Database
              management server creation with mongodb. Committed to staying
              updated with the latest industry trends and technologies to
              deliver innovative solutions.
            </h2>
          </div>
        </div>
      </div>

      <div className=" box-2-container flex sm:h-[400px]  items-center justify-center    ">
        {Skills.map((data, index) => (
          <>
            <div className="relative w-[160px] h-[160px] left-[180px] ">
              <div className="outer flex justify-center items-center rounded-full  h-full  w-full    ">
                <div className="inner flex relative w-[120px]  h-[120px]  items-center justify-center  rounded-full">
                  <h1
                    className={`number data-percent z-10${
                      value.theme ? "text-black" : "text-white"
                    } relative top-[150px] text-4xl font-thin transition-all duration-1000`}
                  >
                    {load ? animatedPercents[index] : 0}{" "}
                  </h1>
                </div>
              </div>
            </div>

            <svg
              className="relative right-[-20px] top-[0px]"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
            >
              <circle
                // style={{ animation: `aman 1s linear forwards` }}
                cx="80"
                cy="80"
                r="70"
                stroke={data.color}
                stroke-linecap="round"
                strokeDasharray={442} // Full circle length
                strokeDashoffset={load ? data.str : 442} // Start from 0% visibility
                className="transition-all duration-1000"
              />
            </svg>

            <img
              className="data-img w-[100px] h-[100px] object-cover relative top-[0px] left-[-110px]"
              src={data.img}
              alt=""
            />
          </>
        ))}
      </div>
      {/* <div className=" box-container w-[100%] bg-slate-500 h-[920px] absolute top-[110%] "></div> */}
      <div
        id="project"
        className="  w-[100%] flex flex-wrap gap-[50px] px-[20px]"
      >
        {project.map((p) => (
          <div className="image-box z-10 shadow-2xl  p-[50px]  hover:translate-y-[12px] duration-300 transition-all">
            <img
              className=" img-box w-[350px]  h-[350px ] object-cover"
              src={p.img}
              alt=""
            />

            <Link to={p.wlink} target="_blank">
              <h1 className="heading font-thin text-center text-2xl relative top-[100px] opacity-0 transition-all duration-300 cursor-pointer">
                {p.name}
              </h1>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center flex-col pt-[80px] uppercase ">
        <h1 className="text-3xl">What clints say about me</h1>
        <p className="text-center sm:px-[400px] px-0 pt-[10px]">
          I had the opportunity to work with some incredible clients, including
          Shah Rukh Khan , Elon Musk, and Bill Gates. They all gave me great
          feedback
        </p>
      </div>

      <div className="h-[500px]">
        {" "}
        <Swip></Swip>
      </div>
    </>
  );
}

export default Home;
