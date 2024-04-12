import React, { useState } from 'react'

const UserReview = ({ review }) => {
    return (
        <div className='py-3 border-b'>
            <header >
                <div className='flex justify-between items-center gap-y-2 flex-wrap'>

                    <div className='flex gap-2 items-center flex-wrap'>
                        <p className='text-2xl font-medium dark:text-[#FBFAFC]'>
                            {review.place}
                        </p>
                        <p className='flex dark:text-[#FBFAFC] items-center gap-1'>
                            <span><img src="/star-c.png" alt="" /></span>
                            <span>5.0</span>
                        </p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='w-[24px] h-[24px] rounded-[3px] flex justify-center items-center border'>

                            <img src="/edit.svg" alt="Edit review" className='hidden dark:block' />
                            <img src="/edit-light.svg" alt="Edit review" className=' dark:hidden' />
                        </p>
                        <p className='w-[24px] h-[24px] rounded-[3px] flex justify-center items-center border'>

                            <img src="/delete.svg" alt="delete review" />
                        </p>
                    </div>
                </div>
                <p className='text-[.75rem] dark:text-[#FBFAFC]  leading-[14.52px] text-[#1E1E1E] mt-1 font-normal'>{review.date}</p>
            </header>
            <p className='mt-4 dark:text-[#FBFAFC]  text-[1rem] leading-[22.4px] text-[#1E1E1E] font-normal'>
                {review.review}  </p>
        </div>
    )
}

export default UserReview
