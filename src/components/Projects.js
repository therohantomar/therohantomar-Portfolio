import React from "react";
import Project from "./subcomponents/Project";
import { projects } from "../utils/constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full  h-max py-10 border-b-2 dark:border-neutral-700 dark:bg-neutral-900 bg-white "
    >
      <span className="relative  top-20 left-20">
        <div className="absolute  bg-gradient-to-tr from-orange-500 via-orange-600 to-orange-800 bg-orange-500  w-10 h-10  rounded-full"></div>
        <h1 className="absolute z-10  w-max dark:text-white  text-3xl  before:w-10  font-heading uppercase text-neutral-700">
          {" "}
          My Projects
        </h1>
      </span>
      <span className="mt-52 w-full gap-10 h-max flex   flex-wrap items-center xl:justify-normal 2xl:justify-normal lg:justify-center  md:justify-center sm:justify-center xs:justify-center">
        {projects.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </span>
    </motion.div>
  );
};

export default Projects;
