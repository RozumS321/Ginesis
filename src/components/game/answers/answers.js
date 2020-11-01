import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./answers.css";
import { indexToLetters } from "./constants";
import * as constants from "../../../redux/constants";
import { stepQuestion, gameOver } from "../../../redux/actions";

function Answers({ data, currentQuestion, answerIndex, ...props }) {
  const getAnswElClassName = (el) => {
    if (answerIndex === null) return "answer";
    return el.correct ? "answer correct" : "answer wrong";
  };

  useEffect(() => {
    if (answerIndex === null) return;
    const question = data[currentQuestion];
    const answer = question.answers[answerIndex];
    if (answer.correct) return props.stepQuestion(question.price);

    return props.gameOver();
  }, [answerIndex]);

  const answers = data[currentQuestion].answers.map((el, index) => {
    return (
      <div
        className={getAnswElClassName(el)}
        onClick={() => props.setAnswerIndex(index)}
      >
        <span>{indexToLetters[index]}</span>
        <h1>{el.answerText}</h1>
      </div>
    );
  });

  return (
    <div className="wrapper">
      {answers}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    currentQuestion: state.currentQuestion,
    answerIndex: state.answerIndex,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    stepQuestion: (price) => dispatch(stepQuestion(price)),
    gameOver: () => dispatch(gameOver()),
    setAnswerIndex: (index) =>
      dispatch({ type: constants.SET_ANSWER_INDEX, answerIndex: index }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Answers);
