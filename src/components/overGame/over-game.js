import React from 'react'
import { ReactComponent as Logo } from './hand1.svg';

import './style.css'

export default function OverGame(){
    return(
        <div className='overGame'>
            <div className='content'>
                <div className="section">
                    <Logo className="img" />
                </div>

                <div className="section">
                    <div className="wrap">
                        <h1 className="title">Total Score:</h1>
                        <h1 className='earned'>$8,000 earned</h1>
                        <button className="btn">Try again</button>
                    </div>
                </div>
            </div>
        </div>
    )
}