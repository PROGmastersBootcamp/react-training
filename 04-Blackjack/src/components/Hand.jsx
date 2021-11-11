import PropTypes from 'prop-types';
import {Card} from './Card';

export const Hand = props => {

    return (
        <div>
            {props.cards.map((card, index) =>
                                 props.isComputerHand && !props.isPlaying && index === 0
                                     ? <Card key={index} cardFace={'00'}/>
                                     : <Card key={index} cardFace={card}/>
            )}
        </div>
    );
};

Hand.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.string).isRequired,
    isComputerHand: PropTypes.bool,
    isPlaying: PropTypes.bool,
};
