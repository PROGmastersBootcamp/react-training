export const ExpenseList = props => {

    return (
        <div className='jumbotron'>
            <table className='table table-hover'>
                <thead>
                <tr>
                    <th scope='col'>Expense Date</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Amount</th>
                    <th scope='col'>Category</th>
                </tr>
                </thead>
                <tbody>
                {props.expenses.map((expense, index) =>
                                          <tr key={index}>
                                              <th scope='row'>{expense.expenseDate}</th>
                                              <td>{expense.description}</td>
                                              <td>{expense.amount}</td>
                                              <td>{expense.categoryName}</td>
                                          </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};
