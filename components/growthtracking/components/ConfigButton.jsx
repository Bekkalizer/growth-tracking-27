import React from 'react';
import PropTypes from 'prop-types';

const ConfigButton = ({ toggleConfig }) => (
  <div style={{ float: 'right' }}>
    <button
      className="btn btn-primary small-horizontal-spacing"
      onClick={toggleConfig}
    >
      <i
        className="fa fa-cog fa"
        style={{ fontSize: '18px' }}
        aria-hidden="true"
      />
    </button>
  </div>
);

ConfigButton.propTypes = {
  toggleConfig: PropTypes.func.isRequired,
};

export default ConfigButton;
