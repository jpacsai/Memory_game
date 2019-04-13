import React from "react";
import { connect } from "react-redux";
import { State } from "../store";
import { getScores } from "./../store/selectors";
import "./Stars.scss";

export type StarsProps = {
  scores: number;
};

const mapStateToProps = (state: State) => ({
  scores: getScores(state)
});

class Stars extends React.PureComponent<StarsProps> {
  render() {
    const { scores } = this.props;
    return (
      <div className="Stars">
        {[...Array(scores)].map((e, i) => (
          <span className="star" key={i}>⭐</span>
        ))}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(Stars);
