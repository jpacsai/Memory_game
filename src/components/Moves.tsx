import React from 'react';
import { connect } from "react-redux";
import { State } from "../store";
import { getMoves } from './../store/selectors';
import Stars from './Stars';
import './Moves.scss';

export type MovesProps = {
  moves: number;
}

const mapStateToProps = (state: State) => ({
  moves: getMoves(state)
});

class Moves extends React.PureComponent<MovesProps> {
  render() {
    const { moves } = this.props;
    
    return (
      <div className='Moves'>
        <Stars />
        <div className='move-counter'>{`${moves} Move${moves > 1 ? 's' : ''}`}</div>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Moves);
