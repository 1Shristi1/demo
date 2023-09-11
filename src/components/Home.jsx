import React from 'react'
import { Link } from 'react-router-dom'
import { ManageCard } from './ManageCard'

const Home = () => {
    return (
        <div className="bg-zinc-900 h-screen p-4">
            <h1 className='text-white text-3xl font-semibold mt-5 flex gap-10'>Hello Rajeshwar</h1>
             <ManageCard />
        </div>
    )
}

export default Home