import React from "react";

import service from "../appwrite/config.js";

import { useQuery } from "@tanstack/react-query";
import ProjectCard from "../components/ProjectCard";
import SkeletonProjectCard from "../components/SkeletonProjectCard.jsx";
import toast from "react-hot-toast";

const ProjectsPage = () => {
  const getProjects = async () => {
    try {
      const res = await service.getMyProjects();
      const data = res.documents;
      data.reverse();
      return data;
    } catch (error) {
      console.log("Error in ProjectsPage :: getProjects :: ", error);
    }
  };

  const {
    data: projects,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  if (isLoading) {
    return <SkeletonProjectCard />;
  }

  if (error) {
    toast.error("Couldn't fetch data!!", {
      icon: "❌",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  }

  return (
    projects && (
      <>
        <div
          className="intersect:motion-preset-fade motion-delay-700 bg-black py-12 px-12 max-sm:px-6"
          id="projects"
        >
          {projects.map((project) => {
            return (
              <div key={project.$id}>
                <ProjectCard project={project} />;
              </div>
            );
          })}
        </div>
      </>
    )
  );
};

export default ProjectsPage;
