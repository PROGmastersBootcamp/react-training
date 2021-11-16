import React from 'react';
import PropTypes from 'prop-types';

export const RadioGroupComponent = (props) => {

    const {values, inputName, currentValue, changeHandler} = props;

    return (
        <>
            {values.map(value => (
                <div key={value}>
                    <input type="radio" id={value} name={inputName} value={value}
                           onChange={changeHandler}
                           checked={currentValue === String(value)}
                    />
                    <label htmlFor={value}>{value}</label>
                </div>
            ))}
        </>
    );
};

RadioGroupComponent.propTypes = {
    values: PropTypes.array.isRequired,
    inputName: PropTypes.string.isRequired,
    currentValue: PropTypes.any.isRequired,
    changeHandler: PropTypes.func.isRequired,
};
