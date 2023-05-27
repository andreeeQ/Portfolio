import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/tailwind.css'
import Home from './components/Home';
import Aboutme from './components/Home';
import Contact from './components/Home';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
  {
    path:"/Home",
    element:<Home/>,
  },
  {
    path:"/aboutme",
    element:<Aboutme/>,
  },
  {
    path:"/contact",
    element:<Contact/>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
); 
