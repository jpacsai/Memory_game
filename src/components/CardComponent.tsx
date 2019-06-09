import React from "react";
import { connect } from "react-redux";
import { State } from "../store";
import classnames from 'classnames';
import { GameState, Card as CardType } from '../types';
import { getOpenCards, getMatchedCards, getGameState, getTheme } from './../store/selectors';
import { handleOpenCard } from '../store/actions';

import './CardComponent.scss';

export type CardComponentProps = {
  card: CardType;
  openCards: CardType[];
  matchedCards: number[];
  gameState: GameState;
  theme: string;
  handleOpenCard: typeof handleOpenCard;
}

const mapStateToProps = (state: State) => ({
  openCards: getOpenCards(state),
  matchedCards: getMatchedCards(state),
  theme: getTheme(state),
  gameState: getGameState(state)
});

const mapDispatchToProps = { handleOpenCard };

class CardComponent extends React.PureComponent<CardComponentProps> {
  timer: NodeJS.Timeout | null = null;

  handleClick = () => {
    const { card, gameState, openCards } = this.props;
    if (gameState !== GameState.PAUSED && openCards.length < 2) this.props.handleOpenCard(card);
  }

  render() {
    const { card, openCards, matchedCards, theme } = this.props;
    if (!card) return null;
    const open = !!openCards.find(openCard => openCard.cardId === card.cardId);
    const matched = matchedCards.includes(card.imageId);
    return (
      <div className={classnames("CardComponent", theme)} >
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
