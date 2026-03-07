import React from 'react'

import Footer from '../../user/Footer'
import Navbar from '../../user/Navbar'

const UseerLayout = ({children}) => {
  return (
    <>
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
      
  
    </>
  )
}

export default UseerLayout

