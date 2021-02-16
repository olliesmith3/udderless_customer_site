import { render, screen } from '@testing-library/react';
import ThankYou from '../components/ThankYou';

var interestOne = {
  email: "ollie@ollie.com",
  first_name: "Ollie",
  postcode: "SW9 5JJ",
  tel: "0123455677"
}

test('renders positive thank you message for a given name and postcode', () => {
  render(<ThankYou lastInterest={interestOne}/>);
  const firstMessage = screen.getByText('Thank you for registering your interest, Ollie.');
  const secondMessage = screen.getByText('We already plan to deliver to this postcode. We will be in contact when we launch Udderless.');
  expect(firstMessage).toBeInTheDocument();
  expect(secondMessage).toBeInTheDocument();
});