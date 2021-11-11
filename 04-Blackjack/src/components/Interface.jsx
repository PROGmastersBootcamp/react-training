import React from 'react';
import {Outcome} from './Outcome';

export const Interface = (props) => {

    return (
        <div>
            <Outcome/>
            <div>
                <a className='score'>Dealer Score : computerScore </a>
                <a className='score'>Player Score : playerScore</a>
            </div>
            <button id='deal-button'>Deal</button>
            <button id='hit-button'>Hit</button>
            <button id='stand-button'>Stand</button>
        </div>
    );
}
