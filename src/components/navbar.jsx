import React, { useState } from 'react'
import logo from  "./logo.png";
import logo2 from "./logo-white.png";

const Nav = () => {
    let Links =[
        {name:"HOME",link:"/Home"},
        {name:"About",link:"/Aboutme"},
        {name:"Contact",link:"/Contact"},
    
    ];
    let [open,setOpen]=useState(false);
    return(
        <div className=' w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-gradient-to-r from-stone-500 to-gray-200 py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                <span className=' w-12 text-indigo-400 mr-1 pt-2'>
                <img className='absolute h-12 w-12 top-[2px]' src = {logo}/> 
                <img className=' invisible dark:visible absolute h-12 w-12 top-[2px]' src = {logo2}/>
                </span>
                </div>
                <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                <ion-icon name={open ? 'close':'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-200
                md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 
                ease-in ${open ? 'top-20':'top-[-490px]'} `}>
                    {
                        Links.map((Link)=>(
                             <li key={Link.name} className='md:ml-8 text-xl md:my-0 my-7 font-oswald'>
                                <a href={Link.link} className='text-gray-800 hover:text-orange-400
                                duration-500'>{Link.name}</a>
                             </li>   
                        ))
                    }
                </ul>
            </div>
    </div>
    )
}   

export default Nav