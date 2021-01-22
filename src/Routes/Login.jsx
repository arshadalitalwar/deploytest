import React from 'react'
import { Redirect } from 'react-router-dom';
import {AuthContext} from "../Context/AuthContextProvider"
const Login = () => {

    const {isAuth, toggle } = React.useContext(AuthContext);

    return !isAuth ? (
        <div>  
            {isAuth&& <p>Login Succesfully</p>}
         <button onClick={toggle}>Login</button>   
        </div>
    ) : (
            <Redirect to="/users" />
    )
}

export  {Login}
