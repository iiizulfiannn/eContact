import {render, screen} from '@testing-library/react-native';
import {App} from '../index';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/eContacts/i);
  expect(linkElement).toBeTruthy();
});
