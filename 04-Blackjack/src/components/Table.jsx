import React, {useState} from 'react';
import Interface from './Interface';
import {Hand} from './Hand';
import {fullDeck} from '../fullDeck';

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function Table() {

    const [tableState, setTableState] = useState({
                                                     computerHand: ['00', '00'],
                                                     playerHand: ['00', '00'],
                                                     message: 'Press \'Deal\' to start the game',
                                                     isPlaying: false
                                                 });

    const [result, setResult] = useState('');

    const [deck, setDeck] = useState([...fullDeck]);

    const pickRandomCard = () => {
        const shuffledDeck = shuffle(deck);
        const pop = shuffledDeck.pop();
        setDeck(shuffledDeck);
        return pop;
    };

    const deal = () => {
        const updatedState = {...tableState};
        updatedState.playerHand.length = 0;
        updatedState.computerHand.length = 0;

        updatedState.playerHand.push(pickRandomCard(), pickRandomCard());
        updatedState.computerHand.push(pickRandomCard(), pickRandomCard());
        updatedState.isPlaying = true;

        setTableState(updatedState);
        updateCurrentResult(updatedState);
    };

    const updateCurrentResult = (currentTableState) => {
        const playerScore = countScore(currentTableState.playerHand);
        const computerScore = countScore(currentTableState.computerHand);
        const playerLost = playerScore > 21;
        const computerLost = computerScore > 21;
        const isGameStopped = !currentTableState.isPlaying;

        if (playerLost && computerLost) {
            setResult('It\'s a draw!!!');
            stopGame();
        } else if (playerLost) {
            setResult('You lose!!!');
            stopGame();
        } else if (computerLost) {
            setResult('You won!!!');
            stopGame();
        } else if (playerScore === 21) {
            setResult('You won!!!');
            stopGame();
        } else if (computerScore === 21) {
            setResult('You lose!!!');
            stopGame();
        } else if (isGameStopped && (playerScore > computerScore)) {
            setResult('You won!!!');
        } else {
            setResult('');
        }
    };

    const stopGame = () => {
        const updatedState = {...tableState};
        updatedState.isPlaying = false;
        setTableState(updatedState);
    };

    const hit = () => {
        const updatedState = {...tableState};
        updatedState.playerHand.push(pickRandomCard());
        setTableState(updatedState);
        updateCurrentResult(updatedState);
    };

    const stand = () => {
        stopGame();
        const updatedState = {...tableState};

        while (countScore(updatedState.computerHand) < 17 && countScore(updatedState.computerHand) < countScore(updatedState.playerHand)) {
            updatedState.computerHand.push(pickRandomCard());
        }

        setTableState(updatedState);
        updateCurrentResult(updatedState);
    };

    const countScore = (hand) => {
        return hand
            .map(card => card.slice(1))
            .reduce((a, b) => {
                let nextCard = Number(b);
                if (nextCard > 10) {
                    nextCard = 10;
                }
                return Number(a) + nextCard;
            }, 0);
    };

    return (
        <div>
            <Hand
                cards={tableState.computerHand}
                isComputerHand
            />
            <Interface
                message={tableState.message}
                deal={deal}
                hit={hit}
                stand={stand}
                computerScore={countScore(tableState.computerHand)}
                playerScore={countScore(tableState.playerHand)}
                result={result}
                isPlaying={tableState.isPlaying}
            />
            <Hand cards={tableState.playerHand}/>
        </div>
    );
}

export default Table;
