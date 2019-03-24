import React from 'react';
import { connect } from "react-redux";
import { State } from "../store";
import { getMoves } from './../store/selectors';
import './Moves.scss';

export type MovesProps = {
  moves: number;
}

const mapStateToProps = (state: State) => ({
  moves: getMoves(state)
});

class Moves extends React.PureComponent<MovesProps> {
  render() {
    return (
      <div className='Moves'>{this.props.moves}</div>
    )
  }
}

export default connect(mapStateToProps, null)(Moves);
