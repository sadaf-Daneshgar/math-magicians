import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';

// Import the component you want to test
import InputNumber from './Input';

test('InputNumber component snapshot', () => {
  const props = {
    className: 'test-class',
    value: '123',
  };

  const tree = renderer.create(<InputNumber {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('InputNumber prop types validation', () => {
  const props = {
    className: 'test-class',
    value: '123',
  };

  const propTypesError = PropTypes.checkPropTypes(
    InputNumber.propTypes,
    props,
    'prop',
    InputNumber.name,
  );

  expect(propTypesError).toBeUndefined();
});
