import React from 'react';
import PropTypes from 'prop-types';

import { VisitList, Circle, ReferralAlert } from '../CirclePage/components';
import MotherPlot from '../MotherPlot';

class MotherCirclePage extends React.Component {
  state = {
    // Defaults to the most recent visit
    selectedVisit: this.props.visits[this.props.visits.length - 1],
    ploptType: null,
    showMultiple: 'multiple',
    displayAlert: true
  };

  setVisit = selectedVisit => {
    this.setState({ selectedVisit: this.props.visits[selectedVisit] });
  };

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

  toggleAlert = () => this.setState(state => ({ displayAlert: !state.displayAlert }));

  render() {
    const {
      visits,
      patient,
      config
    } = this.props;
    const {
      selectedVisit,
      plotType,
      showMultiple,
    } = this.state;

    const visit = selectedVisit;

    if (visit && plotType) {
      return (
        <MotherPlot
          config={config}
          visits={visits}
          setVisit={this.setVisit}
          plotType={plotType}
          setPlotType={this.setPlotType}
          setShowMultiple={this.setShowMultiple}
          selectedVisit={selectedVisit}
          patient={patient}
          showMultiple={showMultiple}
        />
      );
    }
    const mother = true;

    console.log('mother visits: ', visits);
    console.log('mother patient: ', patient);
    return (
      <div>
        <div>
          <VisitList
            setVisit={this.setVisit}
            visits={visits}
            visit={visit}
          />
        </div>
        <div
          style={{
            fontSize: 20,
            paddingLeft: 24,
            paddingTop: 24,
            paddingBottom: 24
          }}
        >
          Showing meassurements for visit {visit.index + 1} on{' '}
          {visit.eventDate.toISOString().slice(0, 10)}:{' '}
        </div>

        {
          this.state.displayAlert && (
            <ReferralAlert
              toggleAlert={this.toggleAlert}
              visit={visit}
            />
          )
        }
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <Circle
            onClick={() => this.togglePlot('height')}
            label="Height"
            rdata={visit.height}
            suffix={'cm'}
            config={config}
            mother={mother}
          />
          <Circle
            onClick={() => this.togglePlot('weight')}
            label="Weight"
            rdata={visit.weight}
            suffix={'kg'}
            config={config}
            mother={mother}
          />
          <Circle
            onClick={() => this.togglePlot('muac')}
            label="MUAC"
            rdata={visit.muac}
            suffix={'cm'}
            config={config}
            mother={mother}
          />
        </div>
      </div>
    );
  }
}

MotherCirclePage.propTypes = {
  visits: PropTypes.arrayOf(PropTypes.object),
  patient: PropTypes.object.isRequired,
  config: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.string])
  ).isRequired
};

MotherCirclePage.defaultProps = {
  visits: [],
};

export default MotherCirclePage;