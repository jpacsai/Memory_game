import React from "react";
import Modal from "./Modal";
import "./StartModal.scss";

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
    return (
      <Modal
        isOpen={isOpen}
        onClose={this.handleClose}
        title="Start"
        modalClassName="StartModal"
      >
        <div className="text">
          Find all 8 pairs of cards in the least number of moves and time.
        </div>
      </Modal>
    );
  }
}

export default StartModal;
