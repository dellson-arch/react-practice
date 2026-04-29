import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { pause, play } from "../state/PlayerSlice"

const globalAudio = new Audio()
export let usePlayer = () =>{
   const audioRef =  useRef(globalAudio)
   let dispatch = useDispatch()

   let{currentPlayingSong , isPlaying} = useSelector((store)=>store.player)
   
   useEffect(()=>{
      console.log("Hook is active! Current song:", currentPlayingSong);
      if(!currentPlayingSong)return
      audioRef.current.src = currentPlayingSong.url
      audioRef.current.play()
   },[currentPlayingSong])

   useEffect(()=>{
      if(!currentPlayingSong)return
      if(isPlaying){
         audioRef.current.play()
      }else{
         audioRef.current.pause()
      }
   },[isPlaying])

   let togglePlayAndPause = () => {
    if(isPlaying){
      dispatch(pause())
    }else{
      dispatch(play())
    }
   }
    return{togglePlayAndPause}
}