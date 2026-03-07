import React from 'react'
import UseerLayout from '../layout/userlayout/UseerLayout'
import { Outlet } from 'react-router-dom'

const UserPRotectedRouter = () => {
  return (
    <UseerLayout>
        <Outlet />
      
    </UseerLayout>
  )
}

export default UserPRotectedRouter