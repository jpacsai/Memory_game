import React, { Fragment } from 'react';
import { connect } from "react-redux";
import classnames from 'classnames';
import { State } from "../store";
import { GameState } from "../types";
import { getGameState } from './../store/selectors';
import { restart, pauseTimer, restartTimer } from '../store/actions';

import './DashboardButtons.scss';
import PauseModal from './PauseModal';

export type DashboardButtonsProps = {
  gameState: GameState;
  restart: typeof restart;
  pauseTimer: typeof pauseTimer;
  restartTimer: typeof restartTimer;
}

const mapStateToProps = (state: State) => ({
  gameState: getGameState(state)
});

const mapDispatchToProps = { restart, pauseTimer, restartTimer };

class DashboardButtons extends React.PureComponent<DashboardButtonsProps> {
  handleRestart = () => {
    const { gameState, restart } = this.props;
    if (gameState === GameState.START) return; 
    restart();
  }

  handlePause = () => {
    const { gameState, pauseTimer, restartTimer} = this.props;
    if (gameState === GameState.START || gameState === GameState.END) return;
    if (gameState === GameState.GAME) {
      pauseTimer();
      return;
    }
    restartTimer();
  }

  render() {
    const { gameState } = this.props;
    return (
      <Fragment>
        <PauseModal isOpen={gameState === GameState.PAUSED} onClose={this.handlePause}/>
        <div className={classnames('DashboardButtons', gameState === GameState.START || gameState === GameState.END ? 'disabled' : '')}>
          <div className='pause-button' onClick={this.handlePause}>
            { gameState === GameState.PAUSED ? <i className="fas fa-play"/> : <i className="fas fa-pause"/>}
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
