import React,{useState, useRef, useEffect} from "react";


// let arr = [1,2,3,4,5,6]

const PreviousValue = () =>{
    const [score, setScore] = useState(0) // 0
    const prevScore = useRef("") // ""

    useEffect(()=>{
        prevScore.current = score // 0 
    },[score])


    return(
        <div>
            <div>
                <h1>{score}</h1>
                <button onClick={()=>setScore(score + parseInt(Math.random()*6)+1)}> Update Score</button>
                <p> Previous Score: {prevScore.current}</p>

            </div>
        </div>
    )
}

export default PreviousValue