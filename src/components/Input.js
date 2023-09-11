import React from 'react';
import PropTypes from 'prop-types';

function InputNumber({ className, value }) {
  return <div className={className}>{value}</div>;
}

InputNumber.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputNumber;
