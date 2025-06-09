import React, { useState } from "react";
import AuthContext from "./AuthContext.js"
const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const login = () => {

    }
    const logout = () => {

    }
    return (
        <AuthContext.Provider value={{ isAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;


