import { render, screen } from '@testing-library/react';
import NewInterestForm from '../../components/NewInterestForm';

test('Form is rendered with empty text fields', () => {
  render(<NewInterestForm initialFormState={initialFormState}/>);
  const firstNameField = screen.getByLabelText('First Name');
  const postcodeField = screen.getByLabelText('Postcode');
  const emailField = screen.getByLabelText('Email Address');
  const telField = screen.getByLabelText('Telephone Number');
  expect(firstNameField).toHaveTextContent("");
  expect(postcodeField).toHaveTextContent("");
  expect(emailField).toHaveTextContent("");
  expect(telField).toHaveTextContent("");
});

const initialFormState = {
  first_name: '',
  postcode: '',
  email: '',
  tel: ''
};