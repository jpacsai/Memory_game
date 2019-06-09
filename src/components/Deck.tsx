import React from "react";
import { connect } from "react-redux";
import { State } from "../store";
import { GameState } from "../types";
import { getGameState, getTheme } from "../store/selectors";
import createDeck from "../utils/createDeck";
import shuffle from "../utils/shuffle";

import CardComponent from "./CardComponent";
import "./Deck.scss";

export type DeckProps = {
  theme: string;
  gameState: GameState;
};

const mapStateToProps = (state: State) => ({
  theme: getTheme(state),
  gameState: getGameState(state)
});

class Deck extends React.PureComponent<DeckProps> {
  state = {
    deck: []
  };

  componentDidMount() {
    const newDeck = shuffle(createDeck(this.props.theme));
    this.setState({ deck: newDeck });
  }

  componentDidUpdate(prevProps: DeckProps) {
    // shuffle deck when new game starts
    if (
      this.props.gameState !== prevProps.gameState &&
      this.props.gameState === GameState.START
    ) {
      const shuffledDeck = shuffle(this.state.deck);
      this.setState({ deck: shuffledDeck });
    }
    // create new deck when theme is changed and shuffle it
    if (this.props.theme !== prevProps.theme) {
      const newDeck = createDeck(this.props.theme);
      const shuffledNewDeck = shuffle(newDeck);
      this.setState({ deck: shuffledNewDeck });
    }
  }

  render() {
    const { deck } = this.state;
    if (deck.length === 0) return null;
    return (
      <div className="Deck">
        <div className="grid-container">
          <div className="card-grid">
            {deck.map((card, index) => (
              <CardComponent key={index} card={card} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(Deck);
