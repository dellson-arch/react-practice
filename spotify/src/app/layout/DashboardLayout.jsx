import React from 'react'
import Navbar from '../../features/DashBoard/ui/components/Navbar'
import {Outlet} from 'react-router'
const DashboardLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default DashboardLayout
