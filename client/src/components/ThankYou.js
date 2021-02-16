import React, { useState } from 'react'
import '../assets/stylesheets/ThankYou.css';

const ThankYou = props => {

  return (
    <div>
      <div id="thank-you-1">
        Thank you for registering your interest, {props.lastInterest.first_name}.
      </div><br />
      <div id="thank-you-2">
        We already plan to deliver to this postcode. We will be in contact when we launch Udderless.
      </div>
    </div>
  )
}

export default ThankYou;