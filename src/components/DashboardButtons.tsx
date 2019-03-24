import React from 'react';
import { connect } from "react-redux";
import { State } from "../store";
import { getMoves } from './../store/selectors';
import { restart } from '../store/actions';

import './DashboardButtons.scss';

export type DashboardButtonsProps = {
  moves: number;
  restart: typeof restart;
}

const mapStateToProps = (state: State) => ({
  moves: getMoves(state)
});

const mapDispatchToProps = { restart };

class DashboardButtons extends React.PureComponent<DashboardButtonsProps> {
  handleRestart = () => {
    const { moves, restart } = this.props;
    if (!!moves) restart();
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardButtons);
