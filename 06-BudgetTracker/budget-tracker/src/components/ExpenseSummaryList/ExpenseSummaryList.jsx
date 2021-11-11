export const ExpenseSummaryList = props => {

    return (
        <div className='jumbotron'>
            <table className='table table-hover'>
                <thead>
                <tr>
                    <th scope='col'>Category</th>
                    <th scope='col'>Total Amount</th>
                </tr>
                </thead>
                <tbody>
                {props.expenses.map((expense, index) =>
                                        <tr key={index}>
                                            <td>{expense.totalAmount}</td>
                                            <td>{expense.categoryName}</td>
                                        </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};
