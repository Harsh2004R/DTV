import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Spinner, Center } from "@chakra-ui/react";
import AuthContext from "../Context/AuthContext";

const PrivateAdminRoutes = ({ children }) => {
    const { isAuth, role, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <Center h="100vh">
                <Spinner size="lg" color="teal.400" />
            </Center>
        );
    }
    if (!isAuth || role !== "admin") return <Navigate to="/admin-login" replace />;
    return <Outlet />;
};

export default PrivateAdminRoutes;
