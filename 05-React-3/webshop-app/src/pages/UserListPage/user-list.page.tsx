import {UserListComponent} from '../../components/UserList/user-list.component';
import {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';
import {loadAllUsers} from '../../services/user.service';
import {UserModel} from '../../models/user.model';

export const UserListPage = () => {

    const [users, setUsers] = useState<UserModel[]>([]);

    useEffect(() => {
        loadAllUsers(0, 20)
            .then(response => setUsers(response.data));
    }, []);

    return (
        <UserListComponent
            users={users}
        >
            <Outlet/>
        </UserListComponent>
    );
};
