import "./AboutContentStyle.css"
import React from 'react'
import { Link } from "react-router-dom"
import img1 from "../assets/img.jpg"
import image2 from "../assets/image2.jpg"


const AboutContent = () => {
  return (
    <React.Fragment>
    <div className="about">
        <div className="left">
            <h1>Temitope</h1>
            <p>Is a react frontend developer with keen interest in creating responsive website</p>
            <Link to="/contact">
                <button className="btn">CONTACT</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={image2} 
                    className="img"
                    alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={image2} 
                    className="img"
                    alt="true"/>
                </div>
            </div>

        </div>
    </div>
    </React.Fragment>
  )
}

export default AboutContent