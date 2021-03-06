import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = () => {
    const [admin] = useAdmin();
    const location = useLocation();

    if (!admin) {
        return <Navigate to='/' />
    }

    return <Outlet />;
};

export default AdminRoute;