import React from "react";
import { connect } from "react-redux";
import { State } from "../store";
import { Card as CardType } from "../types";
import { getDeck } from "../store/selectors";

import CardComponent from "./CardComponent";
import "./Deck.scss";

export type DeckProps = {
  deck: CardType[];
};

export type DeckState = {
  openCardID1: number | null;
  openCardID2: number | null;
  allMatchedID: number[];
};

const mapStateToProps = (state: State) => ({
  deck: getDeck(state) as CardType[]
});

class Deck extends React.PureComponent<DeckProps, DeckState> {
  state = {
    openCardID1: null,
    openCardID2: null,
    allMatchedID: []
  }

  timer: NodeJS.Timeout | null = null;

  handleClick = (id: number) => {
    const { openCardID1 } = this.state;
    if (!openCardID1) {
      this.setState({ openCardID1: id });
      return;
    }
    this.setState({ openCardID2: id });
    this.checkMatch(id);
  }

  checkMatch = (id: number) => {
    const { deck } = this.props;
    const { openCardID1 } = this.state;
    const card1 = deck.find(card => card.id === openCardID1);
    const card2 = deck.find(card => card.id === id);
    if ((card1 && card1.url) === (card2 && card2.url)) {
      this.handleMatch(openCardID1!, id);
    }
    this.handleNoMatch();
  }

  handleMatch(id1: number, id2: number) {
    const { allMatchedID } = this.state;
    const nextallMatchedID = [...allMatchedID, id1, id2]
    this.setState({ allMatchedID: nextallMatchedID });
    this.removeOpen();
  }

  handleNoMatch() {
    this.timer = setTimeout(() => this.removeOpen(), 1000);
  }

  removeOpen() {
    this.setState({ openCardID1: null, openCardID2: null });
    this.setState(state => ({ ...state, openCardID1: null, openCardID2: null }));
    if (this.timer) clearTimeout(this.timer);
  }

  render() {
    const { deck } = this.props;
    const { openCardID1, openCardID2, allMatchedID } = this.state;
    if (!deck) return null;
    return (
      <div className="Deck">
        <div className="grid-container">
          <div className="card-grid">
            {deck.map(card => {
              const open = (openCardID1 === card.id) || (openCardID2 == card.id);
              const matched = !!(allMatchedID && allMatchedID.find(matchedID => matchedID === card.id));
              return (
                <CardComponent
                  key={card.id}
                  open={open}
                  matched={matched}
                  card={card}
                  onClick={this.handleClick}
                />
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(Deck);
