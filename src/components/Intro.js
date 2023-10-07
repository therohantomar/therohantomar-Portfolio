import RightIntro from "./subcomponents/RightIntro";
import LeftIntro from "./subcomponents/LeftIntro";
const Intro = () => {
  return (
    <header className="bg-gray-100   flex xs:flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row xl:flex-row 2xl:flex-row  dark:bg-black h-full w-full">
      <LeftIntro />
      <RightIntro />
    </header>
  );
};

export default Intro;
