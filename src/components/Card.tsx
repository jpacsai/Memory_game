import React from 'react';
import classnames from 'classnames';
import { Card as CardType } from '../types';

import Paper from '@material-ui/core/Paper';
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
    const { onClick, open, matched } = this.props;
    if (onClick && (!open || !matched)) onClick();
  };

  render() {
    const { theme, open, matched, url } = this.props;
    return (
      <div
        onClick={this.handleClick}
        className={classnames('Card', theme, open ? 'open' : matched ? 'matched' : '')}
      >
        <img src={url} alt='' />
      </div>
    );
  }
}

export default Card;
