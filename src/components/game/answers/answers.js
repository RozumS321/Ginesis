import React from 'react'
import {connect} from 'react-redux'

function Answers({dataAnswers}){
    console.log(dataAnswers[0])
    const dataAnsers = dataAnswers.map(el => {
       console.log(el.answers)
        
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