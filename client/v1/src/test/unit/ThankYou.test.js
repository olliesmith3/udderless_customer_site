import { render, screen } from '@testing-library/react';
import ThankYou from '../../components/ThankYou';

test('renders positive thank you message for a given name and postcode', () => {
  render(<ThankYou lastInterest={interestOne}/>);
  const firstMessage = screen.getByText('Thank you for registering your interest, Ollie.');
  const secondMessage = screen.getByText('We already plan to deliver to this postcode. We will be in contact when we launch Udderless.');
  expect(firstMessage).toBeInTheDocument();
  expect(secondMessage).toBeInTheDocument();
});

test('renders negative thank you message for a given name and postcode that is outside of delivery range', () => {
  render(<ThankYou lastInterest={interestTwo}/>);
  const firstMessage = screen.getByText('Thank you for registering your interest, Ollie.');
  const secondMessage = screen.getByText('We do not currently plan to deliver to this postcode. If more interest for this postcode is shown then it will be added to our range.');
  expect(firstMessage).toBeInTheDocument();
  expect(secondMessage).toBeInTheDocument();
});

test('renders positive thank you message for lowercase postcode', () => {
  render(<ThankYou lastInterest={interestThree}/>);
  const firstMessage = screen.getByText('Thank you for registering your interest, Ollie.');
  const secondMessage = screen.getByText('We already plan to deliver to this postcode. We will be in contact when we launch Udderless.');
  expect(firstMessage).toBeInTheDocument();
  expect(secondMessage).toBeInTheDocument();
});

const interestOne = {
  email: "ollie@ollie.com",
  first_name: "Ollie",
  postcode: "SW9 5JJ",
  tel: "0123455677"
}

const interestTwo = {
  email: "ollie@ollie.com",
  first_name: "Ollie",
  postcode: "RH5 5JJ",
  tel: "0123455677"
}

const interestThree = {
  email: "ollie@ollie.com",
  first_name: "Ollie",
  postcode: "sw11 5JJ",
  tel: "0123455677"
}
