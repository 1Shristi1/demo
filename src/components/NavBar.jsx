import React from 'react'
import WestIcon from '@mui/icons-material/West';

const NavBar = () => {
    return (
        <div className='relative'>

            <div className="absolute top-[-35px] w-full h-full bg-gradient-to-b from-[#FFE3B6] to-[#191307] blur-[40px] rounded-full" />
            <div className='flex justify-between relative'>
                <div className='bg-[#262626] h-10 w-10 rounded-full text-white p-[0.5px] flex items-center justify-center'>
                    <WestIcon />
                </div>

                <div>
                    <button className='h-10 rounded-full border border-[#f8f3ea] bg-transparent py-1 px-5 text-white'>Need Help</button>
                </div>


            </div>
        </div>

    )
}

export default NavBar