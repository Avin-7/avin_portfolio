import React from "react";
import conf from "../conf/conf";
import { MoveRight, SquareArrowOutUpRight } from "lucide-react";
import Tooltip from "../components/ToolTip";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import parse from "html-react-parser";

const ProjectCard = ({ project }) => {
  const cloudName = conf.cloudinaryCloudName;
  const cld = new Cloudinary({
    cloud: {
      cloudName,
    },
  });

  return (
    <div>
      <div className="grid grid-cols-4 max-lg:grid-cols-1 max-lg:grid-rows-1  place-self-center  text-white px-5 py-10 max-md:py-5 w-[89%] max-md:w-[98%] bg-gradient-to-br from-[#02241344] via-[#224c8844] to-[#51035233] border-2 border-[#0f272bb2] rounded-b-4xl rounded-t-2xl my-6">
        <div className="col-span-2 place-self-center max-lg:place-self-start max-lg:order-2 p-8 max-lg:px-4 max-lg:py-4 max-xs:px-2.5">
          <a
            href={project.url}
            target="_blank"
            className=" text-left break-words
               font-Staatliches mb-2.5 text-3xl max-xl:text-2xl max-sm:text-lg flex items-center gap-1 flex-wrap text-gray-200 hover:text-gray-400 transition ease-linear"
          >
            {parse(project.name)}
            <span>
              <SquareArrowOutUpRight className="size-[18px] max-md:size-[14px]" strokeWidth={2} />
            </span>
          </a>

          <p className="mb-3 text-[16px] max-sm:text-[14px] max-xs:text-[12px] text-gray-400 leading-7 font-Figtree track-wide">
            {project.desc}
          </p>

          <div className=" mb-3.5">
            {project.features.map((feature, index) => (
              <div
                className="flex justify-start items-center gap-1"
                key={index}
              >
                <MoveRight
                  size={18}
                  strokeWidth={3}
                  className=" text-[#ff4800b6] "
                />
                <p className="text-[16px] max-sm:text-[14px] max-xs:text-[12px] font-Figtree text-gray-400 my-0.5 mx-0.5">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          <div className="mb-2.5">
            <div className=" flex flex-row gap-3">
              {project.IconsID.map((id, index) => {
                const names = project.IconsName;
                return (
                  <Tooltip key={index} text={names[index]}>
                    <AdvancedImage
                      className=" size-8 max-md:size-6 object-cover"
                      cldImg={cld.image(id)}
                      plugins={[responsive(), placeholder()]}
                    />
                  </Tooltip>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className="col-span-2 max-lg:order-1 place-content-center place-items-center max-md:h-32"
          id="project_image"
        >
          <AdvancedImage
            className=" h-full w-full rounded-lg object-contain max-md:object-none"
            cldImg={cld.image(project.imageID)}
            plugins={[responsive(), placeholder()]}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
