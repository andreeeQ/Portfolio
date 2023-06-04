import React,{useEffect,useState} from 'react';
import Footer from './Footer';
import aboutme from "../data/aboutme";
import AboutmeItem from "./AboutmeItem";
import Title from "./Title";
import portfolio from "../data/portfolio";
import PortfolioItem from './PortfolioItem';
import {DotLoader} from "react-spinners";
import {Link} from 'react-scroll'
import logo from "./logo.png"
import logo2 from "./logo-white.png"


//Home
function Home() {

  const [loading,setLoading] = useState(false);
  useEffect(() => {
setLoading(true)
setTimeout(() =>{
setLoading(false)
},1500)
  },[])


  const [theme, setTheme] = useState(null);

  useEffect(()=>{
if(window.matchMedia('(prefers-color-scheme:dark)').matches){
  setTheme('dark');
}
else{
  setTheme('light');
}
  },[]);

  const handleThemeSwitch =() =>{
    setTheme(theme === 'dark' ? 'light' :'dark');
  };

useEffect(()=>{

  if(theme === 'dark'){
    document.documentElement.classList.add('dark');
  }
  else{
    document.documentElement.classList.remove('dark');
  }

},[theme]);

const sun =(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>
);

const moon =(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
<path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
</svg>
);


  return (
    
    <div>
      {
        loading ? 
        <div className="h-screen w-full bg-stone-700 flex justify-center items-center pt-28 dark:w-full dark:max-h-screen">
        <DotLoader
        color={"orange"}
        loading={loading}
        size={80}
       
      />
      </div>
        :

    <>
    
    <button   
    type="button"
    onClick={handleThemeSwitch}
    className="fixed p-2 z-20 sm:left-10 bottom-4 bg-stone-900 dark:bg-yellow-300
    text-lg rounded-md ">
   
   {theme === 'dark' ? sun : moon }
    </button>
    <div className="bg-white dark:bg-stone-900 text-stone-900 
    dark:text-stone-300 min-h-screen font-inter ">



<Nav/>
      <div className="max-w-5xl w-11/12 mx-auto"> 
     <h1 className="mt-44 font-sil text-9xl text-center md:text-7xl mb-1 md:mb-3 pt-10">My Projects</h1>
    <Portfolio/>
    <Aboutme/>
    <Skillset/>
    <Contact/>
    <Footer />
   
    </div>
    
    </div>
    
  
    </>
          }
    </div>
    
  )


//Aboutme
}
function Aboutme() {
  return(
    
  <div className="flex flex-col md:flex-row justify-center my-20 " >
      <div className="w-full md:w-7/12">
          <Title>About me</Title>
  {aboutme.map(item => (<AboutmeItem
      year={item.year}
      title={item.title}
      duration={item.duration}
     details={item.details}
      />))}
      </div>
 
  </div>
  
  )
  }

  //Portfolio
  function Portfolio() {
    return(
    
    <div className="flex flex-col md:flex-row items-center justify-center my-20 mt-10">
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-7 mt-20 "id='about'>
    {portfolio.map(project => (<PortfolioItem
        imgUrl={project.imgUrl}
        title={project.title}
        stack={project.stack}
       link={project.link}
        />))}
    </div>
    </div>
  
    )
    }

   //Skillset
   
   const Skillset =() => {
    return(

        <div className="pl-12 z-20 md:flex-col md:mb-10 md:mt-20 md:mx-auto">
            <h1 className="text-2xl font-oswald underline underline-offset-8 decoration-4
            mb-5 text-stone-900 dark:text-white">Tools I've Learned</h1>
            
           <div className="relative pt-1">
            <p>HTML</p>
  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
    <div style={{ width: "80%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
  </div>
</div>

<div className="relative pt-1">
            <p>CSS</p>
  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
    <div style={{ width: "70%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
  </div>
</div>


<div className="relative pt-1">
            <p>Tailwind</p>
  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
    <div style={{ width: "60%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
  </div>
</div>


<div className="relative pt-1">
            <p>HTML</p>
  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
    <div style={{ width: "50%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
  </div>
</div>


<div className="relative pt-1">
            <p>JavaScript</p>
  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
    <div style={{ width: "50%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
  </div>
</div>


        </div>
   
    )
} 


  //Contact  
  
    function Contact() {
      return(
        <>
        <Nav/>
      <div className="flex flex-col mb-10 mt-20 mx-auto" id='Contact'>
          <div className="flex justify-center items-center">
              <form action="https://getform.io/f/e48c026c-7ab6-4036-a4a9-e50f0436b54b"
              method="POST"
              className="flex flex-col w-full md:w-7/12">
                  <Title>Contact</Title>
                  <input type="text"
                  name="name"
                  placeholder="Name"
                  className="p-2 bg-transparent border-2 rounded-md focus:outline-none" />
      
                  <input type="text"
                  name="email"
                  placeholder="Email Address"
                  className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none" />    
      
                  <textarea name="message" 
                  placeholder="Message" 
                  rows="10"
                  className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"/>
                  
                  <button type="submit" 
                  className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white 
                  bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white">
                      Work with me!!
                  </button>
              </form>
          </div>
      </div>
      </>
      )
      }


    //Navbar 
const Nav = () => {

    
  let [open,setOpen]=useState(false);
  return(
      <nav className='relative flex items-center justify-between pt-5'id='home'> 
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
                           border-b-2 border-transparent hover:border-orange-400 duration-300 md:my-0 my-6'>
                              <Link to="home"spy={true} smooth={true} offset={50} duration={500} className='text-white hover:text-orange-400
                              duration-500'><span>
                                 <h1 className='font-bold mr-1.5 text-lg cursor-pointer dark:text-white text-black '>Home</h1> 
                                  </span></Link>

                                  
                          </li>   


                           <li className='md:inline-block md:ml-10 ml-5 font-oswald 
                           border-b-2 border-transparent hover:border-orange-400 duration-300 md:my-0 my-6'>
                              <Link to="about" spy={true} smooth={true} offset={50} duration={500} className='text-white hover:text-orange-400
                              duration-500'><span>
                                 <h1 className='font-bold mr-1.5 text-lg cursor-pointer dark:text-white text-black'>About me</h1> 
                                  </span></Link>

                                  
                          </li> 

                          <li className='md:inline-block md:ml-10 ml-5 font-oswald 
                           border-b-2 border-transparent hover:border-orange-400 duration-300 md:my-0 my-6'>
                              <Link to="Contact" spy={true} smooth={true} offset={50} duration={500}className='text-white hover:text-orange-400
                              duration-500'><span>
                                 <h1 className='font-bold mr-1.5 text-lg cursor-pointer dark:text-white text-black '>Contact</h1> 
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

  
export default Home
