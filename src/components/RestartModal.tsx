import React from "react";
import { connect } from "react-redux";
import { restart } from '../store/actions';

import Modal from "./Modal";
import MyButton from "./MyButton";

export type RestartModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
};

const mapDispatchToProps = { restart };

class RestartModal extends React.PureComponent<RestartModalProps> {
  handleSubmit = () => {
    const { onSubmit } = this.props;
    onSubmit();
  };

  render() {
    const { isOpen, onClose } = this.props;
    if (!isOpen) return null;

    return (
      <Modal isOpen={isOpen} onClose={onClose} title="Restart" >
        Are you sure you want to restart the game?
        <MyButton color="primary" text="Yes, restart" centered marginTop onClick={this.handleSubmit} />
      </Modal>
    );
  }
}

export default connect(null, mapDispatchToProps)(RestartModal);
