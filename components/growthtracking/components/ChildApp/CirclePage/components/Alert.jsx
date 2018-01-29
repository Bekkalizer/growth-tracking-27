import React from 'react';
import PropTypes from 'prop-types';

class Alert extends React.Component {
  state = {
    displayAlert: true
  };

  componentWillUpdate(nextProps) {
    if (this.props.visit.index !== nextProps.visit.index) {
      this.resetAlert();
    }
  }

  getAlerts = (visit, config) => {
    const { indicators } = config;

    const message = [];
    if (indicators.wfl && visit.wfl <= -2) {
      message.push(
        'Weight-for-Length is critically low, refer to district hospital'
      );
    }
    if (indicators.wfa && visit.wfa <= -2) {
      message.push(
        'Weight-for-Age is critically low, refer to district hospital'
      );
    }
    if (indicators.lhfa && visit.lhfa <= -2) {
      message.push(
        'Length-For-Age is critically low, refer to district hospital'
      );
    }
    if (indicators.muac && visit.muac < 12.5) {
      message.push('MUAC is critically low, refer to district hospital');
    }
    if (indicators.bfa && visit.bfa <= -2) {
      message.push('BMI-for-age is critically low, refer to district hospital');
    }
    if (indicators.acfa && visit.acfa <= -2) {
      message.push(
        'MUAC-for-age is critically low, refer to district hospital'
      );
    }
    return message;
  };

  toggleAlert = () =>
    this.setState(state => ({ displayAlert: !state.displayAlert }));

  resetAlert = () => this.setState({ displayAlert: true });

  render() {
    const { visit, config } = this.props;
    const { displayAlert } = this.state;

    const alertMessage = this.getAlerts(visit, config);

    if (!displayAlert || alertMessage.length === 0) return null;

    return (
      <div className="alert alert-danger">
        <button
          style={{
            border: 'none',
            padding: 0,
            background: 'none',
            fontWeight: 'bold',
            float: 'right'
          }}
          onClick={this.toggleAlert}
        >
          X
        </button>
        {alertMessage.map(message => <p key={Math.random()}>{message}</p>)}
      </div>
    );
  }
}

Alert.propTypes = {
  config: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.string])
  ).isRequired,
  visit: PropTypes.object.isRequired
};

export default Alert;
