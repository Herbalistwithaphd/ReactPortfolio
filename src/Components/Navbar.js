import React from 'react'
import "./NavbarStyle.css"
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from "react"

const Navbar = () => {
 //function to handle hamdburger dropdown
    const [dropDown, setdropDown] = useState(false);
    const handleClick = ()=> setdropDown(!dropDown);

    //function to change color of navbar on scroll

    const[color, setColor] = useState(false)
    const changeColor = ()=>{
      if(window.scrollY >=100){
        setColor(true)
      }else{
        setColor(false)
      }
    }
    window.addEventListener("scroll", changeColor);

  return (
    <div className={color? "header header-bg" : 'header'}>
        <Link to="/">
            <h1>HAT</h1>
        </Link>
        <ul className={dropDown ? 'nav-menu active' : 'nav-menu'}>
           <li>
              <Link to="/">Home</Link>  
            </li> 
           <li>
              <Link to="/about">About</Link>  
            </li> 
           <li>
              <Link to="/project">Project</Link>  
            </li> 
           <li>
              <Link to="/skills">Skills</Link>  
            </li> 
           <li>
              <Link to="/contact">Contact</Link>  
            </li> 
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {dropDown ? (<FaTimes size={25} />) : (<FaBars size={25} />)} 
        </div>
    </div>
  )
}

export default Navbar