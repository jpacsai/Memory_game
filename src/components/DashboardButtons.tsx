import React from 'react';
import { connect } from "react-redux";
import { restart } from '../store/actions';

import './DashboardButtons.scss';

export type DashboardButtonsProps = {
  restart: typeof restart;
}

const mapDispatchToProps = { restart };

class DashboardButtons extends React.PureComponent<DashboardButtonsProps> {
  handleRestart = () => {
    this.props.restart();
  }

  render() {
    return (
      <div className='DashboardButtons'>
        <div className='pause-button'>
          <i className="fa fa-pause"></i>
        </div>
        <div className='restart-button' onClick={this.handleRestart}>
          <i className="fa fa-repeat"></i>
        </div>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(DashboardButtons);
