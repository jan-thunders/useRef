import React,{useRef} from "react"; 

const Focus = () => {
     const selectedElement = useRef(null)


     function focusInput(){
        // console.log(selectedElement.current)
        selectedElement.current.style.backgroundColor= "green"
     }


    return(
        <div>
            <input ref={selectedElement} type="text" />
            <button onClick={focusInput}> Focus on Input </button>
        </div>
    )
}

export default Focus


