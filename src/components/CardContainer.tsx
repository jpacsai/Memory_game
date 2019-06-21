import React from "react";
import { connect } from "react-redux";
import classnames from 'classnames';
import { State } from "../store";
import { GameState, Card as CardType } from '../types';
import { getOpenCards, getMatchedCards, getGameState, getTheme } from '../store/selectors';
import { handleOpenCard } from '../store/actions';

import Card from './Card';
import './CardContainer.scss';

export type CardContainerProps = {
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

class CardContainer extends React.PureComponent<CardContainerProps> {
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
      <div className={classnames('CardContainer', (open || matched) && 'disabled')}>
        <Card url={card.url} open={open} matched={matched} theme={theme} onClick={this.handleClick}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
