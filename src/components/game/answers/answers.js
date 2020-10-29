import React from 'react'
import {connect} from 'react-redux'

function Answers({dataAnswers}){
    const dataAnsers = dataAnswers.map(el => {
        
    })
    return(
       <>
       {dataAnsers}
       </>

    )
}

const mapStateToProps = (state) => {
    return {
        dataAnswers: state.data
    }
}
export default connect(mapStateToProps,null)(Answers)