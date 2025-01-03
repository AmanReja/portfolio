import { React, useState, useContext } from "react";
import Theme from "./Context/Theme";
import { Link } from "react-router-dom";

function Navbar({ themeHandel }) {
  const value = useContext(Theme);
  const [open, setOpen] = useState(true);
  const handelopen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <nav
        className={
          !value.theme
            ? "bg-white shadow-2xl rounded fixed w-full z-20 top-0 start-0 "
            : "bg-black shadow-2xl rounded fixed w-full z-20 top-0 start-0"
        }
      >
        <label className="inline-flex items-center cursor-pointer absolute top-[22px] right-[100px]">
          <input
            onClick={() => {
              themeHandel();
            }}
            type="checkbox"
            defaultValue
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
        </label>
        <div
          className={
            !value.theme
              ? "max-w-screen-xl flex flex-wrap rounded-[10px] items-center w-[500px] bg-white shadow-2xl justify-center mx-auto p-4"
              : "max-w-screen-xl flex flex-wrap rounded-[10px] items-center w-[500px] bg-black shadow-2xl justify-center mx-auto p-4"
          }
        >
          <div
            onClick={handelopen}
            className={`bg-lime-400 py-[3px] px-[2px] rounded flex flex-col  h-[30px] transition-all 
             gap[9px] left-[-199px] relative items-center justify-between`}
          >
            <div
              className={
                open
                  ? "bg-white w-[30px] h-[2px]  duration-300"
                  : "bg-white w-[30px] h-[2px] rotate-45 relative top-[15px]  duration-300"
              }
            ></div>
            <div
              className={open ? "bg-white w-[30px] h-[2px]" : "invisible"}
            ></div>
            <div
              className={
                open
                  ? "bg-white w-[30px] h-[2px]  duration-300"
                  : "bg-white w-[30px] h-[2px] -rotate-45 relative bottom-[15px] duration-300"
              }
            ></div>
          </div>

          <div
            className={`items-center justify-between ${
              open ? "hidden" : ""
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
                <Link
                  onClick={() => {
                    setOpen(true);
                  }}
                  to="/"
                  className={`block py-2 px-3  hover:text-violet-600 duration-300 ${
                    !value.theme ? `text-black` : `text-white`
                  }`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setOpen(true);
                  }}
                  to="/skills"
                  className={`block py-2 px-3 hover:text-lime-400 duration-300 ${
                    !value.theme ? `text-black` : `text-white`
                  }`}
                >
                  Skills
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3  hover:text-red-500 duration-300 ${
                    !value.theme ? `text-black` : `text-white`
                  }`}
                >
                  Projectes
                </a>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setOpen(true);
                  }}
                  to="/contactus"
                  href="#"
                  className={`block py-2 px-3  hover:text-sky-600 duration-300 ${
                    !value.theme ? `text-black` : `text-white`
                  }`}
                >
                  Contact me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
