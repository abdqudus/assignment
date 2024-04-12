import React from 'react'
import Comment from './Comment'
import CommentHeader from './CommentHeader'
import CommentBody from './CommentBody'
import CommentFooter from './CommentFooter'

const Reviews = ({ reviews, images }) => {
    return (
        <div className='mt-6 lg:grid lg:grid-cols-[1fr_468px] gap-4'>
            <div className="houses lg:col-start-2 self-start lg:col-end-3 grid grid-cols-2 gap-2 grid-rows-2 ">
                <div className='row-start-1 row-end-3 lg:row-end-2 rounded-[6px]'>
                    <img src={images[0]} className='object-cover rounded-[6px] w-full h-full' alt="" />
                </div>
                <div className=' rounded-[6px]'>
                    <img src={images[1]} className='object-cover rounded-[6px]' alt="" />
                </div>
                <div className='row-start-2 col-start-2 lg:col-start-1 rounded-[6px]'>
                    <img src={images[2]} className='object-cover rounded-[6px]' alt="" />
                </div>
                <div className='hidden lg:block lg:col-start-2'>
                    <img src={images[3]} className='object-cover rounded-[6px]' alt="" />
                </div>
            </div>
            <div className="comments lg:col-start-1 lg:col-end-2 row-start-1 dark:bg-black dark:text-[#E6E6E6] border-b border-[#D9D9D9]">
                {reviews.map((r, i) => (

                    <Comment key={i}>
                        <CommentHeader reviewer={r.reviewer} />
                        <CommentBody text={r.text} />
                        <CommentFooter interactions={r.interactions} />
                    </Comment>
                ))}
            </div>
        </div>
    )
}

export default Reviews
