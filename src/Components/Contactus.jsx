import { React, useState, useRef, useContext } from "react";
import "./Skills.css";
import Swal from "sweetalert2";
import Theme from "./Context/Theme";

function Contactus() {
  const value = useContext(Theme);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [load, setLoad] = useState(false);

  console.log(33, name, message, email);

  const receivemail = async (e) => {
    setLoad(true);
    e.preventDefault();
    const new_mail = {
      name: name,
      email: email,
      message: message
    };
    const requestoptions = {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(new_mail)
    };
    const response = await fetch(
      `https://backend-5u2p.onrender.com/sendMail`,
      requestoptions
    );
    const data = await response.json();
    if (data !== null) {
      Swal.fire({
        title: `Thank You ${name}`,
        text: "Message will be delivered to me within a short time",
        icon: "success"
      });
    }
    setLoad(false);
    console.log(data);
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <>
      <div className={""} id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
          <br />
          <h2 className="text-4xl font-bold">Contact</h2>
          <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto ">
            Want to contact me? Choose an option below to contact me.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
          <div>
            <h2 className="text-lg font-bold ">Contact Us</h2>
            <p className="max-w-sm mt-4 mb-4 ">
              Have something to say? We are here to help. Fill up the form or
              send email or call phone.
            </p>
            <div className="flex items-center mt-8 space-x-2 text-dark-600 dark:text-gray-400">
              <span>14th avenue glory road</span>
            </div>
            <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
              <a className="" href="#">
                amanmolla742@gmail.com
              </a>
            </div>
            <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
              <a className="" href="#">
                9749404582
              </a>
            </div>
          </div>
          <div>
            {load ? (
              <div className="flex justify-center items-center">
                <div className="loader"></div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  receivemail(e);
                }}
              >
                <input
                  type="checkbox"
                  id
                  className="hidden"
                  style={{ display: "none" }}
                  name="botcheck"
                />
                <div className="mb-5">
                  <input
                    required
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    ref={nameRef}
                    type="text"
                    placeholder="Full Name"
                    autoComplete="false"
                    className={`w-full px-4 py-3 border-2 rounded-md outline-none bg-gray-900 placeholder:text-white text-white     ${
                      value.theme
                        ? "focus:border-white focus:border-[5px]"
                        : "focus:border-lime-400 focus:border-[5px]"
                    }`}
                    name="name"
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="email_address" className="sr-only">
                    Email Address
                  </label>
                  <input
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    ref={emailRef}
                    id="email_address"
                    type="email"
                    placeholder="Email Address"
                    autoComplete="false"
                    className={`w-full px-4 py-3 border-2 rounded-md outline-none bg-gray-900 placeholder:text-white text-white     ${
                      value.theme
                        ? "focus:border-white focus:border-[5px]"
                        : "focus:border-lime-400 focus:border-[5px]"
                    }`}
                    name="email"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    ref={messageRef}
                    placeholder="Your Message"
                    className={`w-full h-[200px] px-4 py-3 border-2 rounded-md outline-none bg-gray-900 placeholder:text-white text-white     ${
                      value.theme
                        ? "focus:border-white focus:border-[5px]"
                        : "focus:border-lime-400 focus:border-[5px]"
                    }`}
                    name="message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 font-semibold text-white transition-colors bg-lime-400 hover:bg-sky-300 duration-300 "
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
