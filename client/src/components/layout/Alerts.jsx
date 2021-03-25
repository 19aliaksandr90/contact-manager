import React, { useContext } from 'react';
import map from 'lodash/map';

import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
  const { alerts } = useContext(AlertContext);

  return (
    alerts.length > 0 &&
    map(alerts, (alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    ))
  );
};

export default Alerts;
