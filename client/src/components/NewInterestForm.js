import React, { useState } from 'react'

const NewInterestForm = props => {
  const  [interest, setInterest] = useState(props.initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target
    setInterest({ ...interest, [name]: value })
  };


  return (
    <form onSubmit={event => {
      event.preventDefault()
      if ((!interest.first_name || !interest.postcode) || (!interest.email && !interest.tel)) return;
      props.addInterest(interest)
      setInterest(props.initialFormState)
    }}>
      <label>First Name</label>
      <input type="text" name="first_name" value={interest.first_name} onChange={handleInputChange} ></input><br />
      <label>AND Postcode</label>
      <input type="text" name="postcode" value={interest.postcode} onChange={handleInputChange} ></input><br />
      <label>AND Email Address</label>
      <input type="text" name="email" value={interest.email} onChange={handleInputChange} ></input><br />
      <label>OR Telephone Number</label>
      <input type="text" name="tel" value={interest.tel} onChange={handleInputChange} ></input><br />
      <button>Register Interest</button>
    </form>
  )
}

export default NewInterestForm;



// import React, { Component } from 'react'

// export class InterestForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstName: "Lizzy",
//       postCode: "SW1A 1AA"
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   render() {
//     let formFields = {}
//     return (
//       <form onSubmit={
//         (e) => { 
//           e.preventDefault();
//           this.props.handleFormSubmit(
//             formFields.firstName.value,
//             formFields.postCode.value
//           ); 
//           e.target.reset();
//         }
//       }><label>
//           First Name:
//           <input ref={input => formFields.firstName = input} 
//           type="text"
//           name="firstName"
//           value={this.state.firstName}
//           onChange={this.handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Postcode:
//           <input ref={input => formFields.postCode = input} 
//           type="text"
//           name="postCode"
//           value={this.state.postCode}
//           onChange={this.handleInputChange} />
//         </label>
//         <br />
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// export default InterestForm
