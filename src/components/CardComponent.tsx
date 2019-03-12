import React from "react";
import { Card as CardType } from '../types'
import './CardComponent.scss';

export type CardComponentProps = {
  card: CardType;
}

class CardComponent extends React.PureComponent<CardComponentProps> {
  render() {
    const { card } = this.props;
    if (!card) return null;
    return (
      <div className="CardComponent">
        <img src={card.url} alt=""/>
      </div>
    );
  }
}

export default CardComponent;
