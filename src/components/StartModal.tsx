import React from "react";
import { connect } from "react-redux";
import { resolveTheme } from "../store/actions";

import Modal from "./Modal";
import "./StartModal.scss";
import ThemeSelect from "./ThemeSelect";

export type StartModalProps = {
  isOpen: boolean;
  onClose: Function;
  resolveTheme: typeof resolveTheme;
};

const mapDispatchToProps = { resolveTheme };

class StartModal extends React.PureComponent<StartModalProps> {
  handleChange = (selectedOption: any) => {
    this.props.resolveTheme(selectedOption.value);
  };

  handleSubmit = () => {
    this.handleClose();
  };

  handleClose = () => {
    this.props.onClose();
  };

  render() {
    const { isOpen } = this.props;
    if (!isOpen) return null;
    return (
      <Modal isOpen={isOpen} title="Start" modalClassName="StartModal">
        <div className="text">
          Find all 8 pairs of cards in the least number of moves and time.
        </div>
        <div className="theme-selector-container">
          <span>Choose a theme</span>
          <ThemeSelect onChange={this.handleChange} />
        </div>
        <div className="start-button-container">
          <div className="start-button" onClick={this.handleSubmit}>
            Start
          </div>
        </div>
      </Modal>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(StartModal);
