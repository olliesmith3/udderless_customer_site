import React from 'react'
import '../assets/stylesheets/AboutUs.css';


const AboutUs = props => {
  return (
    <div className="about-us">
      About Us
      <div data-testid="description">
        <p>
          Delivered directly to your door, our signature oat blend is versatile, sustainable and delicious. 
        </p>
        <p>
          Coming soon to SW London 
        </p>
      </div>
    </div>
  )
}

export default AboutUs;