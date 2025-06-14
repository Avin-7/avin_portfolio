import React, { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [showSmallScreenNav, setShowSmallScreenNav] = useState(false);
  return (
    <div>
      <div className=" fixed top-0 w-full bg-transparent grid place-items-end  px-10 py-6 backdrop-blur-2xl z-[999] ">
        <div className=" max-lg:hidden text-gray-200">
          <a
            href="#home"
            className="mx-4.5 text-lg font-Staatliches tracking-wider hover:text-gray-400 transition-colors ease-in-out"
          >
            Home
          </a>
          <a
            href="#projects"
            className="mx-4.5 text-lg font-Staatliches tracking-wider hover:text-gray-400 transition-colors ease-in-out"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="mx-4.5 text-lg font-Staatliches tracking-wider hover:text-gray-400 transition-colors ease-in-out"
          >
            Contact
          </a>
        </div>
        <div className="hidden max-lg:block">
          <Menu
            className=" text-white"
            onClick={() => setShowSmallScreenNav(!showSmallScreenNav)}
          />
        </div>
        {showSmallScreenNav && (
          <div className="hidden max-lg:block min-w-full mt-3.5">
            <div className=" text-gray-200 p-4 rounded-b-xl flex flex-col bg-zinc-950">
              <a
                href="#home"
                className="mx-4.5 text-lg font-Staatliches tracking-wider hover:text-gray-400 transition-colors ease-in-out"
              >
                Home
              </a>
              <a
                href="#projects"
                className="mx-4.5 text-lg font-Staatliches tracking-wider hover:text-gray-400 transition-colors ease-in-out"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="mx-4.5 text-lg font-Staatliches tracking-wider hover:text-gray-400 transition-colors ease-in-out"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
