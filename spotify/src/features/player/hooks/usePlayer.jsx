import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pause, play } from "../state/PlayerSlice";

const globalAudio = new Audio();

export const usePlayer = () => {
    const audioRef = useRef(globalAudio);
    const dispatch = useDispatch();

    const { currentPlayingSong, isPlaying } = useSelector(
        (store) => store.player
    );

    useEffect(() => {
        const audio = audioRef.current;

        if (!currentPlayingSong) return;

        // if new song selected
        if (audio.src !== currentPlayingSong.url) {
            audio.pause();
            audio.src = currentPlayingSong.url;
            audio.load();
        }

        if (isPlaying) {
            const playAudio = async () => {
                try {
                    await audio.play();
                } catch (err) {
                    console.log(err);
                }
            };
            playAudio();
        } else {
            audio.pause();
        }
    }, [currentPlayingSong, isPlaying]);

    let togglePlayAndPause = () => {
       console.log("is playing...", isPlaying);
       if (isPlaying) {
         dispatch(pause());
       } else {
         dispatch(play());
       }
     };
   
     return {
       togglePlayAndPause,
     };
};