import React from 'react';
import Card from './Card';
import './Deck.scss';

class Deck extends React.PureComponent {
  render() {
    return (
      <div className="Deck">
        <h2>'Deck'</h2>
        <Card />
      </div>
    );
  }
}

export default Deck;