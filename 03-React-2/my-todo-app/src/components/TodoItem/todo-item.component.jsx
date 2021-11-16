import PropTypes from "prop-types";

export const TodoItemComponent = ({currentIndex, handleTodoIsDoneChange, task: {isDone, priority, task}}) => {

    const colors = [
        '#00FF00',
        '#009900',
        '#FFFF00',
        '#FF0000',
        'rgb(255,255,0)'
    ];
    const style = {backgroundColor: colors[priority - 1]};

    return (
        <div
            className="card bg-light m-3 p-2 w-25 d-flex flex-column align-items-center justify-content-center">
            <div className={"card-body"} style={style}>
                <h5 className='card-title'>{task}</h5>
                <h6 className='card-subtitle mb-2 text-muted'>{priority}</h6>
                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        checked={isDone}
                        onChange={() => handleTodoIsDoneChange(currentIndex)}
                    />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                        Done
                    </label>
                </div>
            </div>
        </div>
    )
};

TodoItemComponent.propTypes = {
    task: PropTypes.shape({
        task: PropTypes.string.isRequired,
        priority: PropTypes.number.isRequired,
        isDone: PropTypes.bool.isRequired
    }),
    currentIndex: PropTypes.number.isRequired,
    handleTodoIsDoneChange: PropTypes.func.isRequired
}
