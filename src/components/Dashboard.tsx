import React from "react";

import Timer from './Timer';
import Stars from './Stars';
import Moves from './Moves';
import DashboardButtons from './DashboardButtons';
import './Dashboard.scss';

class Dashboard extends React.PureComponent {
  render() {
    return (
      <div className="Dashboard">
        <DashboardButtons />
        <Timer />
        <Stars />
        <Moves />
      </div>
    );
  }
}

export default Dashboard;
