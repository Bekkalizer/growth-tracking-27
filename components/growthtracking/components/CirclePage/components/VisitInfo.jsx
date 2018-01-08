import React from 'react';
import PropTypes from 'prop-types';

const VisitInfo = ({ visit }) => (
  <div>
    <div className="title small-vertical-spacing">
      Showing z-scores for visit: {visit.date.toISOString().slice(0, 10)}
    </div>
  </div>
);

VisitInfo.propTypes = {
  visit: PropTypes.object.isRequired
};

export default VisitInfo;
