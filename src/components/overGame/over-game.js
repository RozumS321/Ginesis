import React from 'react'
import { ReactComponent as Logo } from './hand1.svg';

import './style.css'

export default function OverGame(){
    return(
        <div className='overGame'>
            <div className='content'>
                <div className='content-left'>
                    <Logo />
                </div>
                <div className='content-right'>
                    <div class='content-right-text'>
                        <span className='total'>Total score:</span>
                        <span>$8000 earned</span>
                    </div>

                    <div class='content-right-btn'>
                        <button>try again</button>
                    </div>
                </div>
            </div>
        </div>
    )
}