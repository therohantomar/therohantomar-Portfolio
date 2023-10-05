import { BiLogoReact } from "react-icons/bi";
import { reactConcepts } from "../../utils/constants";
const ReactjsConcepts = () => {
  return (
    <div className="h-max  flex flex-col items-center bg-transparent">
      <div className="w-max p-2 text-white shadow-xl hover:scale-110 transition-all dark:bg-neutral-700  opacity-95 rounded-full">
        <BiLogoReact className="text-blue-400 cursor-pointer   text-3xl" />
      </div>
      <div className="w-96 scrollbar-hide my-10 h-96 overflow-y-scroll  rounded-md  flex flex-wrap hover:scale-105 transition-all cursor-pointer shadow-xl p-4 bg-neutral-950 bg-neutral-900 dark:bg-white opacity-95">
      {reactConcepts?.map((concept,index)=>{
                return(<p className="bg-gray-600 w-max p-1 my-1 mx-1 text-white rounded-md" key={index}>{concept}</p>)   
        })}
      </div>
    </div>
  );
};

export default ReactjsConcepts;
