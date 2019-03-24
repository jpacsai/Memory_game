import React from 'react';
import './DashboardButtons.scss';

class DashboardButtons extends React.PureComponent {
  render() {
    return (
      <div className='DashboardButtons'>
        <div className='pause-button'>
          <i className="fa fa-pause"></i>
        </div>
        <div className='restart-button'>
          <i className="fa fa-repeat"></i>
        </div>
      </div>
    )
  }
}

export default DashboardButtons;
