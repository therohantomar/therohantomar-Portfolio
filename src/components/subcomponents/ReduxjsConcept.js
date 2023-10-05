import { reduxConcepts } from "../../utils/constants";
import { BiLogoRedux } from "react-icons/bi";
const ReduxjsConcept = () => {
  return (
    <div className="h-max flex flex-col items-center bg-transparent">
      <div className="w-max p-2 text-white shadow-xl cursor-pointer hover:scale-110 transition-all dark:bg-neutral-700  opacity-95 rounded-full">
        <BiLogoRedux className="text-yellow-500 text-3xl" />
      </div>
      <div className="w-96 my-10 scrollbar-hide  h-96 overflow-y-scroll  rounded-md bg-gradient-to-tr flex flex-wrap hover:scale-105 transition-all cursor-pointer shadow-xl p-4 bg-neutral-950 bg-neutral-900 dark:bg-white opacity-95">
        {reduxConcepts?.map((concept, index) => {
          return (
            <div key={index} className="m-4">
              <p className="font-bold font-ubuntu text-gray-300 dark:text-gray-700 underline text-xl">concept</p>
              <p className="font-martian font-bold text-white dark:text-gray-700">{concept.concept}</p>
              <p className="font-bold font-ubuntu text-white dark:text-gray-700 underline text-xl">functionality</p>
              <p className="font-martian font-bold text-white dark:text-gray-700">{concept.functionality}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReduxjsConcept;
