import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const SelectFormControl = ({as, value, selectFunction, options}) => {
  return (
    <div>
      
    </div>
  )
}

SelectFormControl.propTypes = {
  as: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  selectFunction: PropTypes.func.isRequired,
  option: PropTypes.string.isRequired
}

export default SelectFormControl
