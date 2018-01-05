import React from 'react';
import PropTypes from 'prop-types';

import { VisitInfo, VisitSlider, Circle } from './components';
import ConfigButton from '../ConfigButton.jsx';
import PlotPage from '../PlotPage';

class CirclePage extends React.Component {
  state = {
    // Defaults to the most recent visit
    selectedVisit: this.props.visits.length - 1,
    plotType: null,
    displayType: 'zscore', // TODO
    showMultiple: false,
  };

  setVisit = selectedVisit => {
    this.setState({ selectedVisit });
    /*
    if (visit >= Object.values(this.props.visits).length) {
      this.setState({ visit: this.props.nextVisit });
    } else {
      this.setState({ visit: this.props.visits[visit] });
    }
    */
  };

  setDisplayType = displayType => this.setState({ displayType });

  setShowMultiple = () =>
    this.setState(state => ({ showMultiple: !state.showMultiple }));

  togglePlot = plotType => this.setState({ plotType });

  render() {
    const { visits, patientInfo, toggleConfig, config } = this.props;
    const { selectedVisit, plotType, displayType, showMultiple } = this.state;

    const visit = visits[selectedVisit];

    if (visit && plotType) {
      return (
        <PlotPage
          config={config}
          visits={visits}
          plotType={plotType}
          displayType={displayType}
          togglePlot={this.togglePlot}
          setDisplayType={this.setDisplayType}
          setShowMultiple={this.setShowMultiple}
          selectedVisit={selectedVisit}
          patientInfo={patientInfo}
          showMultiple={showMultiple}
        />
      );
    }

    return (
      <div>
        <ConfigButton toggleConfig={toggleConfig} />

        <VisitInfo visit={visit} />

        <VisitSlider setVisit={this.setVisit} visits={visits} />

        <hr />

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Circle
            onClick={() => this.togglePlot('wfl')}
            label="Weight-for-length"
            zscore={visit.wfl}
            config={config}
          />
          <Circle
            onClick={() => this.togglePlot('wfa')}
            label="Weight-for-age"
            zscore={visit.wfa}
            config={config}
          />
          <Circle
            onClick={() => this.togglePlot('lfa')}
            label="Length-for-age"
            zscore={visit.lfa}
            config={config}
          />
          <Circle
            onClick={() => this.togglePlot('bfa')}
            label="BMI-for-age"
            zscore={visit.bfa}
            config={config}
          />
          <Circle
            onClick={() => this.togglePlot('hcfa')}
            label="HC-for-age"
            zscore={visit.hcfa}
            config={config}
          />
          <Circle
            onClick={() => this.togglePlot('acfa')}
            label="MUAC-for-age"
            zscore={visit.acfa}
            config={config}
          />
          <Circle
            onClick={() => this.togglePlot('tsfa')}
            label="TSF-for-age"
            zscore={visit.tsfa}
            config={config}
          />
          <Circle
            onClick={() => this.togglePlot('ssfa')}
            label="SSF-for-age"
            zscore={visit.ssfa}
            config={config}
          />
        </div>
      </div>
    );
  }
}

CirclePage.propTypes = {
  visits: PropTypes.arrayOf(PropTypes.object),
  toggleConfig: PropTypes.func.isRequired,
  patientInfo: PropTypes.object.isRequired,
  config: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.string]),
  ).isRequired,
};

CirclePage.defaultProps = {
  visits: [],
};

export default CirclePage;
