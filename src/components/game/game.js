import React from "react";
import * as actions from "../../redux/actions";
import { connect } from "react-redux";
import Question from "./question";
import Answers from "./answers";
import Price from "./price";
import "./game.css";

function Game() {
  return (
    <div className="game">
      <div className="game-rigth">
        <Question />
        <Answers />
      </div>
      <input id="menu__toggle" type="checkbox" />
      <label class="menu__btn" for="menu__toggle">
        <span></span>
      </label>
      <div className="game-left">

        <Price />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => dispatch(actions.startGame()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Game);
