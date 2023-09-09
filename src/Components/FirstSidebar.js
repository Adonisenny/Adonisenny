 import {HiOutlineMenu} from 'react-icons/hi';


import {RiCloseLine} from 'react-icons/ri';
import {useState} from 'react';

const FirstSidebar = () => {
    const[menuOpen,setMenuOpen] =useState(false)
    // eslint-disable-next-line no-unused-vars
    const handleClick = () => {
        setMenuOpen(prev => !prev)
    }
    
    return ( 
<>
        <div className='firstSideBar block px-0 text-white bg-blue-100 '>
        <h3 className='font-bold '>sleekMusic</h3>
        <p className='demps'>Discover</p>
        <p className='demps'>Top Charts</p>
        <p className='demps'>Around You</p>
        <p className='demps'>Top Artists</p>
        </div>
        
        <div className=" absolute cursor-pointer  hidden top-1 right-6">
        {menuOpen ? (
          <RiCloseLine onClick={() => setMenuOpen(false)} className='w-6 h-6 text-white mr-2'/>
        ):
        <HiOutlineMenu onClick={() => setMenuOpen(true)}className='w-6 h-6 text-white mr-2'  />
        }
              </div>
              <div  className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 hidden smooth-transition ${menuOpen ? 'left-0': '-left-full'}`}>
        <h3 className='font-bold '>sleekMusic</h3>
        <p className='demps'>Discover</p>
        <p className='demps'>Top Charts</p>
        <p className='demps'>Around You</p>
        <p className='demps'>Top Artists</p>
        
        </div>


 </>

     );
}
 
export default FirstSidebar;