import React from 'react'

const SideBar = () => {
    return (
        <aside className='hidden lg:block'>
            <div className='flex p-4 justify-center items-center gap-4'>
                <img src="/user.svg" alt="" />
                <p>Profile</p>
            </div>
            <div className='bg-[#0B153A] text-[#FBFAFC] flex p-4 justify-center items-center gap-4'>
                <img src="/reviews.svg" alt="" />
                <p>Reviews</p>
            </div>
            <div className='flex p-4 justify-center items-center gap-4'>
                <img src="/settings.svg" alt="" />
                <p>Settings</p>
            </div>
        </aside>
    )
}

export default SideBar
