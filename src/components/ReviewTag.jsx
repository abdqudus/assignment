import React, { useState } from 'react'

const ReviewTag = ({ tag, setSelectedTags }) => {
    const [isChecked, setIsChecked] = useState(false)
    const style = isChecked ? 'bg-[#3467fe] border-[#3467fe] ' : ''
    const imgState = isChecked ? 'block' : 'hidden'
    const handleChecked = (e) => {
        setIsChecked(!isChecked)
        const target = e.target
        if (target.checked) {
            setSelectedTags(prev => ([...prev, e.target.dataset.value]))
        } else {
            setSelectedTags(prev => prev.filter(tag => tag !== target.dataset.value))
        }

    }
    return (
        <div className='flex relative px-3 items-center  gap-3 cursor-pointer'>
            <input data-value={tag} type="checkbox" checked={isChecked} onChange={handleChecked} className='sr-only ' id={tag} />
            <label htmlFor={tag} className="  flex w-full cursor-pointer items-center gap-2">
                <span className={`${style} w-[16px]  cursor-pointer flex justify-center items-center h-[16px] rounded-[4px] border border-[#D8DAE5]`}>
                    <img className={`${imgState} mt-[.1rem] `} src="/checkmark.png" width='10' height='10' alt="" />
                </span>
                <span>{tag}</span>
            </label>
        </div>
    )
}

export default ReviewTag
