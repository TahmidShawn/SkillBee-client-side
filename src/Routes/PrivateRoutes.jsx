/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div className="text-center my-72">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location} to='/login'></Navigate>
};

export default PrivateRoutes;