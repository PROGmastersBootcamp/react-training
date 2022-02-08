import './app.style.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NavbarComponent} from "../Navbar/navbar.component";
import {UserFormComponent} from "../UserForm/user-form.component";
import {UserDetailsComponent} from "../UserDetails/user-details.component";
import {UserListPage} from "../../pages/UserListPage/user-list.page";
import React from "react";
import {UserContextProvider} from "../../contexts/user.context";

function AppComponent() {

    return (
        <BrowserRouter>
            <UserContextProvider>
                <div className="App">
                    <NavbarComponent/>
                    <Routes>
                        <Route path='' element={<UserListPage/>}/>
                        <Route path='user-form' element={<UserFormComponent/>}/>
                        <Route path=':userId' element={<UserDetailsComponent/>}/>
                        <Route path='user-list' element={<UserListPage/>}>
                            <Route path='user-form' element={<UserFormComponent/>}/>
                            <Route path=':userId' element={<UserDetailsComponent/>}/>
                        </Route>
                    </Routes>
                </div>
            </UserContextProvider>
        </BrowserRouter>
    );
}

export default AppComponent;
