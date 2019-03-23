import React from "react";
import { connect } from "react-redux";
import { State } from "../store";
import classnames from 'classnames';
import { Card as CardType } from '../types';
import { getOpenCards, getMatchedCards } from './../store/selectors';

import './CardComponent.scss';

export type CardComponentProps = {
  card: CardType;
  openCards: number[];
  matchedCards: number[];
}

const mapStateToProps = (state: State) => ({
  openCards: getOpenCards(state),
  matchedCards: getMatchedCards(state)
});

class CardComponent extends React.PureComponent<CardComponentProps> {
  timer: NodeJS.Timeout | null = null;

  handleClick = () => {
    // checkOpenCard
  }

  render() {
    const { card, openCards, matchedCards } = this.props;
    if (!card) return null;
    const open = openCards.includes(card.id);
    const matched = matchedCards.includes(card.id);
    return (
      <div className={"CardComponent"} >
        <div
          onClick={this.handleClick}
          className={classnames('card-container', open ? 'open' : matched ? 'matched' : '')}
         >
          <img src={card.url} alt=""/>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(CardComponent);
