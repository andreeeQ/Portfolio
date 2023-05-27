import React from "react";
import logo from  "./logo.png";
import logo2 from "./logo-white.png";
import './style.css';
import {Link} from "react-router-dom";
import {BsArrowRightSquareFill} from "react-icons/bs";

  

function Intro() {

return(
    <div className="flex items-center justify-center">
<div className="text-center mt-12 pt-64 pb-6">
<h1 className="text-4xl mt-36  md:text-7xl mb-1 md:mb-3 pt-10 font-sil">Andre Marco P. Quimio</h1>
<p className="text-base md:text-xl mb-3 font-medium font-oswald">Aspiring Web Developer</p>
<button className="bg-orange-600 dark:bg-white-300 
    text-lg p-1 rounded-md"><Link to ="/Home"><BsArrowRightSquareFill size={'2em'}/></Link></button>
</div>
<div className="dark:invisible mt-12 pt-54 pb-6 absolute h-32 w-38 top-[2px] ">
<img src = {logo}/>
</div>

<div className="invisible dark:visible mt-12 pt-54 pb-6 absolute h-32 w-38 top-[2px]  ">
<img src ={logo2}/>

</div>

</div>
)
}

export default Intro;