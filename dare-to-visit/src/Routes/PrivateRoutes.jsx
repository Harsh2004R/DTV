import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../Context/AuthContext.js";
import { Center, Spinner } from "@chakra-ui/react";

const PrivateRoutes = () => {
    const { isAuth, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <Center h="100vh">
                <Spinner size="lg" color="teal.400" />
            </Center>
        );
    }

    return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
