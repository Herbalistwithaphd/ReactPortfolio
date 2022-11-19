import "./WorkCardStyle.css"
import React from 'react'
import { NavLink } from "react-router-dom"


const WorkCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="image" />
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
       <p>{props.text}</p> 
        <div className="pro-btn">
            <NavLink to={props.view} className="btn2">View</NavLink>
            <NavLink to="url.com" className="btn2">Source</NavLink>
        </div>
    </div>
</div>
  )
}

export default WorkCard