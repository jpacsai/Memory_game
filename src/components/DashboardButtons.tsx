import React from 'react';
import { connect } from "react-redux";
import { State } from "../store";
import { getMoves, getTimerPaused } from './../store/selectors';
import { restart, pauseTimer, restartTimer } from '../store/actions';

import './DashboardButtons.scss';

export type DashboardButtonsProps = {
  moves: number;
  paused: boolean;
  restart: typeof restart;
  pauseTimer: typeof pauseTimer;
  restartTimer: typeof restartTimer;
}

const mapStateToProps = (state: State) => ({
  moves: getMoves(state),
  paused: getTimerPaused(state)
});

const mapDispatchToProps = { restart, pauseTimer, restartTimer };

class DashboardButtons extends React.PureComponent<DashboardButtonsProps> {
  handleRestart = () => {
    const { moves, restart } = this.props;
    if (!!moves) restart();
  }

  handlePause = () => {
    if (!this.props.paused) {
      this.props.pauseTimer();
      return;
    }
    this.props.restartTimer();
  }

  render() {
    const { paused } = this.props;
    return (
      <div className='DashboardButtons'>
        <div className='pause-button' onClick={this.handlePause}>
          { paused ? <i className="fa fa-play"></i> : <i className="fa fa-pause"></i>}
        </div>
        <div className='restart-button' onClick={this.handleRestart}>
          <i className="fa fa-repeat"></i>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardButtons);
