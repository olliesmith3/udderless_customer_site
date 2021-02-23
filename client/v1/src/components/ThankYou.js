import React, { useState } from 'react'
import '../assets/stylesheets/ThankYou.css';

const ThankYou = props => {

  const postcodeInRange = postcode => {
    var postcodes = ["SW2", "SW4", "SW9", "SW8", "SW11", "SW12", "SW15", "SW18"]
    for (let i = 0; i < postcodes.length; i++) {
      var n = postcode.toUpperCase().search(`${postcodes[i]}`);
      if (n === -1) {
        continue;
      } else {
        return true;
      }
    }
  };

  return (
    <div className="thank-you">
      <div id="thank-you-1">
        Thank you for registering your interest, {props.lastInterest.first_name}.
      </div><br />
      <div id="thank-you-2">
        {postcodeInRange(props.lastInterest.postcode) === true ? (
          "We already plan to deliver to this postcode. We will be in contact when we launch Udderless." 
        ) : ( 
          "We do not currently plan to deliver to this postcode. If more interest for this postcode is shown then it will be added to our range."
        )}
      </div>
    </div>
  )
}

export default ThankYou;