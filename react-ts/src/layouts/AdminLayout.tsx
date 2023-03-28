import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
        <h1>Header Admin</h1>
        <main>
            <Outlet/>
        </main>

        <h1>
            Footer Admin
        </h1>
    </div>
  )
}

export default AdminLayout