import React from 'react';
import PropTypes from 'prop-types';

import { VisitList, Circle } from './components';
import ConfigButton from '../ConfigButton.jsx';
import PlotPage from '../PlotPage';

class CirclePage extends React.Component {
  state = {
    // Defaults to the most recent visit
    selectedVisit: this.props.visits[this.props.visits.length - 1],
    plotType: null,
    displayType: 'zscore',
    showMultiple: 'multiple'
  };

  setVisit = selectedVisit => {
    this.setState({ selectedVisit: this.props.visits[selectedVisit] });
  };

  setDisplayType = event => this.setState({ displayType: event.target.value });

  setPlotType = event => {
    if (!event) {
      this.setState({ plotType: null });
      return;
    }
    this.setState({ plotType: event.target.value });
  };

  setShowMultiple = event =>
    this.setState({ showMultiple: event.target.value });

  togglePlot = plotType => this.setState({ plotType });

  render() {
    const {
      visits,
      patient,
      toggleConfig,
      config
    } = this.props;
    const {
      selectedVisit,
      plotType,
      displayType,
      showMultiple
    } = this.state;

    const visit = selectedVisit;

    if (visit && plotType) {
      return (
        <PlotPage
          config={config}
          visits={visits}
          setVisit={this.setVisit}
          plotType={plotType}
          setPlotType={this.setPlotType}
          displayType={displayType}
          setDisplayType={this.setDisplayType}
          setShowMultiple={this.setShowMultiple}
          selectedVisit={selectedVisit}
          patient={patient}
          showMultiple={showMultiple}
        />
      );
    }

    return (
      <div>
        <ConfigButton toggleConfig={toggleConfig} />

        <VisitList
          setVisit={this.setVisit}
          visits={visits}
          visit={visit}
        />

        <div
          style={{
            fontSize: 20,
            paddingLeft: 24,
            paddingTop: 24,
            paddingBottom: 24
          }}
        >
          Showing z-scores for visit {visit.index + 1} on{' '}
          {visit.eventDate.toISOString().slice(0, 10)}:{' '}
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
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
            onClick={() => this.togglePlot('lhfa')}
            label="Length-for-age"
            zscore={visit.lhfa}
            config={config}
          />
          <Circle
            onClick={() => this.togglePlot('acfa')}
            label="MUAC-for-age"
            zscore={visit.acfa}
            rdata={visit.muac}
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
  patient: PropTypes.object.isRequired,
  config: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.string])
  ).isRequired
};

CirclePage.defaultProps = {
  visits: [],
};

export default CirclePage;
