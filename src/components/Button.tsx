import React from "react";
import classnames from 'classnames';
import "./Button.scss";

export type ButtonProps = {
  text: string;
  centered?: boolean;
  onClick?: () => void;
};

class Button extends React.PureComponent<ButtonProps> {
  handleClick = () => {
    const { onClick } = this.props;
    if (onClick) onClick();
  }

  render() {
    const { text, centered } = this.props;
    return (
      <button className={classnames("Button", centered && 'centered')} onClick={this.handleClick}>
        {text}
      </button>
    );
  }
}

export default Button;
