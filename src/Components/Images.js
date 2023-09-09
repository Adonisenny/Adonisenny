import { useEffect, useRef,useState } from "react";
 import {FaPauseCircle,FaPlayCircle} from 'react-icons/fa'
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';


const Images = ({muse,music,toPrevTrack,toNextTrack,getSongData,index,currentIndex}) => {
  
  const [isPlaying,setIsplaying] = useState(false)
  
  const [shown,setIsShown] = useState(false)
  
  const [currentSong,setCurrentSong] = useState(muse)
  
  const uri = currentSong?.hub?.actions?.[1]?.uri
      
      
      
    const handleClick = () => {   
        setIsplaying(prev => !prev)
    }
   

     return ( 
        <div className="container w-56 h-auto " onMouseEnter={() => setIsShown(true)}
        onMouseLeave ={() => setIsShown(false)} onClick = {() => getSongData(muse,index)}
        >


<div className="houseinput">
  
        </div>
                     
           <img src= {muse?.images?.coverart} alt='music art' className="imagess " /> 
           <p className='text-white'>{muse?.title.slice(0,20)}</p>
           
            {shown && (
            <div>
           
           { !isPlaying ?  (
           
            <FaPlayCircle 
            size={25}
            className='btn'
            onClick={handleClick}
            />):(
            <FaPauseCircle 
            size={5}
            className='btn'
            onClick={handleClick}
            
            />)}
          
          
 
</div>)}
</div>

     );
}
 
export default Images;
