import React from "react";
import mail from "../assets/mail.svg";
import linkedIn from "../assets/linkedIn.svg";
import github from "../assets/github.svg";
import instaLogo from "../assets/instaLogo.svg";

const ContactPage = () => {
  return (
    <>
      <div className=" bg-black" id="contact">
        <div className="grid place-self-center text-white px-4 py-10 w-11/12 ">
          <div className=" px-18 py-12 max-lg:px-10 max-lg:py-8">
            <h1 className="text-gray-300 font-Staatliches text-3xl mb-14 pl-10 max-lg:text-center max-lg:pl-0">
              Reach me out
            </h1>
            <div className=" grid grid-cols-8">
              <a
                href="mailto:avinjoy51@gmail.com"
                target="_blank"
                className=" col-span-2 place-self-center px-2 py-2 w-10 rounded-full hover:bg-neutral-800 transition-colors ease-linear"
              >
                <img src={mail} className=" size-6" alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/avin-joy-dcosta-b3b5b7253/"
                target="_blank"
                className="col-span-2 place-self-center  px-2 py-2 w-10 rounded-full  hover:bg-neutral-800 transition-colors ease-linear"
              >
                <img src={linkedIn} className=" size-6" alt="" />
              </a>
              <a
                href="https://github.com/Avin-7"
                target="_blank"
                className="col-span-2 place-self-center  px-2 py-2 w-10 rounded-full  hover:bg-neutral-800 transition-colors ease-linear"
              >
                <img src={github} className=" size-6" alt="" />
              </a>
              <a
                href="https://www.instagram.com/avin.decosta?igsh=MWxqMHZ6Z3BnZTE3ag=="
                target="_blank"
                className="col-span-2 place-self-center  px-2 py-2 w-10 rounded-full  hover:bg-neutral-800 transition-colors ease-linear"
              >
                <img src={instaLogo} className=" size-6" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
