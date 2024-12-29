import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSideBar from './sidebar'
import AdminHeader from './header'

export default function AdminLayout() {
  return (
    <div className='flex min-h-screen w-full'>
      {/* admin side bar */}
      <AdminSideBar/>
      <div className='flex flex-col flex-1'>
       {/* admin header */}
       <AdminHeader/>
        <main className='flex flex-1 bg-muted/40 p-4 md:p-6 '>
          <Outlet/>
        </main>
      </div>
    </div>
  )
}
