import React from 'react'
import { ManageCard } from './ManageCard'
import NavBar from './NavBar'

const Home = () => {
    return (
        <div className="bg-[#191307] h-screen p-[16px]">
            <NavBar />
            <h1 className='text-white text-3xl font-semibold mt-5 flex gap-10 tracking-[0.4px]'>Hello Rajeshwar</h1>
             <ManageCard />
        </div>
    )
}

export default Home