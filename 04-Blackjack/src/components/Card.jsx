import PropTypes from 'prop-types';

export const Card = props => {

    return (
        <div className={'card'}>
            <img
                src={'/images/' + props.cardFace + '.png'}
                alt={props.cardFace}
            />
        </div>
    );
};

Card.propTypes = {
    cardFace: PropTypes.string.isRequired
};
