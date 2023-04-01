import { render } from '@testing-library/react';
import Main from '../components/Main';

test('renders main div container', () => {
  const result = render(<Main />);
  const mainDiv = result.container.querySelector('#mainDiv')
  const mainElement = mainDiv;
  expect(mainElement).toBeInTheDocument();
});

