import axios from 'axios';

export const saveExpense = (expenseForm) => {
    return axios.post('/api/expenses', expenseForm);
};

export const getExpenses = () => {
    return axios.get('/api/expenses')
                .then(response => response.data);
};

export const getExpenseSummaries = () => {
    return axios.get('/api/expenses/summary')
                .then(response => response.data);
};
