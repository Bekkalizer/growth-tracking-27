import React from 'react';
import PropTypes from 'prop-types';


class ReferalAlert extends React.Component {


  checkAlert = (visit) => {
    const message = [];
    if (visit.wfl < -2) {
      message.push('Weight-for-Length is critically low, refer to district hospital');
    }
    if (visit.wfa < - 2) {
      message.push('Weight-for-Age is critically low, refer to district hospital');
    }
    if (visit.lhfa < -2) {
      message.push('Length-For-Age is critically low, refer to district hospital');
    } if (visit.muac < -12.5) {
      message.push('MUAC is critically low, refer to district hospital');
    }
    return message;
  };

  render() {
    const {
      toggleAlert,
      visit
    } = this.props;

    const alertMsg = this.checkAlert(visit);

    if (alertMsg.length > 0) {
      return (
        <div className="alert alert-warning">
          <div>
            {alertMsg.map((m, index) => (
              <p key={Math.random()} >{m}</p>
            ))}
          </div>
          <button className="error-close-button"
            style={{
              border: 'none',
              padding: 0,
              background: 'none',
              color: '#ffa100'
            }}
            onClick={() => toggleAlert()}
          >
            X
          </button>
        </div>
      );
    }
    return null;
  }
}

ReferalAlert.propTypes = {
  toggleAlert: PropTypes.func.isRequired,
}

export default ReferalAlert;