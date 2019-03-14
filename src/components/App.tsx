import React from "react";
import { connect } from 'react-redux';
import { fetchInitData } from "../store/actions";

import Dashboard from "./Dashboard";
import Deck from "./Deck";
import "./App.scss";

const mapDispatchToProps = { fetchInitData };

export type AppProps = {
  fetchInitData: typeof fetchInitData;
};

class App extends React.PureComponent<AppProps> {
  componentDidMount() {
    this.props.fetchInitData();
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Memory Game</h1>
        <div className="game-container">
          <Dashboard />
          <Deck />
          <footer />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App);
