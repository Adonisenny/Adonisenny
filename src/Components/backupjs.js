import {useEffect,useState} from 'react';



import './App.css'
import './index.css'
import Images from './Components/Images';
import Player from './Components/Player';

import ThirdPartition from './Components/ThirdPartition';
import FirstSidebar from './Components/FirstSidebar';




const options = {
       method: 'GET',
       headers: {
        'X-RapidAPI-Key': 'b34370db6bmsh129f279d2bc7cdfp11712ejsn19a07be8ee98',
        'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
       }
     };
     
     const App =  () => {
      const [music,setMusic] = useState([])
      
     
      



      
     


    
    useEffect(() => {
async function fetchdata() {
      const response = await fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
       const data = await response.json();
       
       return data 
      }
      fetchdata()
.then(data => setMusic(data))
      
      },[])
      
    
      const topchart = music?.slice(0,4)
      
      
    
      
    
  
    
  return (
    <>
    <div className="App ">
      
     <FirstSidebar />

    <div className='music-container grid grid-cols-3  px-0'>
    <h2 className='block text-center text-white mt-7 hidden'>Discover Pop</h2>
    {music?.map((muse,index) => {
  return <Images
  
key={muse.key}  
  muse={muse}
  index={index}
  music={music}
/>     
     })
     
    
     }
     </div>
     <div className='div3 block min-w-min '>
     <h3 className='font-bold text-white'>Top Chart</h3>
      {topchart.map((topc,index) => {
       return <ThirdPartition
        topchart={topchart}
        index={index}
        topc={topc}

        />

      })}

</div>

{/* Top Artiste and Swiper */}
{/* <div className="w-full flex flex-col mt-8">
<div className="flex flex-row justify-between items-left">
<h2 className="text-white font-bold text-2xl">
Top Artists

</h2>

</div>
<Swiper
slidesPerView = 'auto'
spaceBetween={10}
freeMode
centeredSlides
centeredSlidesBounds
modules={[FreeMode]}
className='mt-4 m-4'
>
  {topPlay.map((song,i) => {
    return <SwiperSlide
    key={song?.key}
    style={{width:'15%', height:'auto'}}
    className='shadow-lg rounded-full animate-slideright'
    
    >
      <img src={song?.images.background} alt='name' className='rounded-full w-full object-cover' />


    </SwiperSlide>
  })}
  </Swiper>
</div> */}
</div>
</> 

    
  )
    } 

export default App;
