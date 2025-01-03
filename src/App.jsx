import { React, useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import "./App.css";
import Theme from "./Components/Context/Theme";
import { Outlet } from "react-router-dom";
import Contactus from "./Components/Contactus";
import Footer from "./Components/Footer";

function App() {
  const [theme, setTheme] = useState(false);
  const themeHandel = () => {
    setTheme((prev) => !prev);

    if (theme) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "White";
    }
  };
  console.log(33, theme);
  return (
    <>
      <Theme.Provider value={{ theme, setTheme }}>
        <Navbar themeHandel={themeHandel}></Navbar>
        <Outlet>
          <Home></Home>
          <Contactus></Contactus>
        </Outlet>
        <Footer />
      </Theme.Provider>
    </>
  );
}

export default App;
