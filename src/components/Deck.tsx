import React from 'react';
import { connect } from 'react-redux';
import { State } from '../store';
import { Card as CardType } from '../types'
import { getDeck } from '../store/selectors'

import CardComponent from './CardComponent';
import './Deck.scss';

export type DeckProps = {
  deck: CardType[]
}

const mapStateToProps = (state: State) => ({
  deck: getDeck(state) as CardType[]
})

class Deck extends React.PureComponent<DeckProps> {
  render() {
    const { deck } = this.props;
    if (!deck) return null;
    return (
      <div className="Deck">
        <div className="card-grid">
        { deck.map((card, i) => (
          <CardComponent key={i} card={card}/>
        ))}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps,null)(Deck);