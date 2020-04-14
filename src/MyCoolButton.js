/* eslint-disable react/button-has-type */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './MyCoolButton.css';

const MyCoolButton = ({ type, title, onClick }) => {
  return (
    <button
      type={type}
      className="container"
      onClick={onClick}
    >
      {title}
    </button>
  );
}

MyCoolButton.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

MyCoolButton.defaultProps = {
  type: 'button',
  onClick: () => { },
};

export default MyCoolButton;
