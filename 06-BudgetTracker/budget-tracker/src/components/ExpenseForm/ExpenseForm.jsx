import {useEffect, useState} from 'react';
import {globalChangeHandler} from '../../utils/formUtils';
import {getCategories} from '../../services/categoryService';
import {saveExpense} from '../../services/expensesService';

export const ExpenseForm = (props) => {

    const [expenseForm, setExpenseForm] = useState({
        amount: 0,
        expenseDate: '',
        categoryId: '',
        description: '',
    });
    const [availableCategories, setAvailableCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then(setAvailableCategories);
    }, []);

    const onSaveHandler = () => {
        saveExpense(expenseForm)
            .then(console.log);
    };

    return (
        <div className='container'>
            <div className='mb-3'>
                <label
                    htmlFor='expenseAmountInput'
                    className='form-label'
                >
                    Expense amount
                </label>
                <input
                    type='number'
                    className='form-control'
                    id='expenseAmountInput'
                    name='amount'
                    value={expenseForm.amount}
                    onChange={globalChangeHandler(expenseForm, setExpenseForm)}
                />
            </div>
            <div className='mb-3'>
                <label
                    htmlFor='expenseDateInput'
                    className='form-label'
                >
                    Date of expense
                </label>
                <input
                    type='date'
                    className='form-control'
                    id='expenseDateInput'
                    name='expenseDate'
                    value={expenseForm.expenseDate}
                    onChange={globalChangeHandler(expenseForm, setExpenseForm)}
                />
            </div>
            <div className='mb-3'>
                <label
                    htmlFor='expenseCategorySelect'
                    className='form-label'
                >
                    Category name
                </label>
                <select
                    className='form-select'
                    id='expenseCategorySelect'
                    aria-label='Category name'
                    name='categoryId'
                    value={expenseForm.categoryId}
                    onChange={globalChangeHandler(expenseForm, setExpenseForm)}
                >
                    {
                        availableCategories.map(category => <option value={category.id}>{category.name}</option>)
                    }
                </select>
            </div>
            <div className='mb-3'>
                <label
                    htmlFor='expenseDescriptionInput'
                    className='form-label'
                >
                    Expense description
                </label>
                <input
                    type='text'
                    className='form-control'
                    id='expenseDescriptionInput'
                    name='description'
                    value={expenseForm.description}
                    onChange={globalChangeHandler(expenseForm, setExpenseForm)}
                />
            </div>
            <button
                className='btn btn-success'
                onClick={onSaveHandler}
            >
                Save Expense
            </button>
        </div>
    );
};
