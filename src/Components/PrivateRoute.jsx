import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';


const PrivateRoute = ({ children, path }) => {
    const { isAuth } = React.useContext(AuthContext);
    
    return isAuth ?  (
        <Route path={path}>{children}</Route>
            
        
    ) : (
            <Redirect to="/"></Redirect>
    )
}

export {PrivateRoute}
