import React from "react";
import { connect } from "react-redux";
import "./prices.css";

function Price({ data, currentQuestion }) {
  const prices = data.map((el, index) => {
    return <input type="button" value={`$${el.price}`} disabled="true" />;
  });

  return <div className="prices">{prices}</div>;
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    currentQuestion: state.currentQuestion,
  };
};
export default connect(mapStateToProps, null)(Price);
