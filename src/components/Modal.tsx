import React from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";
import Paper from '@material-ui/core/Paper';
import "./Modal.scss";

export type ModalProps = {
  title?: string;
  isOpen?: boolean;
  onClose?: Function;
  modalClassName?: string;
};

class Modal extends React.PureComponent<ModalProps> {
  static defaultProps = {
    isOpen: false
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick);
  }

  handleClose = () => {
    const { onClose } = this.props;
    if (onClose) onClose();
  };

  handleClick = (event: any) => {
    if (this.refs.modal && !(this.refs.modal as Node).contains(event.target)) {
      this.handleClose();
    }
  };

  render() {
    const { children, title, isOpen, modalClassName, onClose } = this.props;
    if (!isOpen) return null;
    const Modal = (
      <div className="ModalContainer" ref="modal">
        <Paper className={classnames("Modal", modalClassName)}>
          <header>
            { title && 
              <span className="title">{title}</span>
            }
            {onClose && <i className="far fa-times-circle" onClick={this.handleClose} />}
          </header>
          <main>{children}</main>
        </Paper>
      </div>
    );
    return ReactDOM.createPortal(Modal, document.getElementById(
      "modal"
    ) as any);
  }
}

export default Modal;
