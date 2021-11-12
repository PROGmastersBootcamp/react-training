import React from 'react';
import {OutcomeComponent} from "./outcome.component";

export const InterfaceComponent = (props) => {

    return (
        <div>
            <OutcomeComponent/>
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
