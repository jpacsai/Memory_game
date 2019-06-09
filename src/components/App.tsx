import React from "react";
import { connect } from 'react-redux';
import { State } from "../store";
import { GameState } from "../types";
import { fetchInitData, clear } from "../store/actions";
import { getGameState } from './../store/selectors';

import StartModal from './StartModal';
import EndModal from './EndModal';
import Dashboard from "./Dashboard";
import Deck from "./Deck";
import "./App.scss";

export type AppState = {
  start: boolean;
}

export type AppProps = {
  fetchInitData: typeof fetchInitData;
  clear: typeof clear;
  gameState: GameState;
};

const mapStateToProps = (state: State) => ({
  gameState: getGameState(state)
});

const mapDispatchToProps = { fetchInitData, clear };

class App extends React.PureComponent<AppProps, AppState> {
  state = {
    start: true,
  }

  handleStartClose = () => {
    this.setState({ start: false });
  }

  render() {
    const { start } = this.state;
    const { gameState } = this.props;
    return (
      <div className="App">
        <StartModal isOpen={start} onClose={this.handleStartClose}/>
        <h1 className="title">Memory Game</h1>
        <div className="game-container">
          <Dashboard />
          <Deck />
        </div>
        <EndModal isOpen={gameState === GameState.END} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
