import React,{useRef} from "react"; 

const Array = () => {
    const selectedElement = useRef([10,20])
    
     selectedElement.current = [...selectedElement.current, 30] //  iisue
     


    return(
        <div>
              {selectedElement.current}
        </div>
    )
}

export default  Array


