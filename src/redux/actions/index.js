import * as constants from '../constants'
import data from '../../config.json'

export function startGame(){
    return  (dispatch) =>
    {   
        let datas = null;
      (function(){
            for(let i = 0; i < data.length; i++){
                datas += data[i]
                console.log(datas)
            }
        })()
        console.log(datas)

        dispatch({
           type: constants.GAME_START,
           payload: data
       })
    }
}