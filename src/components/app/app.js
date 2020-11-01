import React from "react";
import StartGame from "../startGame";
import OverGame from "../overGame";
import Game from "../game";
import { connect } from "react-redux";

function App({ start, gameOver }) {
  if (gameOver) return <OverGame />;
  return <>{start ? <Game /> : <StartGame />}</>;
}

const mapStateToProps = (state) => {
  return {
    start: state.gameStart,
    gameOver: state.gameOver,
  };
};

export default connect(mapStateToProps, null)(App);
