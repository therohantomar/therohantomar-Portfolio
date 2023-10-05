import {AiFillGithub} from "react-icons/ai"
import {FaNpm} from "react-icons/fa"

function Package({npmlink, title, description,githublink}) {
  return (
    <div className="w-80 p-4 mx-8 hover:scale-105 transition-all cursor-pointer rounded-md dark:text-white text-black dark:bg-neutral-800 h-max shadow-xl">
    <h1 className='font-heading w-full my-2 bg-gray-300  dark:bg-gray-700'>{title}</h1>
    <p className='font-para h-40  font-bold '>{description}</p>
    <span className="flex gap-10">
        <a href={githublink}  target="_blank"  rel="noreferrer"><AiFillGithub className="text-2xl"/></a> <a href={npmlink}><FaNpm className="text-2xl" target="_blank" rel="noreferrer"/></a>
    </span>
      
    </div>
  )
}

export default Package
