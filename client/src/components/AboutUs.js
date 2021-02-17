import React from 'react'
import '../assets/stylesheets/AboutUs.css';
import bottles from '../assets/images/Udderless-bottles.png';
import ingredients from '../assets/images/ingredients.png';


const AboutUs = props => {
  return (
    <div className="about-us">
      About Us
      <br />
      <div>
          <img src={ingredients} alt="ingredients" className="ingredients"/>
          <img src={bottles} alt="bottles" className="bottles"/>
      </div><br />
      <div data-testid="description" className="description">
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