import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {loadUserDetails} from "../../services/user.service";

export const UserDetailsComponent = props => {

    const {userId} = useParams();
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        loadUserDetails(userId)
            .then(response => setUserDetails(response.data))
            .catch(console.warn);
    }, [userId]);

    return (
        <div>
            <h1>UserDetails</h1>
            {userDetails && <div>
                <h5>Full name: {userDetails['last_name'] + ' ' + userDetails['first_name']}</h5>
                <h6>Email: {userDetails.email}</h6>
                <h6>Gender: {userDetails.gender}</h6>
            </div>
            }
        </div>
    )
};
