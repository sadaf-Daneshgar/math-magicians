import React from 'react';
import renderer from 'react-test-renderer';
import Home from './home';

test('Home component snapshot', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
