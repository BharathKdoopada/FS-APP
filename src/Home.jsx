import React from 'react'
import Nav from './components/nav'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div className='h-full w-full grid grid-rows-[auto_1fr_auto]'>
     <Nav/>

      <main className="p-4" style={{ backgroundImage: "linear-gradient(to right, #DECBA466, #3E515166)" }}>
        {Outlet}
      </main>

      {/* <footer className="p-2 bg-black text-white text-end text-xs">
        &copy; 2023 FS
      </footer> */}
    </div>
  )
}
