import * as constants from "../constants";
import initialState from "./initialState";

export default function gameReducers(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case constants.GAME_START:
      return {
        ...state,
        data: [...action.payload],
        gameStart: true,
        gameOver: false,
        currentQuestion: 0,
        price: '0',
      };
    case constants.STEP_QUEST:
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        price: action.price,
      }
    case constants.GAME_OVER:
      return {
        ...state,
        gameStart: false,
        gameOver: true,
        currentQuestion: 0,
      }
    case constants.SET_ANSWER_INDEX:
      return {
        ...state,
        answerIndex: action.answerIndex
      }
    default:
      return state;
  }
}
