import React from 'react';
import Modal from './Modal';

export type PauseModalProps = {
  isOpen: boolean;
  onClose: Function;
}

class PauseModal extends React.PureComponent<PauseModalProps> {
  handleClose = () => {
    if (this.props.onClose) this.props.onClose();
  };
  
  render() {
    const { isOpen } = this.props;
    if (!isOpen) return null;
    return (
      <Modal isOpen={isOpen} onClose={this.handleClose}>
        <div>
          Pause screen
        </div>
      </Modal>
    );
  }
}

export default PauseModal;