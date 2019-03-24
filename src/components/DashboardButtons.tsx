import React from 'react';
import './DashboardButtons.scss';

class DashboardButtons extends React.PureComponent {
  render() {
    return (
      <div className='DashboardButtons'>
        <div>Pause</div>
        <div>Restart</div>
      </div>
    )
  }
}

export default DashboardButtons;
