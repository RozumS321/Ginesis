import React,{useEffect} from 'react'
import StartGame from '../startGame'
import OverGame from '../overGame'
import Game from '../game'
import * as actions from '../../redux/actions'
import { connect } from 'react-redux'

function App({startGame}){

    useEffect(()=>{
        startGame()
    })

    return(
        // <StartGame />
            <Game />
        // <OverGame/>
    )
}   

const mapDispatchToProps = (dispatch) => {
    return {
        startGame: () => dispatch(actions.startGame())
    }
}

export default connect(null, mapDispatchToProps)(App)