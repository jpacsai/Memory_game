import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { State } from '../store';
import { GameState, Card as CardType } from '../types';
import {
  getOpenCardsCardIDs,
  getMatchedCardImageIDs,
  getGameState,
  getTheme
} from '../store/selectors';
import { handleOpenCard } from '../store/actions';
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
};

const mapStateToProps = (state: State) => ({
  openCards: getOpenCardsCardIDs(state),
  matchedCards: getMatchedCardImageIDs(state),
  theme: getTheme(state),
  gameState: getGameState(state)
});

const mapDispatchToProps = { handleOpenCard };

class CardContainer extends React.PureComponent<CardContainerProps> {
  timer: NodeJS.Timeout | null = null;

  handleClick = () => {
    const { card, gameState, openCards } = this.props;
    if (gameState !== GameState.PAUSED && openCards.length < 2)
      this.props.handleOpenCard(card.cardId);
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
