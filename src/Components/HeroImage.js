import "./HeroImageStyle.css"
import image from "../assets/image1.jpg"
import { Link } from "react-router-dom"
import React from 'react'

const HeroImage = () => {
  return (
    <div className="hero" >
        <div className="mask" >
          <img className="intro-img" src={image} alt="hero-img" />  
        </div>
        <div className="content" >
            <p>HI, I'M A FREELANCER</p>
            <h1>React Developer</h1>
            <div>
            <Link to="/project" className="btn" >Projects</Link>
            <Link to="/contact" className="btn-light" >Contact</Link>
        </div>
        </div>
        
        </div>
  )
}

export default HeroImage