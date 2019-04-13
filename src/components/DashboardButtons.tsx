import React, { Fragment } from 'react';
import { connect } from "react-redux";
import classnames from 'classnames';
import { State } from "../store";
import { getTimerOn, getTimerPaused } from './../store/selectors';
import { restart, pauseTimer, restartTimer } from '../store/actions';

import './DashboardButtons.scss';
import PauseModal from './PauseModal';

export type DashboardButtonsProps = {
  timerOn: boolean;
  paused: boolean;
  restart: typeof restart;
  pauseTimer: typeof pauseTimer;
  restartTimer: typeof restartTimer;
}

const mapStateToProps = (state: State) => ({
  timerOn: getTimerOn(state),
  paused: getTimerPaused(state)
});

const mapDispatchToProps = { restart, pauseTimer, restartTimer };

class DashboardButtons extends React.PureComponent<DashboardButtonsProps> {
  handleRestart = () => {
    const { timerOn, restart } = this.props;
    if (timerOn) restart();
  }

  handlePause = () => {
    const { timerOn, paused, pauseTimer, restartTimer} = this.props;
    if (!timerOn) return;
    if (!paused) {
      pauseTimer();
      return;
    }
    restartTimer();
  }

  render() {
    const { paused, timerOn } = this.props;
    return (
      <Fragment>
        <PauseModal isOpen={paused} onClose={this.handlePause}/>
        <div className={classnames('DashboardButtons', !timerOn ? 'disabled' : '')}>
          <div className='pause-button' onClick={this.handlePause}>
            { paused ? <i className="fas fa-play"/> : <i className="fas fa-pause"/>}
          </div>
          <div className='restart-button' onClick={this.handleRestart}>
            <i className="fas fa-redo-alt"/>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardButtons);
