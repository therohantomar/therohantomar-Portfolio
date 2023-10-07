import { useEffect } from "react";


export default function useHandleOutsideClick(formRef,setPopup){
    useEffect(() => {
        const handleOutsideClick = (event) => {
          if (formRef.current && !formRef.current.contains(event.target)) {
            setPopup(false);
          }
        };
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, [setPopup]);


}


