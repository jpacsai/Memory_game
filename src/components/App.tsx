import React from "react";
import { connect } from 'react-redux';
import { State } from "../store";
import { fetchInitData, clear } from "../store/actions";
import { getMatchedCards } from './../store/selectors';

import StartModal from './StartModal';
import EndModal from './EndModal';
import Dashboard from "./Dashboard";
import Deck from "./Deck";
import "./App.scss";

export type AppState = {
  start: boolean;
  end: boolean;
}

export type AppProps = {
  fetchInitData: typeof fetchInitData;
  clear: typeof clear;
  matchedCards: number[];
};

const mapStateToProps = (state: State) => ({
  matchedCards: getMatchedCards(state)
});

const mapDispatchToProps = { fetchInitData, clear };

class App extends React.PureComponent<AppProps, AppState> {
  state = {
    start: true,
    end: false
  }

  componentDidMount() {
    this.props.fetchInitData();
  }

  componentWillReceiveProps(nextProps: AppProps) {
    if (nextProps.matchedCards.length === 16) {
      setTimeout(() => {
        this.setState({ end: true });
      }, 1500);
    }
  }

  handleStartClose = () => {
    this.setState({ start: false });
  }

  handleEndClose = () => {
    this.setState({ end: false });
    this.props.clear();
  }

  render() {
    const { start, end } = this.state;
    return (
      <div className="App">
        <StartModal isOpen={start} onClose={this.handleStartClose}/>
        <h1 className="title">Memory Game</h1>
        <div className="game-container">
          <Dashboard />
          <Deck />
        </div>
        <EndModal isOpen={end} onClose={this.handleEndClose}/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
