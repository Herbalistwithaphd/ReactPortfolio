import "./PricingCardStyle.css"
import React from 'react'
import { Link } from "react-router-dom"


const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
            <h3>- Basic -</h3>
            <span className="bar"></span>
            <p className="nra">#100,000</p> 
            <p>- 2 days -</p>
            <p>- 3 pages -</p>
            <p>- Responsive design -</p>
            <Link to="/contact" className="btn2">PURCHASE NOW</Link>
        </div>

        <div className="card">
            <h3>- Premium -</h3>
            <span className="bar"></span>
            <p className="nra">#200,000</p>
            <p>- 3 days -</p>
            <p>- 5 pages -</p>
            <p>- Responsive design -</p>
            <Link to="/contact" className="btn2">PURCHASE NOW</Link>
        </div>

        <div className="card">
            <h3>- Business -</h3>
            <span className="bar"></span>
            <p className="nra">#400,000</p>
            <p>- 5 days -</p>
            <p>- 8 pages -</p>
            <p>- Responsive design -</p>
            <Link to="/contact" className="btn2">PURCHASE NOW</Link>
        </div>

      </div>
    </div>
  )
}

export default PricingCard