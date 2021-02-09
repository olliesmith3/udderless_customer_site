import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewInterestForm from './NewInterestForm';

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
    .then(res=>( console.log(res)))
    .catch( error => console.log(error))
    setInterests([...interests, interest]);
  };

  useEffect(() => {
    axios.get('/api/v1/interests.json')
        .then(res => setInterests(res.data))
      }, []);

  const [interests, setInterests] = useState([]);

  return (
    <div>
      <div>
        <NewInterestForm addInterest={addInterest} initialFormState={initialFormState} />
      </div>
      <div className="interests-list">
        {interests.map((interest, index) => (
            <div key={index}>
              {interest.first_name} | {interest.postcode} | {interest.email} | {interest.tel}
            </div>
          ))}
      </div>
    </div>
  )
};
export default InterestsBody;