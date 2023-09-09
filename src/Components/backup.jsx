import { useEffect, useRef,useState } from "react";
import {FaPauseCircle,FaPlayCircle} from 'react-icons/fa'
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';


const Images = ({muse,music}) => {
  
  const [isPlaying,setIsplaying] = useState(false)
  const [musics,setMusics] = useState(music)
  
  const [currentSong,setCurrentSong] = useState(muse)
  const [trackProgress,setTrackProgress] =useState(0)
  const uri = currentSong?.hub?.actions?.[1]?.uri
     
      const audioRef = useRef(new Audio(uri))

      
    
     // console.log(muse.title)
    const handleClick = () => {   
        setIsplaying(prev => !prev)
    }
    const onScrub = (value) => {
      // Clear any timers already running
      clearInterval(intervalRef.current);
      audioRef.current.currentTime = value;
      setTrackProgress(audioRef.current.currentTime);
    }
    
    const onScrubEnd = () => {
      // If not already playing, start
      if (!isPlaying) {
        setIsplaying(true);
      }
      startTimer();
    }


    
      
     
     
      
         
      
      

    const intervalRef =useRef()
    const isReady =useRef(false)
    const {duration} =audioRef.current
    

    const startTimer = () => {
      // Clear any timers already running
      clearInterval(intervalRef.current);
  
      intervalRef.current = setInterval(() => {
        if (audioRef.current.ended) {
          
          setIsplaying(false);
        } else {
          setTrackProgress(audioRef.current.currentTime);
        }
      }, [2000]);
    };
    useEffect(() => {
    if(isPlaying) {
        audioRef.current.play()
        startTimer()
        
    }else{
        audioRef.current.pause()
    }},[isPlaying])
    
    
    useEffect(() => {
      audioRef.current.pause();
    
      audioRef.current = new Audio(uri);
      setTrackProgress(audioRef.current.currentTime);
    
      if (isReady.current) {
        audioRef.current.play();
        setIsplaying(true);
        startTimer();
      }
    }, [currentSong,uri]);


    const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : '0%';
const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
`;


    
     return ( 
        


<div className="houseinput">

</div>

     );
}
 
export default Images;
