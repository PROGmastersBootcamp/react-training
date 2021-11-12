import PropTypes from 'prop-types';

export const OutcomeComponent = props => {

    return <div className='outcome'>
        {props.result}
    </div>;
};

OutcomeComponent.propTypes = {
    result: PropTypes.string
};
