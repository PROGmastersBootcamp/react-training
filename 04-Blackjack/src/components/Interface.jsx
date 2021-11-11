import React from 'react';
import {Outcome} from './Outcome';

function Interface(props) {

    return (
        <div>
            {props.result &&
             <Outcome
                 result={props.result}
             />
            }
            <div>
                <a className='score'>Dealer Score : {props.computerScore} </a>
                <a className='score'>Player Score : {props.playerScore}</a>
            </div>
            <button
                id='deal-button'
                onClick={props.deal}
                disabled={props.isPlaying}
            >
                Deal
            </button>
            <button
                id='hit-button'
                onClick={props.hit}
                disabled={!props.isPlaying}
            >
                Hit
            </button>
            <button
                id='stand-button'
                onClick={props.stand}
                disabled={!props.isPlaying}
            >
                Stand
            </button>
        </div>
    );
}

export default Interface;
