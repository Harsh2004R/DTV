// AuthContextProvider.jsx
import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext.js";
import axios from "axios";
import { BE_URL } from "../URL.js";
import { showToast } from "../Utils/toast.js";

const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    const login = (token) => {
        localStorage.setItem("token", token);
        setIsAuth(true);
        showToast({
            title: "Login Success",
            description: "Welcome to the dark side of reality",
            duration: 4000,
            status: "success",
            position: "bottom"
        });
    };

    const navTologin = (url) => {
        window.location.href = `${url}`;
    };
    const logout = () => {
        localStorage.removeItem("token");
        setIsAuth(false);
        showToast({
            title: "Logged out",
            description: "You have been successfully logged out.",
            duration: 3000,
            status: "loading",
            position: "bottom-right"

        });
    };



    // app load, verify token...
    useEffect(() => {
        verifyToken();
    }, []);



    const verifyToken = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            setLoading(false);
            return;
        }

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
        } finally {
            setLoading(false); // ✅ always stop loading
        }

    };

    return (
        <AuthContext.Provider value={{ isAuth, login, logout, setIsAuth, loading, navTologin }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;

