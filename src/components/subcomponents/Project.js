
const Project = ({link,title}) => {
  return (
    <div className='flex flex-col  mx-4'>
   <a href={link} target='_blank' className="self-center" rel="noreferrer"><button className='btn my-5 dark:bg-white dark:text-black'>Visit Website</button></a>
      <div className="mockup-browser-toolbar hover:scale-105  transition-all">
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
