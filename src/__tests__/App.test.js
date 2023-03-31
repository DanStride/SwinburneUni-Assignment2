import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

test('renders navbar', () => {
  render(<App />);
  const navElement = screen.getByText('Melbourne Football Club');
  expect(navElement).toBeInTheDocument();
});

test('renders aside section', () => {
  render(<App />);
  const asideElement = screen.getByText('Upcoming Matches:');
  expect(asideElement).toBeInTheDocument();
})

test('button closes aside section', () => {
  const result = render(<App />);
  const button = result.container.querySelector('#asideToggle');
  fireEvent.click(button, new MouseEvent('click'));
  const asideElement = screen.queryByText('Upcoming Matches:');
  expect(asideElement).not.toBeInTheDocument();
})

test('renders privacy statement on click', () => {
  const result = render(<App />);
  const button = result.container.querySelector('#privacy-policy-button');
  fireEvent.click(button, new MouseEvent('click'));
  const privacyElement = screen.getByText('Privacy Policy');
  expect(privacyElement).toBeInTheDocument();
})

test('closes privacy statement on click', () => {
  const result = render(<App />);
  const button = result.container.querySelector('#privacy-policy-button');
  fireEvent.click(button, new MouseEvent('click'));
  const closeButton = result.container.querySelector('#close-button')
  fireEvent.click(closeButton, new MouseEvent('click'));
  const privacyElement = screen.queryByText('Privacy Policy');
  expect(privacyElement).not.toBeInTheDocument();
})