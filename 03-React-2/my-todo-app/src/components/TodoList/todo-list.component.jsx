import PropTypes from 'prop-types';
import {TodoItemComponent} from "../TodoItem/todo-item.component";

export const TodoListComponent = (props) => {

    return (
        <div>
            <h5>My TODO Items:</h5>
            {props.tasks
                // .filter(task => !task.isDone) Az index-es megoldás miatt nem működik
                .map((task, index) =>
                    task.isDone || (<TodoItemComponent
                        key={index}
                        currentIndex={index}
                        task={task}
                        handleTodoIsDoneChange={props.handleTodoIsDoneChange}/>)
                )}
        </div>
    );
};

TodoListComponent.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            task: PropTypes.string.isRequired,
            priority: PropTypes.number.isRequired,
            isDone: PropTypes.bool.isRequired
        })).isRequired,
    handleTodoIsDoneChange: PropTypes.func.isRequired
};
