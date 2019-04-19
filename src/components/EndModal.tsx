import React from 'react';
import Modal from './Modal';

export type EndModalProps = {
  isOpen: boolean;
  onClose: Function;
}

class EndModal extends React.PureComponent<EndModalProps> {
  handleClose = () => {
    if (this.props.onClose) this.props.onClose();
  };
  
  render() {
    const { isOpen } = this.props;
    if (!isOpen) return null;
    return (
      <Modal isOpen={isOpen} onClose={this.handleClose}>
        <div>
          End
        </div>
      </Modal>
    );
  }
}

export default EndModal;