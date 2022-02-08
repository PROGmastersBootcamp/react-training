import React, {useContext, useState} from "react";

const UserContext = React.createContext(null);

export const UserContextProvider = props => {

    const [currentUser, setCurrentUser] = useState('Attila');

    return (
        <UserContext.Provider
            value={{currentUser, setCurrentUser}}
        >
            {props.children}
        </UserContext.Provider>
    )
};

export function useUserContext() {
    return useContext(UserContext);
}
