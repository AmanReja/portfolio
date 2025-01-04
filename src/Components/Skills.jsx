import { React, useState, useEffect, useContext } from "react";
import js from "../assets/logo/js.png";
import react from "../assets/logo/react.png";
import express from "../assets/logo/express.png";
import html from "../assets/logo/html.png";
import css from "../assets/logo/css.png";
import node from "../assets/logo/nodejs.png";
import tailwind from "../assets/logo/tailwind.png";
import Mongodb from "../assets/logo/Mongo.png";
import mongoosejs from "../assets/logo/Mongoose.png";
import "./Skills.css";
import Theme from "./Context/Theme";

function Skills() {
  const value = useContext(Theme);
  const [load, setLoad] = useState(false);
  const Skill = [
    { name: "Nodejs", color: "#bfff00", img: node, percent: 70, str: 70 },
    { name: "Reactjs", color: "#29cce5", img: react, percent: 80, str: 80 },
    {
      name: "Expressjs",
      color: "#7f00ff",
      img: express,
      percent: 82,
      str: 82
    },
    {
      name: "Html",
      color: "#fc0349",
      img: html,
      percent: 98,
      str: 98
    },
    {
      name: "Css",
      color: "#164ff7",
      img: css,
      percent: 95,
      str: 95
    },
    {
      name: "Javascript",
      color: "#f7e816",
      img: js,
      percent: 86,
      str: 86
    },
    {
      name: "Tailwindcss",
      color: "#16f7f7",
      img: tailwind,
      percent: 97,
      str: 97
    },
    {
      name: "Mongodb",
      color: "#00f74e",
      img: Mongodb,
      percent: 60,
      str: 60
    },
    {
      name: "Mongoosejs",
      color: "#5c1807",
      img: mongoosejs,
      percent: 72,
      str: 72
    }
  ];
  const [animatedPercents, setAnimatedPercents] = useState(
    Skill.map(() => 0) // Initialize an array of 0s for each skill
  );

  useEffect(() => {
    setLoad(false);
    const time = setTimeout(() => {
      setLoad(true);
    }, 20);
    Skill.forEach((s, index) => {
      let currentPercent = 0;
      const interval = setInterval(() => {
        if (currentPercent < s.percent) {
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

    return () => clearTimeout(time);
  }, []);
  return (
    <>
      {" "}
      <p
        className={`text-center text-5xl translate-y-[122px] uppercase w-[100% ] relative left-[-20px] font-semibold`}
      >
        Skills
      </p>
      <div className="sm:h-auto sm:pb-[200px] h-auto pb-[300px] relative sm:top-0 top-[341px] sm:left-0 left-[-173px] px-[80px]">
        {Skill.map((data, index) => (
          <div className="w-[100%] h-[60px]  sm:left-0 relative sm:top-[200px] sm:px-[500px]  ">
            <div className="mb-7 relative sm:left-0 left-0 sm:top-0 top-0">
              <div className="flex justify-between py-1">
                <span className="name-box text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                  {data.name}
                </span>
                <span className="percent-box text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                  {load ? animatedPercents[index] : 0}%
                </span>
              </div>
              <svg
                className="rc-progress-line"
                viewBox="0 0 100 1"
                preserveAspectRatio="none"
              >
                <path
                  className="transition-all duration-700"
                  d="M 0.5,0.5
   L 99.5,0.5"
                  strokeLinecap="round"
                  stroke={"#D9D9D9"}
                  strokeWidth={1}
                  fillOpacity={1}
                  strokeDasharray={150}
                  strokeDashoffset={0}
                />
                <path
                  className="transition-all duration-700"
                  d="M 0.5,0.5
   L 99.5,0.5"
                  strokeLinecap="round"
                  stroke={data.color}
                  strokeWidth={1}
                  fillOpacity={1}
                  strokeDasharray={load ? data.str : 1} // Full circle length
                  strokeDashoffset={0}
                ></path>
              </svg>
            </div>
            <img
              className=" relative sm:top-[-60px] w-[40px]  h-[40px] sm:right-[60px] right-[-121px] top-[-210px] object-cover"
              src={data.img}
              alt=""
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
