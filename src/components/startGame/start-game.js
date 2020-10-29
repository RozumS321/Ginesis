import React from 'react'
import { ReactComponent as Logo } from './hand1.svg';

import './style.css'

export default function StartGame(){
    return(
        <div className='startGame'>
            <div className='content'>
                
                <div className="section">
                    <Logo className="img" />
                </div>

                <div className="section">
                    <div className="wrap">
                        <h1 className="title">Who wants to be a millionaire?</h1>
                        <button className="btn">Start</button>
                    </div>
                </div>

            </div>
        </div>
    )
}