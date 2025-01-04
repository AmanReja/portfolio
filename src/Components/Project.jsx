import React from "react";
import { data } from "react-router-dom";

function Project() {
  const projects = [
    {
      heading: "Tic Tac Toe Project",
      details:
        "A clean and intuitive design that makes it easy for players of all ages to jump right in"
    },
    {
      heading: "website",
      details:
        "I have made a Game downloader website With a user-friendly interface and a diverse library."
    },
    {
      heading: "Recipe Checker Website",
      details:
        " This innovative platform helps you easily find and verify recipes based on the ingredients you have on hand"
    },
    {
      heading: "To-Do List App",
      details:
        "A clean, intuitive design that makes adding, editing, deleting and managing tasks a breeze."
    },
    {
      heading: "MCQ Quiz Project",
      details:
        "In this project a user can register his credentials and login to the website to give the exam."
    },
    { heading: "Myntra website clone", details: "A clone wesite like myntra" },
    {
      heading: "MERN stack item shop ",
      details:
        "In this project Admin can login to the website and upload items and user can buy items by login to the website "
    }
  ];
  return (
    <>
      {" "}
      <div className="w-[100%] h-auto items-center  justify-between sm:px-[80px] p-0 shadow-inner flex flex-col relative top-[80px]">
        {projects.map((data) => (
          <>
            <h1 className="text-3xl uppercase ">{data.heading}</h1>
            <p>{data.details}</p>
          </>
        ))}
      </div>
    </>
  );
}

export default Project;
