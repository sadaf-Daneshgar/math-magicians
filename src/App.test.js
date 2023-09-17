import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('App component snapshot', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
