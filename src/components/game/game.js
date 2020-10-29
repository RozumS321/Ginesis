import React,{useEffect} from 'react';
import * as actions from '../../redux/actions'
import {connect} from 'react-redux'
import Question from './question'
import Answers from './answers'
import './game.css'

function Game(){
    return(
            <div className='game-rigth'>
               <Question/>
               <Answers/>
            </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        data: state.data
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        startGame: () => dispatch(actions.startGame())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Game)