import './app.style.css';
import {HeaderComponent} from "../Header/header.component";
import {ContentComponent} from "../Content/content.component";
import {FooterComponent} from "../Footer/footer.component";
import {TodoListComponent} from "../TodoList/todo-list.component";
import {useState} from "react";
import {TodoFormComponent} from "../TodoForm/todo-form.component";
import HoverTextComponent from "../hoc-demo/hover-text.component";
import ButtonClickComponent from "../hoc-demo/button-click.component";

function AppComponent() {

    const [tasks, setTasks] = useState([
        {task: 'some task 1', priority: 1, isDone: false},
        {task: 'some task 2', priority: 4, isDone: true},
        {task: 'some task 3', priority: 2, isDone: false},
        {task: 'some task 4', priority: 3, isDone: false},
        {task: 'some task 5', priority: 5, isDone: true},
        {task: 'some task 5', priority: 5, isDone: false},
        {task: 'some task 5', priority: 5, isDone: false},
        {task: 'some task 5', priority: 5, isDone: false},
        {task: 'some task 5', priority: 5, isDone: false},
        {task: 'some task 5', priority: 5, isDone: false},
        {task: 'some task 5', priority: 5, isDone: false},
    ])

    const handleTodoIsDoneChange = (index) => {
        const updatedState = [...tasks];
        updatedState[index].isDone = !updatedState[index].isDone;
        setTasks(updatedState);
    };

    const handleNewTodoObject = (newTodoItem) => {
        setTasks(p => [newTodoItem, ...p])
    };

    return (
        <div className="App">
            <HoverTextComponent/>
            <ButtonClickComponent/>
            <HeaderComponent
                title={'My TODO App!'}
            />
            <ContentComponent>
                <TodoFormComponent
                    handleNewTodoObject={handleNewTodoObject}
                />
                <TodoListComponent
                    tasks={tasks}
                    handleTodoIsDoneChange={handleTodoIsDoneChange}
                />
            </ContentComponent>

            <FooterComponent/>
        </div>
    );
}

export default AppComponent;
