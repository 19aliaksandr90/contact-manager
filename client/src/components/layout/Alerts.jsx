import React, { useContext } from 'react';
import map from 'lodash/map';

import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
  const alertsContext = useContext(AlertContext);

  return (
    alertsContext.alerts.length > 0 &&
    map(alertsContext.alerts, (alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    ))
  );
};

export default Alerts;
