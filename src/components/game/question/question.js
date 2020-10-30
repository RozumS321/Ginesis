import React from "react";
import { connect } from "react-redux";

import "./style.css";

function Question({ question, currentQuestion }) {
  const questions = question.map((el, index) => {
    return (
      <h1 key={index} className="question-title">
        {el.title}
      </h1>
    );
  });
  return <>{questions[currentQuestion]}</>;
}

const mapStateToProps = (state) => {
  return {
    question: state.data,
    currentQuestion: state.currentQuestion,
  };
};

export default connect(mapStateToProps, null)(Question);
