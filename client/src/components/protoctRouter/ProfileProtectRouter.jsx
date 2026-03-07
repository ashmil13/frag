import React from 'react'
import ProfileLayout from '../layout/profilelayout/ProfileLayout'
import { Outlet } from 'react-router-dom'

const ProfileProtectRouter = () => {
  return (
    <ProfileLayout>
        <Outlet />
      
    </ProfileLayout>
  )
}

export default ProfileProtectRouter