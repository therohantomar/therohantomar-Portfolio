import React from 'react'
import { packages } from '../utils/constants';
import Package from './subcomponents/Package';
function Packages() {
  return (
    
      <div className="w-full  h-max py-10  dark:bg-neutral-900 bg-white ">
      <span className="relative  top-20">
        <div className="absolute  bg-gradient-to-tr from-orange-500 via-orange-600 to-orange-800 bg-orange-500  w-10 h-10  rounded-full"></div>
        <h1 className="absolute z-10  w-max dark:text-white  text-3xl   font-heading uppercase text-neutral-700">
          {" "}
          My Packages
        </h1>
      </span>
      <span className="mt-52 w-full gap-10 h-max flex  flex-wrap items-center xl:justify-normal 2xl:justify-normal lg:justify-center  md:justify-center sm:justify-center xs:justify-center">
        {packages.map((npmpackage) => {
          return <Package key={npmpackage.id} {...npmpackage} />;
        })}
      </span>
    </div>
  )
}

export default Packages
