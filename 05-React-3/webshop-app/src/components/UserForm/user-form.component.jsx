import {useEffect, useState} from "react";
import {createUser} from "../../services/user.service";
import {useUserContext} from "../../contexts/user.context";

const INITIAL_FORM_STATE = {
    'last_name': '',
    'first_name': '',
    'email': '',
    'gender': '',
};

export const UserFormComponent = props => {

    const {currentUser, setCurrentUser} = useUserContext();

    useEffect(() => {
        console.log(currentUser);
    }, [currentUser]);

    const [userForm, setUserForm] = useState(INITIAL_FORM_STATE);

    const handleInputChange = (event) => {
        const targetName = event.currentTarget.name;
        const newValue = event.currentTarget.value;
        setUserForm(prevState => ({
            ...prevState,
            [targetName]: newValue
        }))
    };

    const submitHandler = () => {
        createUser(userForm)
            .then(() => setUserForm(INITIAL_FORM_STATE));
    };

    return (
        <div>
            <h2>User Form</h2>
            <input type="text" name={'last_name'}
                   placeholder={'Last name'}
                   value={userForm['last_name']} onChange={handleInputChange}
            />
            <input type="text" name={'first_name'}
                   placeholder={'First name'}
                   value={userForm['first_name']} onChange={handleInputChange}
            />
            <input type="email" name={'email'}
                   placeholder={'Email address'}
                   value={userForm['email']} onChange={handleInputChange}
            />
            <select name="gender" onChange={handleInputChange} value={userForm.gender}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <button
                type={"button"}
                onClick={submitHandler}
            >
                Submit
            </button>
        </div>
    );
};
