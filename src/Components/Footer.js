import "./FooterStyle.css"
import React from 'react'
import { FaFacebook, FaPhone, FaHome, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                   <FaHome size={20} style={{color:"white", marginRight: "2rem"}} /> 
                   <p>Kwara State, Nigeria</p>
                    <p>Ilorin</p>
                </div>
                
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"white", marginRight: "2rem"}} /> 
                    <p>+2348236216180</p></h4>
                </div>
                
                <div className="email">
                    <FaMailBulk size={20} style={{color:"white", marginRight: "2rem"}} />> 
                    <p>hamzatadejoke31@gmail.com</p>
                </div>
                
            </div>
            <div className="right">
                <h4>About the Company</h4>
                <p>Our company is opened to web application design projects and technical article writting. Our aim is to make your ideas come into live. </p>
                <div className="social">
                <FaFacebook size={30} style={{color:"white", marginRight: "1rem"}} /> 
                <FaTwitter size={30} style={{color:"white", marginRight: "1rem"}} /> 
                <FaLinkedin size={30} style={{color:"white", marginRight: "1rem"}} /> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer