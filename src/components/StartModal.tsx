import React from 'react';
import Modal from './Modal';

export type StartModalProps = {
  isOpen: boolean;
  onClose: Function;
}

class StartModal extends React.PureComponent<StartModalProps> {
  handleClose = () => {
    if (this.props.onClose) this.props.onClose();
  };
  
  render() {
    const { isOpen } = this.props;
    if (!isOpen) return null;
    return (
      <Modal isOpen={isOpen} onClose={this.handleClose}>
        <div>
          Start
        </div>
      </Modal>
    );
  }
}

export default StartModal;