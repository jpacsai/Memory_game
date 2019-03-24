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
        <Timer />
        <Stars />
        <Moves />
        <DashboardButtons />
      </div>
    );
  }
}

export default Dashboard;
