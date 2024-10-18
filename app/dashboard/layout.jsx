import React from 'react'
import Sidebar from '../ui/dashboard/sidebar/sidebar'
import Navbar from '../ui/dashboard/navbar/navbar'

const Layout = ({children}) => {
  return (
    <div>
        <div>
            <Sidebar />
        </div>
        <div>
            <Navbar />
        </div>
        {children}
    </div>
  )
}

export default Layout