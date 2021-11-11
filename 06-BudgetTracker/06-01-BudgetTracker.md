### Tasks

### 0. Backlog item: Config

- You may use json-server to setup a basic backend
  `db.json` template:

```json
 {
  "categories": [
    {
      "id": 1,
      "name": "category-name"
    },
    ...
  ],
  "expenses": [
    {
      "id": 1,
      "amount": 100,
      "expenseDate": "2000/01/01 10:00",
      "categoryId": 1,
      "description": "long text..."
    },
    ...
  ]
}
```

- Create the React.js app
- Import required css and js files for Bootstrap

#### 1. US: Create new category

As a user, I want to create a new Category that is stored in a database, so I can store my budget categories in long
term.

**Acceptance criteria:**

- There is a link on the navigation bar that navigates to the "Create new category" page
- The form has all necessary fields and a Save button
- If there is NO validation error, the category data is stored in the database
- The input is validated and validation errors are shown under the input fields

#### 2. US: Expense category list

As a user, I want to see my budget categories in a list sorted in ascending order by their name.

Category's fields to display in the list:

- id
- name

**Acceptance criteria:**

- There is a link on the navigation bar that navigates to the "Category list" page
- The categories are displayed with all fields
- They are ordered by name
- After save, the user is redirected to the Category list page

**NOT list:**

- there is no "modify category" and "delete category" function

#### 3. US: New expense (17 points)

As a user, I want to create new Expenses that are stored in a persistent database. I want to create them one after each
other, so after saving one, I want to have an empty new Expense form (with a message, that the previous one was
successfully saved.).

Expense properties/fields:

- amount
- expenseDate
- category, that is chosen from a select list (type: Category, mandatory)
- description

**Acceptance criteria:**

- There is a link on the navigation bar that navigates to the "Create new expense" page
- The form is shown with all fields and a Save button
- The available categories are displayed as options (in the select input field)
- If there is NO validation error, the expense data is stored in the database (use DTOs)
- The input is validated and validation errors are shown under the input fields
- After save, the user redirected to an **empty New expense form** (to create expenses faster)

#### 4. US: Expense list

As a user, I want to see my expenses in a list ordered by expenseDate in descending order! So I can see my recent
expenses.

Expense's fields to display in the list:

- amount
- expenseDate
- category's name
- description, if it is not empty

**Acceptance criteria:**

- There is a link on the navigation bar that navigates to the "Expense list" page
- The expenses are displayed with all fields
- The date is formatted
- The expenses' order is correct

**NOT list:**

- there is no "modify expense" and "delete expense" function

#### 5. US: Summary page

As a user, I want to see the overview of my expenses for the past, grouped by categories.

| Category name | Sum amount |
|:-------------:|:----------:| 
| Food          | 80.0       |
| Travel        | 443.0      |
| Clothes       | 404.0      |
| House         | 302.0      |

**Acceptance criteria:**

- There is a link on the navigation bar that navigates to the "Summary" page
- A table or list is displayed
- Only those categories are displayed that has at least one expense
- Correct sum values in the "Sum amount" column
