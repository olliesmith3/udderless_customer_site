import { render, screen } from '@testing-library/react';
import UdderlessBar from '../../components/UdderlessBar';

test('When the app is rendered the about us page shows but not the register interest', () => {
  render(<UdderlessBar />);
  const aboutContent = screen.getByTestId('description');
  expect(aboutContent).toBeInTheDocument();
  const interestForm = screen.queryByLabelText('First Name');
  expect(interestForm).not.toBeInTheDocument();
});

test('Renders the Navbar with image and link to Register Interest', () => {
  render(<UdderlessBar />);
  const udderlessImage = screen.getByRole('img', {name: 'udderless-1'});
  expect(udderlessImage).toBeInTheDocument();
  const registerInterestLink = screen.getByRole('button', {name: 'Register Interest'});
  expect(registerInterestLink).toBeInTheDocument();
  const AboutUsLink = screen.queryByRole('button', {name: 'About Us'});
  expect(AboutUsLink).not.toBeInTheDocument();
});