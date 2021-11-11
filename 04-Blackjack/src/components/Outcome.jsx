import PropTypes from 'prop-types';

export const Outcome = props => {

    return <div className='outcome'>
        {props.result}
    </div>;
};

Outcome.propTypes = {
    result: PropTypes.string
};
