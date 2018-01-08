import React from 'react';
import PropTypes from 'prop-types';

import PlotPage from './components/PlotPage';
import ConfigPage from './components/ConfigPage';
import CirclePage from './components/CirclePage';
import {
  getWeightForLength,
  getWeightForAge,
  getLengthForAge,
  getBMIForAge,
  getHCForAge,
  getMUACForAge,
  getTSForAge,
  getSSForAge,
  indicatorConfigs,
  getPlotConfig,
} from './functions';
import { defaultConfig, validateConfig } from './datasets/defaultConfig';

// TODO: Temporary test data, replace once API is connected
import { patientInfo, rawVisits } from './sampledata';

class App extends React.Component {
  state = {
    showConfig: false,
    config: {
      ...this.props.initialConfig,
    },
  };

  componentWillMount() {
    if (!validateConfig(this.props.initialConfig)) {
      // TODO: Display DHIS modal to inform the user that the configuration was invalid and was reverted to default
      this.saveConfig(defaultConfig);
    }
  }

  getVisitInfo = (female, visit) => {
    const { weight, height, muac, hc, ts, ss, age, bmi } = visit;

    const rawWfl = getWeightForLength(female, weight, height);
    const rawWfa = getWeightForAge(female, weight, age);
    const rawLfa = getLengthForAge(female, height, age);
    const rawBfa = getBMIForAge(female, bmi, age);
    const rawHcfa = getHCForAge(female, hc, height);
    const rawAcfa = getMUACForAge(female, muac, age);
    const rawTsfa = getTSForAge(female, ts, height);
    const rawSsfa = getSSForAge(female, ss, age);
    return {
      ...visit,
      wfl: rawWfl === null ? null : Math.round(rawWfl * 100) / 100,
      wfa: rawWfa === null ? null : Math.round(rawWfa * 100) / 100,
      lfa: rawLfa === null ? null : Math.round(rawLfa * 100) / 100,
      bfa: rawBfa === null ? null : Math.round(rawBfa * 100) / 100,
      hcfa: rawHcfa === null ? null : Math.round(rawHcfa * 100) / 100,
      acfa: rawAcfa === null ? null : Math.round(rawAcfa * 100) / 100,
      tsfa: rawTsfa === null ? null : Math.round(rawTsfa * 100) / 100,
      ssfa: rawSsfa === null ? null : Math.round(rawSsfa * 100) / 100,
    };
  };

  /*
  predictVisit = (visitsInfo, patientinfo, female) => {
    const lastVisit = visitsInfo[visitsInfo.length - 1];
    const secondLastVisit = visitsInfo[visitsInfo.length - 2];
    const weight = lastVisit.weight * 2 - secondLastVisit.weight;
    const height = lastVisit.height * 2 - secondLastVisit.height;
    const bmi = weight / (height / 100) ** 2;
    const muac = lastVisit.muac * 2 - secondLastVisit.muac;
    const visitDate = new Date(
      lastVisit.visitDate.getTime() * 2 - secondLastVisit.visitDate.getTime(),
    );
    const age =
      (visitDate -
        new Date(
          patientinfo.year_of_birth,
          patientinfo.month_of_birth,
          patientinfo.date_of_birth,
        )) /
      (1000 * 3600 * 24);

    const nextVisit = this.getVisitInfo(female, {
      visitDate,
      weight,
      height,
      muac,
      bmi,
      age,
    });

    return [lastVisit, nextVisit];
  };
  */

  saveConfig = config => {
    // TODO: Prevent save if no change
    // TODO: Add feedback when saving
    this.props.updateConfig('growthTracker', 'config', config);

    this.setState({
      config,
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
      styleElement.sheet.cssRules.length,
    );
  };

  toggleConfig = () =>
    this.setState(state => ({ showConfig: !state.showConfig }));

  render() {
    const { events, trackedEntity } = this.props;
    const { config, plotType } = this.state;

    this.addAnimation(
      config.animation.radius || defaultConfig.animation.radius,
    );

    if (events.length === 0) {
      return (
        <div className="alert alert-warning">
          No events have been registered
        </div>
      );
    }

    // filter identical event dates?
    const completedEvents = events
      .filter(event => event.completedDate)
      .sort((a, b) => a.eventDate > b.eventDate)
      .map((event, index) => ({
        index,
        date: event.eventDate,
        age: event.dataValues.find(val => val.dataElement === 'WeCHX2qGTPy')
          .value,
        muac: event.dataValues.find(val => val.dataElement === 'ySphlmZ7fKG')
          .value,
        weight: event.dataValues.find(val => val.dataElement === 'KHyKhpRfVRS')
          .value,
        height: event.dataValues.find(val => val.dataElement === 'VCYJkaP96KZ')
          .value,
      }));

    console.log(completedEvents);

    const patient = {
      firstname: trackedEntity.attributes.find(
        attr => attr.attribute === 'kim8r9m1oGE',
      ).value,
      lastname: trackedEntity.attributes.find(
        attr => attr.attribute === 'blDEf5Ld0fA',
      ).value,
      gender: trackedEntity.attributes.find(
        attr => attr.attribute === 'uMSSNRDVcXS',
      ).value,
      birthdate: trackedEntity.attributes.find(
        attr => attr.attribute === 'yj8BaYdkTA6',
      ).value,
    };
    console.log(patient);

    // TODO: Replace following with real data listed above
    // remove tsfa, ssfa, hcfa
    //
    //
    //

    const female = patientInfo.gender === 'Female';

    // TODO: Replace this function once we get real data
    const detailedVisits = rawVisits.map(visit => {
      const { weight, height, visitDate } = visit;

      const age =
        (visitDate -
          new Date(
            patientInfo.year_of_birth,
            patientInfo.month_of_birth,
            patientInfo.date_of_birth,
          )) /
        (1000 * 3600 * 24);
      const bmi = weight / (height / 100) ** 2;
      return { ...visit, age, bmi };
    });

    const visits = detailedVisits.map(visit =>
      this.getVisitInfo(female, visit),
    );

    // const predictedVisit = this.predictVisit(visits, female);

    return (
      <div>
        {!this.state.showConfig && (
          <CirclePage
            visits={visits}
            patientInfo={patientInfo}
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
  dataElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateConfig: PropTypes.func.isRequired,
  initialConfig: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.string]),
  ).isRequired,
};

export default App;
