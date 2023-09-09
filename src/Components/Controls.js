import { useEffect, useRef,useState } from "react";
import '../index.css'
import {FaPauseCircle,FaPlayCircle} from 'react-icons/fa'
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';


const Controls = ({currentSong,toNextTrack,toPrevTrack,currentIndex}) => {
  const [isPlaying,setIsPlaying]= useState(false)
  const [trackProgress,setTrackProgress] =useState(0)


  const audioRef = useRef(null)


  const handleClic = () => {   
    setIsPlaying(!isPlaying)
    console.log('clicked')
}


  
  useEffect(() => {
    if(isPlaying) {
        audioRef.current.play()
        startTimer()
        
    }else{
        audioRef.current.pause()
    }},[isPlaying,currentIndex])


    const onScrub = (value) => {
      // Clear any timers already running
      clearInterval(intervalRef.current);
      audioRef.current.currentTime = value;
      setTrackProgress(audioRef.current.currentTime);
      
    }
    const onScrubEnd = () => {
      // If not already playing, start
      if (!isPlaying) {
        setIsPlaying(true);
      }
      startTimer();
    }
    const intervalRef =useRef()
    
    


    const startTimer = () => {
      // Clear any timers already running
      clearInterval(intervalRef.current);
  
      intervalRef.current = setInterval(() => {
        if (audioRef.current.ended) {
          
          setIsPlaying(false);
        } else {
          setTrackProgress(audioRef.current.currentTime);
        }
      }, [2000]);
    };
   



        
    return ( 
      <div className="player-card  flex-row gap-12 flex  mt-2 " >
        <audio
          ref={audioRef}
          src={currentSong?.hub?.actions?.[1]?.uri}
        
        
        >
        </audio>
       {currentSong ? (
        <div className=" flex items-left justify-start gap-4 ml-4 mr-24" >
          <div className=" h-12 w-12 flex flex-row block ">
          <img src= {currentSong?.images?.coverart} alt='music art' className=" items-center mt-2 justify-center object-cover  rounded-full" />
          </div>
          <div>
                <p className="text-white font-bold">{currentSong?.title.slice(0,15)}</p>
                 <h2 className="">{currentSong?.subtitle}</h2> 
        

        </div>
        </div>
       ): (
        <div></div>
       )} 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<div className=" ml-24">
  




<div className="  flex flex-row items-center justify-center gap-12 mt-0 ">
<MdSkipPrevious 
           size={20}
           onClick={toPrevTrack}
           className=''
           color="rgb(15 23 42 / var(--tw-bg-opacity))"
           />  
           { !isPlaying ?  (
           
            <FaPlayCircle 
            size={25}
            className='butt bg-blue-300'
            onClick={handleClic}
            />):(
            <FaPauseCircle 
            size={25}
            className='butt bg-blue-300'
            onClick={handleClic}
            
            />)}
          
          <MdSkipNext
          size={20}
          onClick={toNextTrack}
          className='butt2'
          color=" rgb(15 23 42 / var(--tw-bg-opacity))"
          />





           


</div>
<div>

           
           <input
        type="range"
        value={trackProgress}
        step="1" 
        min="0"
      
        className="progress "
        onChange={(e) => onScrub(e.target.value)}
        onMouseUp={onScrubEnd}
        onKeyUp={onScrubEnd}
         
	
      />
      
      

</div>

</div>
</div>

     );
}
 
export default Controls;