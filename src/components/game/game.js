import React from 'react';
import * as actions from '../../redux/actions'
import {connect} from 'react-redux'

function Game({startGame,data}){
    return(
            <div>
                <h1 onClick={startGame}>dsdad</h1>
               
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