import React from "react";
import { connect } from "react-redux";
import { State } from "../store";
import { GameState, Card as CardType } from "../types";
import { getGameState, getDeck, getTheme } from "../store/selectors";
import createDeck from "../utils/createDeck";
import shuffle from "../utils/shuffle";

import CardComponent from "./CardComponent";
import "./Deck.scss";

export type DeckProps = {
  theme: string;
  gameState: GameState;
  deck: CardType[];
};

const mapStateToProps = (state: State) => ({
  theme: getTheme(state),
  gameState: getGameState(state),
  deck: getDeck(state) as CardType[]
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
    /* this.props.theme !== prevProps.theme
          ? shuffle(createDeck(this.props.theme)) */
    if (
      this.props.gameState !== prevProps.gameState &&
      this.props.gameState === GameState.START
    ) {
      const newDeck = shuffle(this.state.deck);
      console.log(newDeck);
      this.setState({ deck: newDeck });
    }
    if (this.props.theme !== prevProps.theme) {
      const newDeck = createDeck(this.props.theme);
      const s = shuffle(newDeck);
      console.log(newDeck);
      this.setState({ deck: s });
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
