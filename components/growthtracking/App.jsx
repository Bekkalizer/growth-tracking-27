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

  predictVisit = (visitsInfo, patientGender) => {
    const lastVisit = visitsInfo[visitsInfo.length - 1];
    const secondLastVisit = visitsInfo[visitsInfo.length - 2];

    const predictedAge = lastVisit.age + 30.25;
    const ageDiff = (lastVisit.age - secondLastVisit.age) / 30.25;

    const tmpWeight = lastVisit.weight * 2 - secondLastVisit.weight;
    const tmpHeight = lastVisit.height * 2 - secondLastVisit.height;
    const tmpMuac = lastVisit.muac * 2 - secondLastVisit.muac;

    const predictedWeight =
      lastVisit.weight + (tmpWeight - lastVisit.weight) / ageDiff;
    const predictedHeight =
      lastVisit.height + (tmpHeight - lastVisit.height) / ageDiff;
    const predictedMuac = lastVisit.muac + (tmpMuac - lastVisit.muac) / ageDiff;
    const predictedBmi = predictedWeight / (predictedHeight / 100) ** 2;

    const predWfl = getWeightForLength(
      patientGender,
      predictedWeight,
      predictedHeight
    );
    const predWfa = getWeightForAge(
      patientGender,
      predictedWeight,
      predictedAge
    );
    const predLfa = getLengthForAge(
      patientGender,
      predictedHeight,
      predictedAge
    );
    const predBfa = getBMIForAge(patientGender, predictedBmi, predictedAge);
    const predAcfa = getMUACForAge(patientGender, predictedMuac, predictedAge);

    return {
      index: lastVisit.index + 1,
      date: predictedAge,
      age: predictedAge,
      weight: predictedWeight,
      height: predictedHeight,
      muac: predictedMuac,
      bmi: predictedBmi,
      wfl: predWfl === null ? null : Math.round(predWfl * 100) / 100,
      wfa: predWfa === null ? null : Math.round(predWfa * 100) / 100,
      lfa: predLfa === null ? null : Math.round(predLfa * 100) / 100,
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

    // filter identical event dates?
    const visits = events
      .reduce((acc, val) => {
        if (!val.completedDate) return acc;
        if (acc.find(v => v.eventDate === val.eventDate)) return acc;
        acc.push(val);
        return acc;
      }, [])
      .sort((a, b) => a.eventDate > b.eventDate)
      .map((event, index) => {
        console.log(event);
        const date = new Date(event.eventDate);
        const age =
          event.dataValues.find(val => val.dataElement === 'WeCHX2qGTPy')
            .value * 30.25;
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
        const rawWfa = getWeightForAge(patient.gender, weight, age);
        const rawLfa = getLengthForAge(patient.gender, height, age);
        const rawBfa = getBMIForAge(patient.gender, bmi, age);
        const rawAcfa = getMUACForAge(patient.gender, muac, age);
        return {
          index,
          date,
          age,
          muac,
          weight,
          height,
          wfl: rawWfl === null ? null : Math.round(rawWfl * 100) / 100,
          wfa: rawWfa === null ? null : Math.round(rawWfa * 100) / 100,
          lfa: rawLfa === null ? null : Math.round(rawLfa * 100) / 100,
          bfa: rawBfa === null ? null : Math.round(rawBfa * 100) / 100,
          acfa: rawAcfa === null ? null : Math.round(rawAcfa * 100) / 100,
          completedBy: event.completedBy
        };
      });

    console.log('visits:', visits);

    // TODO: Re-add predicted visit
    const predictedVisit = [
      visits[visits.length - 1],
      this.predictVisit(visits, patient.gender)
    ];
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
