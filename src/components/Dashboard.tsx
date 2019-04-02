import React from "react";
import Timer from "./Timer";
import Moves from "./Moves";
import DashboardButtons from "./DashboardButtons";
import "./Dashboard.scss";

class Dashboard extends React.PureComponent {
  render() {
    return (
      <div className="Dashboard">
        <div className='dashboard-container'>
          <DashboardButtons />
          <Timer />
          <Moves />
        </div>
      </div>
    );
  }
}

export default Dashboard;
