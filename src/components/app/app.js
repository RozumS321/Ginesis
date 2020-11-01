import React from 'react';
import { connect } from 'react-redux';
import StartGame from '../startGame';
import OverGame from '../overGame';
import Game from '../game';

function App({ start, gameOver }) {
  if (gameOver) return <OverGame />;
  return <>{start ? <Game /> : <StartGame />}</>;
}

const mapStateToProps = (state) => ({
  start: state.gameStart,
  gameOver: state.gameOver,
});

export default connect(mapStateToProps, null)(App);
