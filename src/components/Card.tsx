import React from 'react';
import getThemeStyle from '../utils/getThemeStyle';
import './Card.scss';

export type CardProps = {
  url: string;
  theme: string;
  open?: boolean;
  matched?: boolean;
  onClick?: Function;
};

class Card extends React.PureComponent<CardProps> {
  handleClick = () => {
    const { onClick } = this.props;
    if (onClick) onClick();
  };

  render() {
    const { open, matched, url } = this.props;
    const style = getThemeStyle(this.props.theme);
    return (
      <div
        onClick={this.handleClick}
        style={{ backgroundColor: open ? style.open : matched ? style.matched : 'black' }}
        className="Card"
      >
        <img src={url} alt="" />
      </div>
    );
  }
}

export default Card;
