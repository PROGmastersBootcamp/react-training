import {useNavigate} from 'react-router-dom';
import {ErrorBoundary} from '../ErrorBoundary/error-boundary.component';
import React from 'react';
import {UserModel} from '../../models/user.model';

export interface UserListProps {
    users: UserModel[],
    children: React.ReactNode
}

export const UserListComponent = ({users, children}: UserListProps) => {

    const navigate = useNavigate();

    return (
        <div>
            <ErrorBoundary>
                {users.map(user =>
                    (
                        <button
                            key={user.id}
                            onClick={() => navigate(`/${user.id}`)}
                        >
                            {user.email}
                        </button>
                    ))}
            </ErrorBoundary>
            {children}
        </div>

    );
};
