import React from 'react'
import { Link } from 'react-router-dom'

const NoReview = () => {
    return (
        <div className="mt-12  flex flex-col gap-4 items-center ">
            <img src="/Empty State.svg" alt="" />
            <p className="mt-2 text-[1rem] text-[#1E1E1E] dark:text-[#FBFAFC]  leading-5">Oops! No review yet.</p>
            <Link to='review'>
                <button className="py-4 px-10 bg-[#3366FF] dark:bg-black dark:border dark:border-[#3366FF] dark:text-[#3366FF]  text-white font-medium font-inter text-[1rem] rounded-[6px] leading-[19.36px]">Leave a Review</button>
            </Link>
        </div>
    )
}

export default NoReview
