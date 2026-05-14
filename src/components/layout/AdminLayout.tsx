import React from 'react'
import { Outlet } from 'react-router'

const AdminLayout = () => {
  return (
    <div>
        <div>AdminLayout</div>
        <Outlet/>

    </div>
  )
}

export default AdminLayout