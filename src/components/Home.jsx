import React,{useEffect,useState} from 'react';
import Footer from './Footer';
import aboutme from "../data/aboutme";
import AboutmeItem from "./AboutmeItem";
import Title from "./Title";
import portfolio from "../data/portfolio";
import PortfolioItem from './PortfolioItem';
import Nav from "./navbar";


//Home
function Home() {
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
    <>
    <button   
    type="button"
    onClick={handleThemeSwitch}
    className="fixed p-2 z-20 left-10 bottom-4 bg-stone-900 dark:bg-yellow-300
    text-lg p-1 rounded-md">
   
   {theme === 'dark' ? sun : moon }
    </button>
    <div className="bg-white dark:bg-stone-900 text-stone-900 
    dark:text-stone-300 min-h-screen font-inter ">
      <div className="max-w-5xl w-11/12 mx-auto"> 

 <Nav>
    </Nav>
    <Portfolio/>
    <Aboutme />
    <Contact/>
    <Footer />
   
    </div>
    </div>

    </>
  )


//Aboutme
}
function Aboutme() {
  return(
    <>
    <Nav/>
  <div className="flex flex-col md:flex-row justify-center my-20 ">
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
  </>
  )
  }

  //Portfolio
  function Portfolio() {
    return(
      <>
      <Nav/>
    <div className="flex flex-col md:flex-row items-center justify-center my-20 mt-10">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 mt-20">
    {portfolio.map(project => (<PortfolioItem
        imgUrl={project.imgUrl}
        title={project.title}
        stack={project.stack}
       link={project.link}
        />))}
    </div>
    </div>
    </>
    )
    }
  //Contact  
    function Contact() {
      return(
      <div className="flex flex-col mb-10 mx-auto">
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
      )
      }
  
export default Home
