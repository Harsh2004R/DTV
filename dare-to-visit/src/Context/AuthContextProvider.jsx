// AuthContextProvider.jsx
import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext.js";
import axios from "axios";
import { BE_URL } from "../URL.js";
import { showToast } from "../Utils/toast.js";

const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    const [role, setRole] = useState("");



    const login = (token, userProfile, role) => {
        localStorage.setItem("token", token);
        localStorage.setItem("profile", userProfile)
        localStorage.setItem("role", role);
        setIsAuth(true);
        setRole(role);
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
        localStorage.removeItem("role");
        setIsAuth(false);
        setRole("");
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
        const storedRole = localStorage.getItem("role");
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
                setRole(res.data.role || storedRole);
            } else {
                logout(); // if token is fake or expired
            }
        } catch (err) {
            console.error("Invalid token or error verifying:", err);
            logout(); // invalid token or network error
        } finally {
            setLoading(false);
        }

    };

    return (
        <AuthContext.Provider value={{ isAuth, login, logout, setIsAuth, loading, navTologin, role }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;

