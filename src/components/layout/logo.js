'use strict';

import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ name, icon, onClick }) => (
  <div className='logo' onClick={onClick}>
    <div className='icon'>{icon}</div>
    <div className='text'>{name}</div>
  </div>
);

Logo.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  onClick: PropTypes.func
};


export default Logo;