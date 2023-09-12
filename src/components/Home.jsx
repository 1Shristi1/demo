import React from 'react'
import { ManageCard } from './ManageCard'
import NavBar from './NavBar'

const Home = () => {
    return (
        <div className="bg-[#191307] h-screen p-[16px] w-full">
            <NavBar />
            <h1 className="text-white text-2xl font-semibold mt-7 tracking-[0.4px]">Hello Rajeshwar</h1>
            <ManageCard />

        </div>
    )
}

export default Home