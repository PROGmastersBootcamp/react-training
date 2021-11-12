import PropTypes from 'prop-types';
import {CardComponent} from './card.component';

export const HandComponent = props => {

    return (
        <div>
            {props.cards.map((card, index) =>
                                 props.isComputerHand && !props.isPlaying && index === 0
                                     ? <CardComponent key={index} cardFace={'00'}/>
                                     : <CardComponent key={index} cardFace={card}/>
            )}
        </div>
    );
};

HandComponent.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.string).isRequired,
    isComputerHand: PropTypes.bool,
    isPlaying: PropTypes.bool,
};
