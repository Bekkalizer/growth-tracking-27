import React from 'react';
import PropTypes from 'prop-types';

import ConfigPage from './components/ConfigPage';
import CirclePage from './components/CirclePage';
import {
  getWeightForLength,
  getWeightForAge,
  getLengthForAge,
  getMUACForAge
} from './functions';
import { defaultConfig, validateConfig } from './datasets/defaultConfig';

class App extends React.Component {
  state = {
    showConfig: false,
    config: {
      ...this.props.initialConfig
    }
  };

  componentWillMount() {
    if (!validateConfig(this.props.initialConfig)) {
      // TODO: Display DHIS modal to inform the user that the configuration was invalid and was reverted to default
      this.saveConfig(defaultConfig);
    }
  }

  saveConfig = config => {
    // TODO: Prevent save if no change
    // TODO: Add feedback when saving
    this.props.updateConfig('growthTracker', 'config', config);

    this.setState({
      config
    });
  };

  addAnimation = radius => {
    const keyframesStyle = `
        @-webkit-keyframes pulse {
          0% {-webkit-transform: scale(1, 1); opacity: 1.0;}
          100% {-webkit-transform: scale(${1.2 * radius}, ${1.2 *
      radius}); opacity: 0.0;}
        }`;
    const styleElement = document.createElement('style');

    document.head.appendChild(styleElement);

    styleElement.sheet.insertRule(
      keyframesStyle,
      styleElement.sheet.cssRules.length
    );
  };

  toggleConfig = () =>
    this.setState(state => ({ showConfig: !state.showConfig }));

  getPatientData = (trackedEntity, program) => {
    if (program === 'qbQ4TP1Yy3K') {
      // if mother
      return {
        firstname: trackedEntity.attributes.find(
          attr => attr.attribute === 'kim8r9m1oGE'
        ).value,
        lastname: trackedEntity.attributes.find(
          attr => attr.attribute === 'blDEf5Ld0fA'
        ).value,
        birthdate: trackedEntity.attributes.find(
          attr => attr.attribute === 'yj8BaYdkTA6'
        ).value
      };
    } // if child
    return {
      firstname: trackedEntity.attributes.find(
        attr => attr.attribute === 'kim8r9m1oGE'
      ).value,
      lastname: trackedEntity.attributes.find(
        attr => attr.attribute === 'blDEf5Ld0fA'
      ).value,
      gender:
        trackedEntity.attributes.find(attr => attr.attribute === 'uMSSNRDVcXS')
          .value === 'Female',
      birthdate: trackedEntity.attributes.find(
        attr => attr.attribute === 'yj8BaYdkTA6'
      ).value
    };
  }

  render() {
    const { events, trackedEntity, program } = this.props;
    const { config } = this.state;

    this.addAnimation(
      config.animation.radius || defaultConfig.animation.radius
    );

    if (events.length === 0) {
      return (
        <div className="alert alert-warning">
          No events have been registered
        </div>
      );
    }

    const patient = this.getPatientData(trackedEntity, program);
    console.log('patient:', patient);
    console.log('program:', program);

    const completedEvents = events.reduce((acc, val) => {
      if (!val.completedDate) return acc;
      if (acc.find(v => v.eventDate === val.eventDate)) return acc;
      acc.push(val);
      return acc;
    }, []);

    if (completedEvents.length === 0) {
      return (
        <div className="alert alert-warning">No completed events found.</div>
      );
    }

    // mother: qbQ4TP1Yy3K
    // child: pVHsqRBn4TY
    // if FBFMother program is selected
    if (program === 'qbQ4TP1Yy3K') {
      return null;
    } else if (program === 'U1xZvvCVWIM') {
      // if FBFChild program is selected
      const visits = completedEvents
        .sort((a, b) => a.eventDate > b.eventDate)
        .map((event, index) => {
          console.log(event);
          const eventDate = new Date(event.eventDate);
          const ageInMonths = Number(
            event.dataValues.find(val => val.dataElement === 'WeCHX2qGTPy').value
          );
          // Get a more accurate age by calculating age based on birth date and event date
          const ageInDays = Math.floor(
            (Date.parse(eventDate) - Date.parse(patient.birthdate)) / 86400000
          );
          const muac = Number(
            event.dataValues.find(val => val.dataElement === 'ySphlmZ7fKG').value
          );
          const weight = Number(
            event.dataValues.find(val => val.dataElement === 'KHyKhpRfVRS').value
          );
          const height = Number(
            event.dataValues.find(val => val.dataElement === 'VCYJkaP96KZ').value
          );

          const rawWfl = getWeightForLength(patient.gender, weight, height);
          const rawWfa = getWeightForAge(patient.gender, weight, ageInDays);
          const rawLhfa = getLengthForAge(patient.gender, height, ageInDays);
          const rawAcfa = getMUACForAge(patient.gender, muac, ageInDays);
          return {
            index,
            eventDate,
            ageInMonths,
            ageInDays,
            muac,
            weight,
            height,
            wfl: rawWfl === null ? null : Math.round(rawWfl * 100) / 100,
            wfa: rawWfa === null ? null : Math.round(rawWfa * 100) / 100,
            lhfa: rawLhfa === null ? null : Math.round(rawLhfa * 100) / 100,
            acfa: rawAcfa === null ? null : Math.round(rawAcfa * 100) / 100,
            completedBy: event.completedBy
          };
        });

      console.log('visits:', visits);

      return (
        <div>
          {!this.state.showConfig && (
            <CirclePage
              visits={visits}
              patient={patient}
              toggleConfig={this.toggleConfig}
              config={config}
            />
          )}
          {this.state.showConfig && (
            <ConfigPage
              config={config}
              toggleConfig={this.toggleConfig}
              saveConfig={this.saveConfig}
              addAnimation={this.addAnimation}
            />
          )}
        </div>
      );
    }
    return null;
  }
}

App.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  trackedEntity: PropTypes.object.isRequired,
  program: PropTypes.string.isRequired,
  updateConfig: PropTypes.func.isRequired,
  initialConfig: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.string])
  ).isRequired
};

export default App;
