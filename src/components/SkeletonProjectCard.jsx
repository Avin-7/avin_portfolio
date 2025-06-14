import React from "react";

const SkeletonProjectCard = () => {
  return (
    <div className="bg-black">
      <div className=" animate-pulse grid grid-cols-4 max-md:grid-cols-2 max-md:grid-rows-2 place-self-center  bg-zinc-950 px-5 py-10 w-[80%] gap-6 rounded-xl">
        <div className="col-span-2 max-md:order-2 rounded-xl px-18 max-lg:px-10 py-12 max-lg:py-8 bg-zinc-800">
          <div className="mb-2.5 ">
            <h1 className="bg-zinc-950 p-4 mb-2  rouned-xl"></h1>
            <h1 className="bg-zinc-950 rouned-xl p-2 mb-2 w-[75%]"></h1>
            <h1 className="bg-zinc-950 rouned-xl p-1.5 w-[50%]"></h1>
          </div>
        </div>
        <div className="col-span-2 max-md:order-1 bg-zinc-800 rounded-xl place-content-center place-items-center">
          <div className="bg-zinc-950 rounded-xl h-[80%] w-[90%] p-2">.</div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonProjectCard;
