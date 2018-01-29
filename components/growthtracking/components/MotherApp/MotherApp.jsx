import React from 'react';
import PropTypes from 'prop-types';

import MotherCirclePage from './MotherCirclePage.jsx';

class MotherApp extends React.Component {
  getPatientData = trackedEntity => ({
    firstname: trackedEntity.attributes.find(
      attr => attr.attribute === 'kim8r9m1oGE'
    ).value,
    lastname: trackedEntity.attributes.find(
      attr => attr.attribute === 'blDEf5Ld0fA'
    ).value,
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
        return {
          index,
          eventDate,
          muac,
          weight,
          height,
          ageInDays,
          completedBy: event.completedBy
        };
      });

    return (
      <MotherCirclePage
        visits={visits}
        config={config}
        toggleConfig={toggleConfig}
        config={config}
      />
    );
  }
}

MotherApp.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  trackedEntity: PropTypes.object.isRequired
};

export default MotherApp;
