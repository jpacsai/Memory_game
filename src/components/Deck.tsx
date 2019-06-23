import React from "react";
import { connect } from "react-redux";
import { State } from "../store";
import { GameState, Card } from "../types";
import { shuffle } from "../store/actions";
import { getCards, getGameState, getTheme } from "../store/selectors";

import CardContainer from "./CardContainer";
import "./Deck.scss";

export type DeckProps = {
  theme: string;
  deck: Card[];
  gameState: GameState;
  shuffle: typeof shuffle;
};

const mapStateToProps = (state: State) => ({
  theme: getTheme(state),
  deck: getCards(state),
  gameState: getGameState(state),
});

const mapDispatchToProps = { shuffle };

class Deck extends React.PureComponent<DeckProps> {
  componentDidUpdate(prevProps: DeckProps) {
    // shuffle deck when new game starts
    if (
      this.props.gameState !== prevProps.gameState &&
      this.props.gameState === GameState.START
    ) {
      this.props.shuffle();
    }
  }

  render() {
    const { deck } = this.props;
    if (deck.length === 0) return null;
    return (
      <div className="Deck">
        <div className="grid-container">
          <div className="card-grid">
            {deck.map((card, index) => (
              <CardContainer key={index} card={card} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deck);
