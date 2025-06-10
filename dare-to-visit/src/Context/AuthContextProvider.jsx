// AuthContextProvider.jsx
import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext.js";
import axios from "axios";
import { BE_URL } from "../URL.js";

const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);

    const login = (token) => {
        localStorage.setItem("token", token);
        setIsAuth(true);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setIsAuth(false);
    };

    // app load, verify token...
    useEffect(() => {
        const verifyToken = async () => {
            const token = localStorage.getItem("token");
            if (!token) return;

            try {
                const res = await axios.get(`${BE_URL}api/user/verify-token`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                if (res.data.valid) {
                    setIsAuth(true);
                } else {
                    logout(); // if token is fake or expired
                }
            } catch (err) {
                console.error("Invalid token or error verifying:", err);
                logout(); // invalid token or network error
            }
        };

        verifyToken();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuth, login, logout, setIsAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;

