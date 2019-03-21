import React from "react";
import classnames from 'classnames';
import { Card as CardType } from '../types';
import './CardComponent.scss';

export type CardComponentProps = {
  card: CardType;
  open: boolean;
  matched: boolean;
  onClick: any;
}

class CardComponent extends React.PureComponent<CardComponentProps> {
  handleClick = () => this.props.onClick(this.props.card.id);

  render() {
    const { card } = this.props;
    if (!card) return null;
    return (
      <div className={"CardComponent"} >
        <div
          onClick={this.handleClick}
          className={classnames('card-container', this.props.open ? 'open' : this.props.matched ? 'matched' : '')}
         >
          <img src={card.url} alt=""/>
        </div>
      </div>
    );
  }
}

export default CardComponent;
