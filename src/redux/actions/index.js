import * as constants from "../constants";
import data from "../../config.json";

export function startGame() {
  return (dispatch) => {
    let datas = data["questions"].map((el) => el);

    dispatch({
      type: constants.GAME_START,
      payload: datas,
    });
  };
}
