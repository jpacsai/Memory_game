import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { State } from "../store";
import { getScores } from "../store/selectors";
import { maxScore } from "../config";
import "./Stars.scss";

export type StarsProps = {
  scores: number;
};

const mapStateToProps = (state: State) => ({
  scores: getScores(state)
});

class Stars extends React.PureComponent<StarsProps> {
  render() {
    const { scores: full } = this.props;
    const empty = maxScore - full;
    return (
      <div className="Stars">
        <div className="star-container">
          {[...Array(full)].map((e, i) => (
            <i className={classnames("fas fa-star", "star")} key={`fullStar-${i}`}/>
          ))}
          {[...Array(empty)].map((e, i) => (
            <i className={classnames("far fa-star", "star")} key={`emptyStar-${i}`}/>
          ))}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(Stars);
