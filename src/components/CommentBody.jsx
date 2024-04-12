import React from 'react'

const CommentBody = ({ text }) => {
    return (
        <div className='mt-4'>
            <p className='text-[#18181B] dark:text-[#FBFAFC] leading-6 text-[1rem]'>{text}
            </p>
        </div>
    )
}

export default CommentBody
