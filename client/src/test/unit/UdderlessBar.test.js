import { render, screen } from '@testing-library/react';
import UdderlessBar from '../../components/UdderlessBar';

test('When the app is rendered the about us page shows but not the register interest', () => {
  render(<UdderlessBar />);
  const aboutContent = screen.getByTestId('description');
  expect(aboutContent).toBeInTheDocument();
  const interestForm = screen.queryByRole('form', {name: 'interest form'});
  expect(interestForm).toBeNull();
});