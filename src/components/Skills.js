import ReactjsConcepts from "./subcomponents/ReactjsConcepts";
import JavascriptConcepts from "./subcomponents/JavascriptConcepts"
import ReduxjsConcepts from "./subcomponents/ReduxjsConcept";

function Skills() {
  return (
    <div className="w-full  h-max py-10 border-b-2 border-t-2 mt-40 dark:border-neutral-700  dark:bg-neutral-900 bg-white ">
      <span className="relative  top-20 left-20">
        <div className="absolute  bg-gradient-to-tr from-orange-500 via-orange-600 to-orange-800 bg-orange-500  w-10 h-10  rounded-full"></div>
        <h1 className="absolute z-10 mx-4 w-max dark:text-white  text-3xl  before:w-10  font-heading uppercase text-neutral-700">
          {" "}
          My Skills
        </h1>
      </span>
      <span className="mt-52 w-full gap-10  flex  flex-wrap items-center justify-center">
      <ReactjsConcepts/>
      <JavascriptConcepts/>
      <ReduxjsConcepts/>
      </span>
    </div>
  );
}

export default Skills;
