import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { State } from '../store';
import { Card as CardType, GameState } from '../types';
import {
  getOpenCardsCardIDs,
  getMatchedCardImageIDs,
  getGameState,
  getTheme
} from '../store/selectors';
import { handleOpenCard, startTimer } from '../store/actions';
import getThemeImageUrls from '../utils/getThemeImageUrls';

import Card from './Card';
import './CardContainer.scss';

export type CardContainerProps = {
  card: CardType;
  openCards: number[];
  matchedCards: number[];
  gameState: GameState;
  theme: string;
  handleOpenCard: typeof handleOpenCard;
  startTimer: typeof startTimer;
};

const mapStateToProps = (state: State) => ({
  openCards: getOpenCardsCardIDs(state),
  matchedCards: getMatchedCardImageIDs(state),
  gameState: getGameState(state),
  theme: getTheme(state)
});

const mapDispatchToProps = { handleOpenCard, startTimer };

class CardContainer extends React.PureComponent<CardContainerProps> {
  timer: NodeJS.Timeout | null = null;

  handleClick = () => {
    const { card, openCards, gameState, startTimer } = this.props;
    if (openCards.length < 2)
      this.props.handleOpenCard(card.cardId);
    if (gameState === GameState.START) {
      startTimer();
    }
  };

  render() {
    const { card, openCards, matchedCards, theme } = this.props;
    if (!card) return null;
    
    const url = getThemeImageUrls(theme)[card.imageId];
    const open = openCards.includes(card.cardId);
    const matched = matchedCards.includes(card.imageId);

    return (
      <div
        className={classnames('CardContainer', (open || matched) && 'disabled')}
      >
        <Card
          url={url}
          open={open}
          matched={matched}
          theme={theme}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardContainer);
