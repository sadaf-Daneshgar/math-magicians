import React from 'react';
import renderer from 'react-test-renderer';
import ShowQuote from './quote';

test('ShowQuote component snapshot', () => {
  const tree = renderer.create(<ShowQuote />).toJSON();
  expect(tree).toMatchSnapshot();
});
