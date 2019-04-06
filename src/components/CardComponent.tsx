import React from "react";
import { connect } from "react-redux";
import { State } from "../store";
import classnames from 'classnames';
import { Card as CardType } from '../types';
import { getOpenCards, getMatchedCards, getTimerPaused } from './../store/selectors';
import { handleOpenCard } from '../store/actions';

import './CardComponent.scss';

export type CardComponentProps = {
  card: CardType;
  openCards: number[];
  matchedCards: number[];
  paused: boolean;
  handleOpenCard: typeof handleOpenCard;
}

const mapStateToProps = (state: State) => ({
  openCards: getOpenCards(state),
  matchedCards: getMatchedCards(state),
  paused: getTimerPaused(state)
});

const mapDispatchToProps = { handleOpenCard };

class CardComponent extends React.PureComponent<CardComponentProps> {
  timer: NodeJS.Timeout | null = null;

  handleClick = () => {
    const { card, paused, openCards } = this.props;
    if (!paused && openCards.length < 2) this.props.handleOpenCard(card.id);
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

export default connect(mapStateToProps, mapDispatchToProps)(CardComponent);
