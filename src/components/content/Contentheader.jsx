/* eslint-disable no-unused-vars */
import React from 'react'
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Contentheader() {
    return (
        <>
            <div className='header flex justify-between pt-4 items-center'>
                <span className='flex items-center'>
                    <LeaderboardIcon className='absolute ' fontSize='large' />
                    <h1 className='relative text-4xl font-robot font-medium text-secondary pl-12'>LeaderBoard</h1>
                </span>
                <div className="icons mr-3">
                    <ul className='flex gap-4 items-center'>
                        <li className='dropdown flex mr-2'><img src="/public/bell-icon.png" className='w-[25px] relative' alt="" /><ArrowDropDownIcon className='absolute right-[8.5rem] top-16' /></li>
                        <li className='flex items-center gap-1'><img src="/public/coin.png" className='w-[25px] ' alt="" /><button>0</button></li>
                        <li className='flex items-center'><img src="/public/profile.png" className='w-[25px] relative' alt="" />
                            <ArrowDropDownIcon className='absolute right-7 top-16' />   </li>
                    </ul>
                </div>
            </div>
            <hr className="m-4  border-[2px] border-gray-300 rounded-lg" />
        </>
    )
}

export default Contentheader