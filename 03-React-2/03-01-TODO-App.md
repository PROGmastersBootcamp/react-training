## Let's create a basic TODO application!

###### *The holy-grail of abandoned pet-projects*.

###

##### 1. Initialize a basic React application.

- Call it `my-todo-app`.

##### 2. Use Bootstrap CSS library

- The easy
  way: [First point from this article](https://blog.logrocket.com/how-to-use-bootstrap-with-react-a354715d1121/)

##### 3. Build the wireframe of the application by creating a few components:

- Header
    - Pass a title prop
    - Set its style to 'height: 10%'
- Content
    - Set its style to 'height: 80%' and 'margin:10px'
- Footer
    - Use some dummy-content (lorem-ipsum)
    - Set its style to 'height: 10%'

##### 4. Create the TodoListComponent

- This receives a list of TODO objects as props TODO object:
  ```javascript
     const todo = {
        task: 'some task',
        priority: 3
     }
  ```
- Put this component INSIDE the Content component - discuss why it's not working - then fix it
  ```tsx
     <Content>
          <TodoListComponent/>
     </Content>
   ```

##### 5. Create a TodoItemComponent

- This should only receive a single todo item as props, and display its data

##### 6. Map the todo objects into TodoItemComponents

- Discuss topics, such as:
    - key props, its function and purpose
    - React.Fragment or <></> 'component'
    - Now might also be a great occasion to talk about a few Array functions!

##### 7. Create a new component called TodoFormComponent

- Put this component INSIDE the Content component - on the top, preferably

##### 8. Create a new component called InputComponent

- Use it in the TodoFormComponent
- Discuss how can you bind the input value to the application state

##### 9. Create a new component called RadioGroupComponent

- This should receive an array of numbers [1,2,3,4,5] as props
- Setup a basic radio-button group
- Implement two-way-binding

##### 10. Realise that it is silly, to write this logic over and over again, and come up with the idea that this should be shared between the components somehow

- Talk about Higher Order Components
- Implement Higher Order Components

##### 11. Add the new Todo items to the list on every form submission

##### 12. Use different background color for each severity level, on the TODO items

##### 12. Add a button to complete a TodoItem

##### 13. Use conditional rendering to hide completed items

##### 14. Realise this is silly again, and filter the TODO list instead :)

##### 15. Some refactoring and type-safety

- Implement PropTypes for components, where necessary
