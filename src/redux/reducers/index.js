import * as constants from '../constants';
import initialState from './initialState'

export default function gameReducers(state = initialState, action){
    console.log(state)
    
    switch(action.type){
        case constants.GAME_START:
        return{
            ...state,data: [action.payload]
        }
        default: return state
    }
}