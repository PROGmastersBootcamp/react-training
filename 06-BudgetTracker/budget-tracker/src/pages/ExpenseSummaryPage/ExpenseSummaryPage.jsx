import {useEffect, useState} from 'react';
import {getExpenseSummaries} from '../../services/expensesService';
import {ExpenseSummaryList} from '../../components/ExpenseSummaryList/ExpenseSummaryList';

export const ExpenseSummaryPage = props => {

    const [expenseSummaries, setExpenseSummaries] = useState([]);

    useEffect(() => {
        getExpenseSummaries()
            .then(setExpenseSummaries);
    }, []);

    return (
        <div>
            <ExpenseSummaryList
                expenses={expenseSummaries}
            />
        </div>
    );
};
