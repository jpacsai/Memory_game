import React from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";

import "./Modal.scss";

export type ModalProps = {
  isOpen?: boolean;
  onClose?: Function;
  modalClassName?: string;
};

class Modal extends React.PureComponent<ModalProps> {
  static defaultProps = {
    isOpen: false,
    onClose: () => {}
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick);
  }

  handleClose = () => {
    this.props.onClose!();
  };

  handleClick = (event: any) => {
    if (this.refs.modal && !(this.refs.modal as Node).contains(event.target)) {
      this.handleClose();
    }
  };

  render() {
    const { children, isOpen, modalClassName } = this.props;
    if (!isOpen) return null;
    const Modal = (
      <div className="ModalContainer">
        <div className={classnames("Modal", modalClassName)} ref="modal">
          <header>
            <i className="far fa-times-circle" onClick={this.handleClose} />
          </header>
          <main>{children}</main>
        </div>
      </div>
    );
    return ReactDOM.createPortal(Modal, document.getElementById(
      "modal"
    ) as any);
  }
}

export default Modal;
