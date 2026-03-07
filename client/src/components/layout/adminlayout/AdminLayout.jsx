import React from 'react'
import Navbar from '../../admin/Navbar'

const AdminLayout=({children})=> {
  return (
    <div className='d-flex'>
      <Navbar/>
      <div>
      {children}
      </div>
      
    </div>
  )
}

export default AdminLayout
