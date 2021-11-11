import {Route} from 'react-router-dom';
import {Navbar} from '../Navbar/Navbar';
import {CategoryFormPage} from '../../pages/CategoryFormPage/CategoryFormPage';
import {ExpenseFormPage} from '../../pages/ExpenseFormPage/ExpenseFormPage';
import {CategoryListPage} from '../../pages/CategoryPage/CategoryListPage';
import {ExpenseListPage} from '../../pages/ExpenseListPage/ExpenseListPage';
import {ExpenseSummaryPage} from '../../pages/ExpenseSummaryPage/ExpenseSummaryPage';

export const Layout = () => {

    return (
        <div>
            <Navbar/>
            <Route path='/category-form' exact component={CategoryFormPage}/>
            <Route path='/category-list' exact component={CategoryListPage}/>
            <Route path='/expense-form' exact component={ExpenseFormPage}/>
            <Route path='/expense-list' exact component={ExpenseListPage}/>
            <Route path='/expense-summary' exact component={ExpenseSummaryPage}/>

            {/*Footer*/}
        </div>
    );
};
