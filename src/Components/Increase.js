
import React,{useEffect, useState, useRef} from "react"; 


const Increase  = () => {
   const [count, setCount] = useState(0)

   const a = useRef(100)


   // use effect is used for side activity
    useEffect(()=>{
        // a.current = 500
        // console.log(a.current)
    },[])

    // a.current = 500

    

    return(
        <div>
            <h1>hello, count={count} , a = {a.current}</h1>
        </div>
    )
}

export default Increase