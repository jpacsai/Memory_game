import React from 'react';
import { connect } from "react-redux";
import { State } from "../store";
import { getMinutes, getSeconds } from './../store/selectors';
import './Timer.scss';

export type TimerProps = {
  min: number;
  sec: number;
}

const mapStateToProps = (state: State) => ({
  min: getMinutes(state),
  sec: getSeconds(state)
});

class Timer extends React.PureComponent<TimerProps> {
  render() {
    const { min, sec } = this.props;
    return (
      <div className='Timer'>{`${String(min).padStart(2, '0')} : ${String(sec).padStart(2, '0')}`}</div>
    )
  }
}

export default connect(mapStateToProps, null)(Timer);
