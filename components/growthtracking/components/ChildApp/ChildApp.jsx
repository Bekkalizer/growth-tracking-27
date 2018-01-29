import React from 'react';
import PropTypes from 'prop-types';

import CirclePage from './CirclePage';
import {
  getWeightForLength,
  getWeightForAge,
  getLengthForAge,
  getMUACForAge
} from '../../functions';

class ChildApp extends React.Component {
  getPatientData = trackedEntity => ({
    firstname: trackedEntity.attributes.find(
      attr => attr.attribute === 'kim8r9m1oGE'
    ).value,
    lastname: trackedEntity.attributes.find(
      attr => attr.attribute === 'blDEf5Ld0fA'
    ).value,
    gender:
      trackedEntity.attributes.find(attr => attr.attribute === 'uMSSNRDVcXS') &&
      trackedEntity.attributes.find(attr => attr.attribute === 'uMSSNRDVcXS')
        .value === 'Female',
    birthdate: trackedEntity.attributes.find(
      attr => attr.attribute === 'yj8BaYdkTA6'
    ).value
  });

  render() {
    const { events, trackedEntity, config, toggleConfig } = this.props;

    if (events.length === 0) {
      return (
        <div className="alert alert-warning">
          No events have been registered
        </div>
      );
    }

    const patient = this.getPatientData(trackedEntity);
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
      <CirclePage
        visits={visits}
        patient={patient}
        toggleConfig={toggleConfig}
        config={config}
      />
    );
  }
}

ChildApp.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  trackedEntity: PropTypes.object.isRequired
};

export default ChildApp;
