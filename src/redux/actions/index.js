import * as constants from "../constants";
import data from "../../config.json";
import { sleep } from '../../utils'
let datas = data["questions"].map((el) => el);

export function startGame() {
  return (dispatch) => {

    dispatch({
      type: constants.GAME_START,
      payload: datas,
    });
  };
}

export function stepQuestion(price) {
  return async (dispatch, getState) => {
    await sleep(1000)

    dispatch({
      type: constants.SET_ANSWER_INDEX,
      answerIndex: null,
    })

    const state = getState()

    if (state.currentQuestion === state.data.length - 1) {

      dispatch({
        type: constants.GAME_OVER,
        price,

      })
    }

    dispatch({
      type: constants.STEP_QUEST,
      price,
    })
  }
}

export function gameOver() {
  return async (dispatch) => {
    await sleep(1000)

    dispatch({
      type: constants.SET_ANSWER_INDEX,
      answerIndex: null,
    })

    dispatch({
      type: constants.GAME_OVER,
    })
  }
}