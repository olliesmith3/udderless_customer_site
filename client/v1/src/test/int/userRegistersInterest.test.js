import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import '@testing-library/jest-dom/extend-expect'
import UdderlessBar from '../../components/UdderlessBar';

const server = setupServer(
  rest.post('/api/v1/interests', (req, res, ctx) => {
    return res(ctx.json({
      interest:{}
    }))
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('user registers interest and postcode is in range', () => {
  render(<UdderlessBar />);
  fireEvent.click(screen.getByRole('button', {name: 'Register Interest'}))

  const firstNameField = screen.getByLabelText(/first name/i);
  const postcodeField = screen.getByLabelText(/postcode/i);
  const emailField = screen.getByLabelText(/email address/i);
  const telField = screen.getByLabelText(/telephone number/i);

  fireEvent.change(firstNameField, { target: { value: 'Ollie' } });
  fireEvent.change(postcodeField, { target: { value: 'sw9 5jj' } });
  fireEvent.change(emailField, { target: { value: 'ollie@ollie.com' } });
  fireEvent.change(telField, { target: { value: '01234567890' } });

  const submitButton = screen.getByRole("button", {name: "I'm Interested!"});
  fireEvent.click(submitButton)

  const firstMessage = screen.getByText('Thank you for registering your interest, Ollie.');
  const secondMessage = screen.getByText('We already plan to deliver to this postcode. We will be in contact when we launch Udderless.');
  expect(firstMessage).toBeInTheDocument();
  expect(secondMessage).toBeInTheDocument();
});
