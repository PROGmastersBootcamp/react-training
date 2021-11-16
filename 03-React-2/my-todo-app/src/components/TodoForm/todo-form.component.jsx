import {useState} from "react";
import {TextInputComponent} from "../TextInput/text-input.component";
import {RadioGroupComponent} from "../RadioGroup/radio-group.component";

export const TodoFormComponent = (props) => {

    const [todoForm, setTodoForm] = useState({
        task: '',
        priority: '1',
    });

    const handleInputChange = (event) => {
        const newValue = event.currentTarget.value;
        const currentInputName = event.currentTarget.name;
        setTodoForm(prevState => ({
            ...prevState,
            [currentInputName]: newValue
        }));
    };

    const submitTodo = () => {
        const formattedTodoObject = {
            task: todoForm.task,
            priority: Number(todoForm.priority),
            isDone: false
        };
        props.handleNewTodoObject(formattedTodoObject);
    };

    return (
        <div>
            <TextInputComponent
                inputName={'task'}
                currentValue={todoForm.task}
                inputLabel={'Task:'}
                changeHandler={handleInputChange}
            />
            <RadioGroupComponent
                values={[1, 2, 3, 4, 5]}
                inputName={'priority'}
                currentValue={todoForm.priority}
                changeHandler={handleInputChange}
            />
            <button
                type="button"
                className="btn btn-primary"
                onClick={submitTodo}
            >
                Add Todo
            </button>
        </div>
    );
};
