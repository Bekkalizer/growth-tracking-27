import React from 'react';
import PropTypes from 'prop-types';


class ReferalAlert extends React.Component {


  checkAlert = (visit) => {
    const message = [];
    console.log('check visit: ', visit);
    if (visit.wfl < -2) {
      console.log('check wfl: ', visit.wfl);
      message.push('Weight-for-Length is critically low, refer to district hospital');
    }
    if (visit.wfa < - 2) {
      console.log('check wfa: ', visit.wfa);
      message.push('Weight-for-Age is critically low, refer to district hospital');
    }
    if (visit.lhfa < -2) {
      console.log('check wfa: ', visit.lhfa);
      message.push('Length-For-Age is critically low, refer to district hospital');
    } if (visit.muac < -12.5) {
      console.log('check wfa: ', visit.muac);
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

    if (alertMsg !== null) {
      return (
        <div className="alert alert-warning">
          <div>
            {alertMsg.map(m => (
              <p>{m}</p>
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

export default ReferalAlert;