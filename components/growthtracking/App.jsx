import React from 'react';
import PropTypes from 'prop-types';

import ConfigPage from './components/ConfigPage';
import CirclePage from './components/CirclePage';
import {
  getWeightForLength,
  getWeightForAge,
  getLengthForAge,
  getBMIForAge,
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

  predictVisit = (visits, gender) => {
    if (visits.length < 2) return null;

    const lastVisit = visits[visits.length - 1];
    const secondLastVisit = visits[visits.length - 2];

    // Using +30 days instead of +30.25. When adding just one month to the previous total, +30 is enough accuracy.
    const ageInDays = lastVisit.ageInDays + 30;

    // If predicted age is higher than 726, we have passed the 24 month threshold for the child and should not predict any future visits
    if (ageInDays > 726) return null;

    const ageInMonths = lastVisit.ageInMonths + 1;
    const ageDiff = (lastVisit.ageInDays - secondLastVisit.ageInDays) / 30.25;

    const weight =
      Math.round(
        (lastVisit.weight +
          (lastVisit.weight * 2 - secondLastVisit.weight - lastVisit.weight) /
            ageDiff) *
          10
      ) / 10;
    const height =
      Math.round(
        (lastVisit.height +
          (lastVisit.height * 2 - secondLastVisit.height - lastVisit.height) /
            ageDiff) *
          10
      ) / 10;
    const muac =
      Math.round(
        (lastVisit.muac +
          (lastVisit.muac * 2 - secondLastVisit.muac - lastVisit.muac) /
            ageDiff) *
          10
      ) / 10;
    const bmi = weight / (height / 100) ** 2;

    const predWfl = getWeightForLength(gender, weight, height);
    const predWfa = getWeightForAge(gender, weight, ageInDays);
    const predLhfa = getLengthForAge(gender, height, ageInDays);
    const predBfa = getBMIForAge(gender, bmi, ageInDays);
    const predAcfa = getMUACForAge(gender, muac, ageInDays);

    return {
      predicted: true,
      index: lastVisit.index + 1,
      eventDate: new Date(
        new Date(lastVisit.eventDate).setDate(
          lastVisit.eventDate.getDate() + 30.25
        )
      ),
      ageInDays,
      ageInMonths,
      weight,
      height,
      muac,
      bmi,
      wfl: predWfl === null ? null : Math.round(predWfl * 100) / 100,
      wfa: predWfa === null ? null : Math.round(predWfa * 100) / 100,
      lhfa: predLhfa === null ? null : Math.round(predLhfa * 100) / 100,
      bfa: predBfa === null ? null : Math.round(predBfa * 100) / 100,
      acfa: predAcfa === null ? null : Math.round(predAcfa * 100) / 100
    };
  };

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

  render() {
    const { events, trackedEntity } = this.props;
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

    const patient = {
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
    console.log('patient:', patient);

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

        const bmi = weight / (height / 100) ** 2;

        const rawWfl = getWeightForLength(patient.gender, weight, height);
        const rawWfa = getWeightForAge(patient.gender, weight, ageInDays);
        const rawLhfa = getLengthForAge(patient.gender, height, ageInDays);
        const rawBfa = getBMIForAge(patient.gender, bmi, ageInDays);
        const rawAcfa = getMUACForAge(patient.gender, muac, ageInDays);
        return {
          index,
          eventDate,
          ageInMonths,
          ageInDays,
          muac,
          weight,
          height,
          bmi,
          wfl: rawWfl === null ? null : Math.round(rawWfl * 100) / 100,
          wfa: rawWfa === null ? null : Math.round(rawWfa * 100) / 100,
          lhfa: rawLhfa === null ? null : Math.round(rawLhfa * 100) / 100,
          bfa: rawBfa === null ? null : Math.round(rawBfa * 100) / 100,
          acfa: rawAcfa === null ? null : Math.round(rawAcfa * 100) / 100,
          completedBy: event.completedBy
        };
      });

    console.log('visits:', visits);

    const predictedVisit = this.predictVisit(visits, patient.gender);
    console.log('predicted:', predictedVisit);

    return (
      <div>
        {!this.state.showConfig && (
          <CirclePage
            visits={visits}
            predictedVisit={predictedVisit}
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
}

App.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  trackedEntity: PropTypes.object.isRequired,
  updateConfig: PropTypes.func.isRequired,
  initialConfig: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.string])
  ).isRequired
};

export default App;
