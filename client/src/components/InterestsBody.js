import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewInterestForm from './NewInterestForm';
import ThankYou from './ThankYou';
import Udderless1 from '../assets/images/TM-logo-final-1.gif'
import '../assets/stylesheets/InterestsBody.css';

const InterestsBody = props => {

  const initialFormState = {
    first_name: '',
    postcode: '',
    email: '',
    tel: ''
  };

  const addInterest = interest => {
    const qs = require('qs');

    axios.post('/api/v1/interests', qs.stringify(
      {
        interest:{
          first_name: interest.first_name,
          postcode: interest.postcode,
          email: interest.email,
          tel: interest.tel
        }
      }
    ))
    .catch( error => console.log(error))
    setInterests([...interests, interest]);
    setFormSubmitted(true);
  };

  useEffect(() => {
    axios.get('/api/v1/interests.json')
        .then(res => setInterests(res.data))
      }, []);

  const [interests, setInterests] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div>
      <div>
        {!formSubmitted && <NewInterestForm addInterest={addInterest} initialFormState={initialFormState} />}
        {formSubmitted && <ThankYou lastInterest={interests[interests.length - 1]} />}
      </div>
      <div className="logo-div">
        <img src={Udderless1} alt="udderless-logo" className="udderless-logo"/>
      </div>
    </div>
  )
};
export default InterestsBody;