import React from "react";
import { Redirect } from "react-router-dom";

 const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = React.useState(false);
    
    const toggle = () => {
        setIsAuth(prev => !prev);  
    }

    const value = { isAuth  ,toggle};
    return (<AuthContext.Provider value={value}>
         {children}
       </AuthContext.Provider>)

}
export {AuthContextProvider,AuthContext}