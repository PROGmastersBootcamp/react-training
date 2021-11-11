import {Link} from 'react-router-dom';

export const Navbar = (props) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a
                    className="navbar-brand"
                    href="#"
                >BudgetTracker</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                to='/category-form'
                            >
                                New Category
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                to='/category-list'
                            >
                                Categories
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                to='/expense-form'
                            >
                                New Expense
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                to='/expense-list'
                            >
                                Expenses
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                to='/expense-summary'
                            >
                                Summary
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};
