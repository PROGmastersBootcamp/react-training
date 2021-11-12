import PropTypes from 'prop-types';

export const CardComponent = props => {

    return (
        <div className={'card'}>
            <img
                src={'/images/' + props.cardFace + '.png'}
                alt={props.cardFace}
            />
        </div>
    );
};

CardComponent.propTypes = {
    cardFace: PropTypes.string.isRequired
};
