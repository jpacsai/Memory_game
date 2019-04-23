import React from 'react';
import { connect } from 'react-redux';
import { State } from "../store";
import { getMinutes, getSeconds, getMoves, getScores } from './../store/selectors';
import Modal from './Modal';

const mapStateToProps = (state: State) => ({
  min: getMinutes(state),
  sec: getSeconds(state),
  moves: getMoves(state),
  scores: getScores(state)
});

export type EndModalProps = {
  isOpen: boolean;
  onClose: Function;
  min: number;
  sec: number;
  moves: number;
  scores: number;
}

class EndModal extends React.PureComponent<EndModalProps> {
  handleClose = () => {
    const { onClose } = this.props;
    if (onClose) onClose();
  };
  
  render() {
    const { isOpen, min, sec, moves, scores } = this.props;
    if (!isOpen) return null;
    const time = `your time: ${min ? min > 1 ? ' minutes' : ' minute' : ''} ${sec} ${sec > 1 ? 'seconds' : 'second'}`;
    return (
      <Modal isOpen={isOpen} onClose={this.handleClose}>
        <div>
          {time}
        </div>
        <div>
          {moves} moves
        </div>
        <div>{scores} scores</div>
      </Modal>
    );
  }
}

export default connect(mapStateToProps, null)(EndModal);