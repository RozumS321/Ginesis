import React from "react";
import { connect } from "react-redux";
import "./answers.css";
function Answers({ data, currentQuestion }) {
  console.log(data[currentQuestion]);
  const answers = data[currentQuestion].answers.map((el, index) => {
    return (
      <div className={!!el.correct ? "answer correct" : "answer wrong"}>
        <span>A</span>
        <h1>{el.answerText}</h1>
      </div>
    );
  });

  return (
    <div className="wrapper">
      {answers}

      {/* <div className="answer correct">
        <span>A</span>
        <h1>Answer</h1>
      </div>
      <div className="answer wrong">
        <span>B</span>
        <h1>Answer</h1>
      </div>
      <div className="answer">
        <span>C</span>
        <h1>Answer</h1>
      </div>
      <div className="answer">
        <span>D</span>
        <h1>Answer</h1>
      </div> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    currentQuestion: state.currentQuestion,
  };
};
export default connect(mapStateToProps, null)(Answers);
