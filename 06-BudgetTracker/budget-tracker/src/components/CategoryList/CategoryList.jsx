export const CategoryList = props => {

    return (
        <div className='jumbotron'>
            <table className='table table-hover'>
                <thead>
                <tr>
                    <th scope='col'>Id</th>
                    <th scope='col'>Name</th>
                </tr>
                </thead>
                <tbody>
                {props.categories.map(category =>
                                          <tr key={category.id}>
                                              <th scope='row'>{category.id}</th>
                                              <td>{category.name}</td>
                                          </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};
