import React, { Fragment } from 'react';
import { connect } from "react-redux";
import classnames from 'classnames';
import { State } from "../store";
import { GameState } from "../types";
import { getGameState } from './../store/selectors';
import { restart, pauseTimer, restartTimer } from '../store/actions';

import PauseModal from './PauseModal';
import RestartModal from './RestartModal';
import './DashboardButtons.scss';

export enum OpenModal {
  PAUSE = 'pause',
  RESTART = 'restart'
}

export type DashboardButtonsProps = {
  gameState: GameState;
  restart: typeof restart;
  pauseTimer: typeof pauseTimer;
  restartTimer: typeof restartTimer;
}

export type DashboardButtonsState = {
  openModal: OpenModal | null;
}

const mapStateToProps = (state: State) => ({
  gameState: getGameState(state)
});

const mapDispatchToProps = { restart, pauseTimer, restartTimer };

class DashboardButtons extends React.PureComponent<DashboardButtonsProps> {
  state = {
    openModal: null
  }

  handleOpenRestartModal = () => {
    this.props.pauseTimer();
    this.setState({ openModal: OpenModal.RESTART });
  }

  handleCloseRestartModal = () => {
    this.setState({ openModal: null });
    this.props.restartTimer();
  }


  handleRestart = () => {
    const { gameState, restart } = this.props;
    if (gameState === GameState.START) return;
    restart();
  }

  handlePause = () => {
    const { gameState, pauseTimer, restartTimer } = this.props;
    if (gameState === GameState.START || gameState === GameState.END) return;
    if (gameState === GameState.GAME && this.state.openModal !== OpenModal.PAUSE) {
      this.setState({ openModal: OpenModal.PAUSE });
      pauseTimer();
      return;
    }
    this.setState({ openModal: null });
    restartTimer();
  }

  render() {
    const { gameState } = this.props;
    const { openModal } = this.state;
    return (
      <Fragment>
        <PauseModal isOpen={openModal === OpenModal.PAUSE} onClose={this.handlePause} />
        <RestartModal isOpen={openModal === OpenModal.RESTART} onClose={this.handleCloseRestartModal} onSubmit={this.handleRestart} />
        <div className={classnames('DashboardButtons', gameState === GameState.START || gameState === GameState.END ? 'disabled' : '')}>
          <div className='pause-button' onClick={this.handlePause}>
            {openModal === OpenModal.PAUSE ? <i className="fas fa-play" /> : <i className="fas fa-pause" />}
          </div>
          <div className='restart-button' onClick={this.handleOpenRestartModal}>
            <i className="fas fa-redo-alt" />
          </div>
        </div>
      </Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardButtons);
