import React from "react";
import { ReactComponent as Logo } from "./hand1.svg";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

import "./style.css";
function OverGame({ price, startGame }) {
  console.log(price);
  return (
    <div className="overGame">
      <div className="content">
        <div className="section">
          <Logo className="img" />
        </div>

        <div className="section">
          <div className="wrap">
            <h1 className="title">Total Score:</h1>
            <h1 className="earned">${price} earned</h1>
            <button className="btn" onClick={startGame}>
              Try again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    price: state.price,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => dispatch(actions.startGame()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OverGame);
