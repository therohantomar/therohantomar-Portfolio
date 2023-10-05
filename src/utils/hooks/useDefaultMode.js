const { useState, useEffect } = require("react");


function useDefaultMode(userSelection){
    const [mode,setMode]=useState("dark")

    useEffect(()=>{
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // User prefers dark mode
            setMode("dark")
          } else {
            // User prefers light mode
            setMode("light")
          }
        
    },[])

    return mode
   
}

export default useDefaultMode