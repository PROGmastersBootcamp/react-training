import PropTypes from 'prop-types';

export const TextInputComponent = props => {

    const {inputLabel, inputName, currentValue, changeHandler} = props;

    return (
        <div className="mb-3">
            <label htmlFor={inputName} className="form-label">{inputLabel}</label>
            <input type="text" className="form-control" id={inputName}
                   name={inputName}
                   value={currentValue}
                   onChange={changeHandler}
            />
        </div>
    )
};

TextInputComponent.propTypes = {
    inputLabel: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired,
    currentValue: PropTypes.string.isRequired,
    changeHandler: PropTypes.func.isRequired,
};
