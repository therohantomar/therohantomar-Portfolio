import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { IoLogoJavascript } from "react-icons/io5";
import {
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoHtml5,
  BiLogoCss3,
} from "react-icons/bi";
import { useContext } from "react";
import {popupContext} from "../../App"

const LeftIntro = () => {
  const setpopup=useContext(popupContext)
  console.log(setpopup)
  return (
    <motion.div
      initial={{ translateX: -500 }}
      animate={{ translateX: 0 }}
      transition={{
        type: "All",
        delay: 0.2,
        stiffness: 260,
        damping: 20,
      }}
      className="xs:w-full  sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 xs:h-60 sm:h-60 md:h-96 lg:h-96 2xl:h-96 xl:h-96 flex items-end justify-center bg-white dark:bg-neutral-900"
    >
      <span className=" flex flex-col gap-4">
        <p className="font-extrabold text-3xl font-intro uppercase text-transparent bg-clip-text  bg-gradient-to-br from-amber-500 via-orange-600 to-amber-800">
          hey i'm Rohan Tomar{" "}
        </p>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "i am React Developer ",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "i am Javascript Developer",
            1000,
            "i am Frontend Developer",
            1000,
          ]}
          wrapper="span"
          className="text-2xl font-bold font-intro uppercase text-transparent bg-clip-text bg-gradient-to-br from-amber-500 via-orange-600 to-amber-800 w-96"
          speed={50}
          repeat={Infinity}
        />
        <span className="flex items-center justify-center gap-4">
          <p className=" text-2xl uppercase text-transparent font-intro bg-clip-text bg-gradient-to-br from-amber-500 via-orange-600 to-amber-700">
            Tech Stack |{" "}
          </p>
          <span className="flex justify-center gap-4 items-center">
            <BiLogoReact className="text-blue-400 animate-spin-slow text-3xl" />
            <IoLogoJavascript className="text-yellow-500 animate-pulse text-3xl" />
            <BiLogoTailwindCss className="text-blue-400 animate-pulse text-3xl" />
            <BiLogoHtml5 className="text-orange-500 animate-pulse text-3xl" />
            <BiLogoCss3 className="text-blue-600 animate-pulse text-3xl" />
          </span>
        </span>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="text-white bg-orange-500 hover:bg-orange-400 py-2   "
          onClick={() =>setpopup(true)}
        >
          Hire Me
        </button>
      </span>
    </motion.div>
  );
};

export default LeftIntro;
