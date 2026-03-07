import React from 'react';
import AdminLayout from '../layout/adminlayout/AdminLayout';
import { Outlet } from 'react-router-dom';

const AdminProtectedRouter = () => {
  return (
    <AdminLayout>
        <Outlet />
      
    </AdminLayout>
  );
};

export default AdminProtectedRouter;