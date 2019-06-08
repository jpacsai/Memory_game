import React from "react";
import { connect } from "react-redux";
import { State } from "../store";
import {
  getMinutes,
  getSeconds,
  getMoves
} from "./../store/selectors";
import { restart } from '../store/actions';

import Modal from "./Modal";
import Stars from "./Stars";
import "./EndModal.scss";

const mapStateToProps = (state: State) => ({
  min: getMinutes(state),
  sec: getSeconds(state),
  moves: getMoves(state),
});

export type EndModalProps = {
  isOpen: boolean;
  onClose: Function;
  min: number;
  sec: number;
  moves: number;
  restart: typeof restart;
};

const mapDispatchToProps = { restart };

class EndModal extends React.PureComponent<EndModalProps> {
  handleClose = () => {
    const { restart, onClose } = this.props;
    restart();
    onClose();
  };

  render() {
    const { isOpen, min, sec, moves } = this.props;
    if (!isOpen) return null;

    const time = `${min ? (min > 1 ? " minutes" : " minute") : ""} ${sec} ${
      sec > 1 ? "seconds" : "second"
    }`;

    return (
      <Modal
        isOpen={isOpen}
        onClose={this.handleClose}
        title="Congratulations!"
        modalClassName="EndModal"
      >
        <div className="info">
          You won with <span>{moves} moves</span> in <span>{time}</span>
        </div>
        <Stars />
      </Modal>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EndModal);
