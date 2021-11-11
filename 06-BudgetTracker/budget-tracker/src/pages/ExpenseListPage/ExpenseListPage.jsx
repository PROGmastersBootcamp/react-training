import {ExpenseList} from '../../components/ExpenseList/ExpenseList';
import {useEffect, useState} from 'react';
import {getExpenses} from '../../services/expensesService';

export const ExpenseListPage = props => {

    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        getExpenses()
            .then(setExpenses)
    }, []);

    return (
        <div>
            <ExpenseList
                expenses={expenses}
            />
        </div>
    );
};
