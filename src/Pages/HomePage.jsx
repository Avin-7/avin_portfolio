import React from "react";

const HomePage = () => {
  return (
    <>
      <div className=" bg-black py-5" id="home">
        <div className="relative grid place-self-center text-white p-4 py-18 w-full">
          <div className="motion-translate-x-in-0 motion-translate-y-in-0 motion-translate-x-out-100 motion-translate-y-out-50 motion-delay-150 rounded-full absolute top-[15%] left-0 size-32 max-lg:size-24 bg-sky-600 blur-[84px] overflow-hidden">
            .
          </div>
          <div className="motion-blur-in motion-delay-100 grid place-items-center max-md:place-items-start place-content-center h-96 px-10 my-14 ">
            <h1 className="font-Staatliches tracking-wide text-8xl max-md:text-7xl mb-2 ">
              Avin Dcosta
            </h1>
            <p className="text-zinc-200 mb-1 font-Barlow font-thin tracking-wide ">
              Fullstack MERN Developer
            </p>
          </div>
          <div className="motion-translate-x-in-150 motion-translate-y-in-50 -motion-translate-x-out-150 -motion-translate-y-out-50 motion-delay-150 rounded-full absolute bottom-[15%] right-[5%] size-36  max-lg:size-24  bg-red-700 blur-[84px] overflow-hidden">
            .
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
