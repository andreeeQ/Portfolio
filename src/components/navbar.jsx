import React, { useState } from 'react'
import logo from "./logo.png"
import logo2 from "./logo-white.png"

import {Link} from 'react-scroll'



const Nav = () => {

    
    let [open,setOpen]=useState(false);
    return(
        <nav className='flex items-center justify-between pt-5'id='home'>
           
        <div className=' w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-stone-500 py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                <span className=' w-12 text-indigo-400 mr-1 pt-2'>
                <img className=' invisible dark:visible absolute w-12 ml-7' src = {logo2}/>
                <img className='dark:invisible visible  w-18 ml-7 ' src = {logo}/> 
                </span> 
                </div>
                <div onClick={()=>setOpen(!open)} className='z-20 fixed text-lg w-10 right-5 top-6 cursor-pointer md:hidden'>
                <ion-icon name={open ? 'close':'menu'}></ion-icon>
                </div>
                <ul className={`bg-[#c6c4c414] backdrop-blur-lg md:pl-10 pr-28 z-10 md:static fixed top-0 
                right-0 md:h-auto h-screen duration-500 ease-linear ${!open ? 'right-[-100%]'
                    :'right-0'}`}>
                        
                    {
                       <li>

                         <li className='md:inline-block md:ml-10 ml-5 font-oswald 
                             border-b-2 border-transparent hover:border-white duration-300 md:my-0 my-6'>
                                <Link to="home"spy={true} smooth={true} offset={50} duration={500} className='text-white hover:text-orange-400
                                duration-500'><span>
                                   <h1 className='font-bold mr-1.5 text-lg'>Home</h1> 
                                    </span></Link>

                                    
                            </li>   
  

                             <li className='md:inline-block md:ml-10 ml-5 font-oswald 
                             border-b-2 border-transparent hover:border-white duration-300 md:my-0 my-6'>
                                <Link to="about" spy={true} smooth={true} offset={50} duration={500} className='text-white hover:text-orange-400
                                duration-500'><span>
                                   <h1 className='font-bold mr-1.5 text-lg'>About me</h1> 
                                    </span></Link>

                                    
                            </li> 

                            <li className='md:inline-block md:ml-10 ml-5 font-oswald 
                             border-b-2 border-transparent hover:border-white duration-300 md:my-0 my-6'>
                                <Link to="Contact" spy={true} smooth={true} offset={50} duration={500}className='text-white hover:text-orange-400
                                duration-500'><span>
                                   <h1 className='font-bold mr-1.5 text-lg '>Contact</h1> 
                                    </span></Link>

                                    
                            </li>   
                            
  

                </li>
                        
                    }
                </ul>
            </div>
    </div>
    </nav>
    )
    
}   

export default Nav