import logoname from "../assests/images/therohantomar.png";
import reactlogo from "../assests/images/reactlogo.png";
import { motion } from "framer-motion";
import { MdSunny } from "react-icons/md";
import { PiMoonFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import useDefaultTheme from "../utils/hooks/useDefaultMode"


export default function Navbar() {
  const defaultTheme=useDefaultTheme()
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav
      className={`w-full flex dark:bg-neutral-900  dark:shadow-xl items-center justify-around  border-2 dark:border-0 p-6   h-20 `}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          delay: 0.2,
          stiffness: 260,
          damping: 20,
        }}
        className="flex col-span-1 cursor-pointer  max-w-xs"
      >
        <img
          src={reactlogo}
          className="w-max animate-spin-slow delay-75 xs:h-5 sm:h-6 md:h-8 lg:h-8 xl:h-8 2xl:h-10"
          alt="logoname"
        />
        <img src={logoname} className="xs:w-44 xs:h-5 sm:w-46 sm:h-6  md:w-60  md:h-8 lg:w-60 lg:h-8 xl:w-60 xl:h-8 2xl:w-max 2xl:h-10" alt="logoname" />
      </motion.div>
      <span className="flex gap-4">
        {theme === "light" ? (
          <PiMoonFill
            className="text-gray-700 cursor-pointer w-8 h-8"
            onClick={() => setTheme("dark")}
          />
        ) : (
          <MdSunny
            onClick={() => setTheme("light")}
            className="text-orange-400 cursor-pointer w-8 h-8"
          />
        )}
        <h1 className={`font-ubuntu cursor-pointer text-gray-700 flex font-bold dark:text-white  text-2xl`}>
           <a href="ana" download>RESUME</a>
        </h1>
      </span>
    </nav>
  );
}
