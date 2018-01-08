import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

const VisitSlider = ({ visits, setVisit }) => {
  const marks = visits.reduce((acc, value, index) => {
    acc[index] = value.date.toISOString().slice(0, 10);
    return acc;
  }, {});

  // TODO: toggle if predicted should be visible or not
  marks[visits.length] = 'Predicted';

  return (
    <div style={{ paddingBottom: 20, margin: 30 }}>
      <Slider
        min={0}
        max={Object.values(marks).length - 1}
        marks={marks}
        step={null}
        onChange={setVisit}
        defaultValue={visits.length - 1}
        trackStyle={{ height: 10 }}
        included={false}
        handleStyle={{
          height: 20,
          width: 20,
          marginTop: -5
        }}
        railStyle={{
          height: 10
        }}
        dotStyle={{
          height: 14,
          width: 14,
          marginLeft: -5,
          bottom: -8
        }}
        activeDotStyle={{
          height: 14,
          width: 14,
          marginLeft: -5,
          bottom: -8
        }}
      />
    </div>
  );
};

VisitSlider.propTypes = {
  setVisit: PropTypes.func.isRequired,
  visits: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default VisitSlider;
