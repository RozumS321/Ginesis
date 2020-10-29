import React from 'react'
import { ReactComponent as Logo } from './hand1.svg';

import './style.css'

export default function StartGame(){
    return(
        <div className='startGame'>
            <div className='content'>
                <div className='content-left'>
                    <Logo />
                </div>
                <div className='content-right'>
                    <div class='content-right-text'>
                        <h1>Who wants to be a millionaire?</h1>
                    </div>

                    <div class='content-right-btn'>
                        <button>Start</button>
                    </div>
                </div>
            </div>
        </div>
    )
}