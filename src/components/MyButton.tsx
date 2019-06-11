import React from "react";
import classnames from 'classnames';

import Button from '@material-ui/core/Button';
import "./MyButton.scss";

export type MyButtonProps = {
  text: string;
  color?: "primary" | "inherit" | "secondary" | "default" | undefined;
  centered?: boolean;
  marginTop?: boolean;
  marginBottom?: boolean;
  onClick?: () => void;
};

class MyButton extends React.PureComponent<MyButtonProps> {
  handleClick = () => {
    const { onClick } = this.props;
    if (onClick) onClick();
  }

  render() {
    const { text, centered, color, marginTop, marginBottom } = this.props;
    return (
      <Button variant="contained" color={classnames(color && color) as any} className={classnames("MyButton", centered && 'centered', marginTop && 'marginTop', marginBottom && 'marginBottom')} onClick={this.handleClick}>
        {text}
      </Button>
    );
  }
}

export default MyButton;
