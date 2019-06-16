import React from 'react';
import classnames from 'classnames';
import { Card as CardType } from '../types';

import Paper from '@material-ui/core/Paper';
import './Card.scss';

export type CardProps = {
  card: CardType;
  theme: string;
  open?: boolean;
  matched?: boolean;
  onClick?: Function;
};

class Card extends React.PureComponent<CardProps> {
  handleClick = () => {
    const { card, onClick } = this.props;
    if (onClick) onClick(card);
  };

  render() {
    const { card, theme, open, matched, onClick } = this.props;
    return (
      <div
        onClick={this.handleClick}
        className={classnames('Card', theme, open ? 'open' : matched ? 'matched' : '')}
      >
        <img src={card.url} alt='' />
      </div>
    );
  }
}

export default Card;
