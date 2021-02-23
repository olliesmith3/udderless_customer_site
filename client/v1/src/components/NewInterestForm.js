import React, { useState } from 'react'
import '../assets/stylesheets/NewInterestForm.css';

const NewInterestForm = props => {
  const  [interest, setInterest] = useState(props.initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target
    setInterest({ ...interest, [name]: value })
  };


  return (
    <form className="interest-form" onSubmit={event => {
      event.preventDefault()
      if ((!interest.first_name || !interest.postcode) || (!interest.email && !interest.tel)) return;
      props.addInterest(interest)
      setInterest(props.initialFormState)
    }}>
      <label htmlFor="first_name">First Name</label>
      <input type="text" name="first_name" id="first_name" value={interest.first_name} onChange={handleInputChange} ></input><br />
      <label htmlFor="postcode">Postcode</label>
      <input type="text" name="postcode" id="postcode" value={interest.postcode} onChange={handleInputChange} ></input><br />
      <label htmlFor="email">Email Address</label>
      <input type="text" name="email" id="email" value={interest.email} onChange={handleInputChange} ></input><br />
      <label htmlFor="tel">Telephone Number</label>
      <input type="text" name="tel" id="tel" value={interest.tel} onChange={handleInputChange} ></input><br />
      <button className="submit-button" >I'm Interested!</button>
    </form>
  )
}

export default NewInterestForm;


