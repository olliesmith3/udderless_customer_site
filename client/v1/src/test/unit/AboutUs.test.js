import { render, screen } from '@testing-library/react';
import AboutUs from '../../components/AboutUs';

test('About Us content is rendered', () => {
  render(<AboutUs />);
  const content = screen.getByTestId('description');
  expect(content).toBeInTheDocument();
});
