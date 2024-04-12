import React from 'react'

const CommentHeader = ({ reviewer }) => {
    return (
        <div>
            <header className='flex  justify-between gap-y-2 flex-wrap items-center'>
                <div className='flex gap-2 items-center flex-wrap'>
                    <img src={reviewer.dp} width='24' height='24' alt="" />
                    <p className='text-[#1E1E1E] dark:text-[#FBFAFC]  text-[1rem] leading-[16.1px]'>{reviewer.name}</p>
                    <p className='text-light-gray dark:text-[#FBFAFC]  text-[1rem] leading-[16.1px]'>{reviewer.date}</p>
                </div>
                <div className='flex gap-1 items-center'>
                    <img src="/star-c.png" alt="" />
                    <p>{reviewer.rating}</p>
                </div>
            </header>
        </div>
    )
}

export default CommentHeader
