import React from "react";
import { connect } from 'react-redux';
import Select from 'react-select'
import { cardImages } from '../config';
import { createDeck } from "../store/actions";

import Modal from "./Modal";
import "./StartModal.scss";

export type StartModalProps = {
  isOpen: boolean;
  onClose: Function;
  createDeck: typeof createDeck;
};

const mapDispatchToProps = { createDeck };

const options = cardImages.map(image => ({
  value: image.name,
  label: image.name.charAt(0).toUpperCase() + image.name.slice(1)
}));

class StartModal extends React.PureComponent<StartModalProps> {
  handleClose = () => {
    const { onClose } = this.props;
    if (onClose) onClose();
  };

  handleChange = (selectedOption: any) => {
    this.props.createDeck(selectedOption.value);
    this.handleClose();
  }

  render() {
    const { isOpen } = this.props;
    if (!isOpen) return null;
    return (
      <Modal
        isOpen={isOpen}
        title="Start"
        modalClassName="StartModal"
      >
        <div className="text">
          Find all 8 pairs of cards in the least number of moves and time.
        </div>
        <div className="theme-selector-container">
          <span>Choose a theme</span>
          <Select options={options} onChange={this.handleChange}/>
        </div>
      </Modal>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(StartModal);