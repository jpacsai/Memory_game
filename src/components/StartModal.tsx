import React from "react";
import { connect } from "react-redux";
import { resolveTheme } from "../store/actions";

import Modal from "./Modal";
import MyButton from "./MyButton";
import ThemeSelect from "./ThemeSelect";
import "./StartModal.scss";

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
        <MyButton color="primary" text="Start" centered onClick={this.handleSubmit} />
      </Modal>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(StartModal);
