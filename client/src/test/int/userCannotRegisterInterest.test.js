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

test('user attempts to register interest without filling in first name', async () => {
  render(<UdderlessBar />);
  fireEvent.click(screen.getByRole('button', {name: 'Register Interest'}))

  const firstNameField = await screen.findByLabelText(/first name/i);
  const postcodeField = screen.getByLabelText(/postcode/i);
  const emailField = screen.getByLabelText(/email address/i);
  const telField = screen.getByLabelText(/telephone number/i);

  fireEvent.change(firstNameField, { target: { value: 'asdeasd' } });
  fireEvent.change(postcodeField, { target: { value: 'sw9 5jj' } });
  fireEvent.change(emailField, { target: { value: 'ollie@ollie.com' } });
  fireEvent.change(telField, { target: { value: '01234567890' } });

  const submitButton = screen.getByRole("button", {name: "I'm Interested!"});
  fireEvent.click(submitButton)

  const firstMessage = screen.queryByText('Thank you for registering your interest, Ollie.');
  expect(firstMessage).not.toBeInTheDocument();
  expect(postcodeField).toHaveTextContent("");
});
