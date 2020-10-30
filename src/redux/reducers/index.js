import * as constants from "../constants";
import initialState from "./initialState";

export default function gameReducers(state = initialState, action) {
  switch (action.type) {
    case constants.GAME_START:
      return {
        ...state,
        data: [...action.payload],
        start: true,
      };
    default:
      return state;
  }
}
