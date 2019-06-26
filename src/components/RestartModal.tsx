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
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Restart"
      >
        <div className="info">
          Restart Modal
        </div>
        <MyButton color="primary" text="Restart" centered marginTop onClick={this.handleSubmit} />
      </Modal>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(RestartModal);
