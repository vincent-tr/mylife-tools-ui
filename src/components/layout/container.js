'use strict';

import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => (
  <div>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ])
};

export default Container;