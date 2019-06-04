import React from "react";
import Modal from "./Modal";

export type StartModalProps = {
  isOpen: boolean;
  onClose: Function;
};

class StartModal extends React.PureComponent<StartModalProps> {
  handleClose = () => {
    const { onClose } = this.props;
    if (onClose) onClose();
  };

  render() {
    const { isOpen } = this.props;
    if (!isOpen) return null;
    return <Modal isOpen={isOpen} onClose={this.handleClose} title="Start" />;
  }
}

export default StartModal;
