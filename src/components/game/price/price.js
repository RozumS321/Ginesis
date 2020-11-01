import React from "react";
import { connect } from "react-redux";
import "./prices.css";

function Price({ data, currentQuestion }) {
  const prices = data.map((el, index) => {
    const step = () => {
      if (index === currentQuestion) {
        return "step item";
      } else if (index > currentQuestion) {
        return "step-selected item";
      } else {
        return "step-disabled item";
      }
    };
    return <input type="button" value={`$${el.price}`} className={step()} />;
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
