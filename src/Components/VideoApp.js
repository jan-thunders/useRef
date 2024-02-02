import rr from "../data/video.mp4" 
import { useRef } from "react"

const VideoApp = () => {
   const videoRef = useRef()
   
   const playVideo = ()=>videoRef.current.play()
   const pauseVideo = ()=>videoRef.current.pause()


    return(
        <div>
            <video ref={videoRef} width="300" height="300" controls> 
                <source src={rr}  type="video/mp4"/>
               Your Browser doesnot support the Video Tag
            </video>
            <button onClick={playVideo}> Play </button>
            <button onClick={pauseVideo}> Pause </button>
        </div>
    )
}

export default VideoApp