import { motion } from "framer-motion";
import developer from "../../assests/images/Developer.png";

function RightIntro() {
  return (
    <motion.div
      initial={{ translateX: 500 }}
      animate={{ translateX: 0 }}
      transition={{
        type: "All",
        delay: 0.2,
        stiffness: 260,
        damping: 20,
      }}
      className="xs:w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 h-96 flex xs:items-center xs:justify-center sm:items-center sm:justify-center md:items-end md:justify-end lg:items-end lg:justify-start xl:items-end xl:justify-center 2xl:items-end 2xl:justify-center dark:bg-neutral-900 bg-white"
    >
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "All",
          delay: 0.5,
          stiffness: 260,
          damping: 20,
        }}
        src={developer}
        alt="developer"
        className="w-60  h-60 mx-4"
      />
    </motion.div>
  );
}

export default RightIntro;
