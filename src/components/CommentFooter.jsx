import React from 'react'

const CommentFooter = ({ interactions }) => {
    return (
        <footer className='flex gap-4 items-center mt-3  '>
            <div className='flex justify-center items-center gap-2'>
                <img src="/thumbs-up-icon.svg" alt="" />
                <p>{interactions.like}</p>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <img src="/thumbs-down-icon.svg" alt="" />
                <p>{interactions.dislike}</p>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <img src="/comment-icon.svg" alt="" />
                <p>{interactions.comments}</p>
            </div>
        </footer>
    )
}

export default CommentFooter
