import {Link} from 'react-router-dom';

export const NavbarComponent = () => {

    return (
        <nav>
            <Link to="/">User List</Link>
            <Link to="/user-form">User Form</Link>
            <Link to="/user-list">User List</Link>
            <Link to="/user-list/user-form">User List + Form ( With Nesting )</Link>
        </nav>
    );
};
