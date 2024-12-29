import React from 'react'
import { Outlet } from 'react-router-dom'
import ShoopingViewHeader from './header'

export default function ShoppingLayout() {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      {/* commonheader */}
      <ShoopingViewHeader/>
      <div className="flex flex-col w-full">
        <Outlet/>
      </div>
    </div>
  )
}
