import React from 'react'

const Project = ({link,title}) => {
  return (
    <div className='flex flex-col mx-4'>
    <button className='btn my-5 dark:bg-white dark:text-black'>Visit Website</button>
      <div className="mockup-browser-toolbar bg-black">
          <div className="display ">
            <iframe
              src={link}
              title={title}
              className="artboard artboard-demo  phone-3"
            />
          </div>
        </div>

    </div>
  )
}

export default Project
