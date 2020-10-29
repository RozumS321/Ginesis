import React from 'react';
import {connect} from 'react-redux'

import './style.css'

function Question({question}){
    const questions = question.map((el,index) => {
            return(
            <h1 key={index} className='question-title'>{el.id}.{el.title}</h1>
            )
    })
    return(
        <>
       {questions}
        </>
        
    )
}

const mapStateToProps = (state) =>{
    return {
    question: state.data
    }
}

export default connect(mapStateToProps,null)(Question)
