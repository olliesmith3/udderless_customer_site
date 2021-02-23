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

test('user does not enter email or tel and form is not submitted', () => {
  render(<UdderlessBar />);
  fireEvent.click(screen.getByRole('button', {name: 'Register Interest'}))

  const firstNameField = screen.getByLabelText(/first name/i);
  const postcodeField = screen.getByLabelText(/postcode/i);

  fireEvent.change(firstNameField, { target: { value: 'Ollie' } });
  fireEvent.change(postcodeField, { target: { value: 'sw9 5jj' } });

  const submitButton = screen.getByRole("button", {name: "I'm Interested!"});
  fireEvent.click(submitButton)

  const thankYouMessage = screen.queryByLabelText('Thank you for registering your interest, Ollie.');
  expect(thankYouMessage).not.toBeInTheDocument();
  expect(postcodeField).toBeInTheDocument();
});