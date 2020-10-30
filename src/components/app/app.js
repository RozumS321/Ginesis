import React, { useEffect } from "react";
import StartGame from "../startGame";
import OverGame from "../overGame";
import Game from "../game";
import * as actions from "../../redux/actions";
import { connect } from "react-redux";

function App({ startGame, start }) {
  return <>{start ? <Game /> : <StartGame />}</>;
}

const mapStateToProps = (state) => {
  return {
    start: state.start,
  };
};

export default connect(mapStateToProps, null)(App);
