import React from "react";
import Timer from './Timer';
import Moves from './Moves';
import DashboardButtons from './DashboardButtons';
import './Dashboard.scss';

class Dashboard extends React.PureComponent {
  render() {
    return (
      <div className="Dashboard">
        <DashboardButtons />
        <Timer />
        <Moves />
      </div>
    );
  }
}

export default Dashboard;
