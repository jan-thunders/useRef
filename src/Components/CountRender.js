import React, {useState, useEffect, useRef} from "react"; 



const CountRender = () => {
 const [count, setCount] = useState(0)
 const renderCount = useRef(1) // {current: 0} // 0


useEffect(()=>{
     console.log("Dont doubt me, its useRef problem")
     renderCount.current = renderCount.current+1  // 1 => 
})



    return(
        <div>
          <h1> {count} </h1> 

          <button onClick={()=>setCount(count+1)}> Increse Count</button>

          <p> Component has rendered {renderCount.current} times</p>


        </div>
    )
}

export default CountRender



//   useEffect(()=>{
//     setRenderCount(renderCount+1) // 2
//   }, [count])
     // a= 10
    //  let a = 10
    //  function inc(){
    //      a = a+1 
    //      console.log(a)
    //  }
 