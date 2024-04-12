import React, { useRef, useState } from 'react'

const Rating = ({ setRating }) => {
    const starRef = useRef()

    const rateLocation = (e) => {
        const parent = e.target.parentElement
        const spans = Array.from(starRef.current.querySelectorAll('span'))
        spans.forEach((s, i) => {

            const imgs = s.querySelectorAll('img')
            if (i <= Number(parent.id)) {
                if (!imgs[0].classList.contains('hidden')) {
                    imgs[0].classList.add('hidden')
                    imgs[1].classList.remove('hidden')
                }
            } else {
                if (imgs[0].classList.contains('hidden')) {
                    imgs[0].classList.remove('hidden')
                    imgs[1].classList.add('hidden')
                }
            }
        });
        setRating(Number(parent.id) + 1)
    }
    return (
        <div className="rate-location">
            <h3 className='text-[#1E1E1E] dark:text-[#FBFAFC] text-sm font-medium'>Rate Location</h3>
            <div ref={starRef} className='mt-2 flex '>
                <span id='0' className='block w-[15px] h-[15px] relative' onClick={rateLocation}>
                    <img src="/dim-star.svg" alt="" />
                    <img src="/star-c.svg" className=' hidden' alt="" />
                </span>
                <span id='1' className='block w-[15px] h-[15px]  relative' onClick={rateLocation}>
                    <img src="/dim-star.svg" alt="" />
                    <img src="/star-c.svg" className=' hidden' alt="" />
                </span>
                <span id='2' className='block w-[15px] h-[15px]  relative' onClick={rateLocation}>
                    <img src="/dim-star.svg" alt="" />
                    <img src="/star-c.svg" className=' hidden' alt="" />
                </span>
                <span id='3' className='block w-[15px] h-[15px]  relative' onClick={rateLocation}>
                    <img src="/dim-star.svg" alt="" />
                    <img src="/star-c.svg" className=' hidden' alt="" />
                </span>
                <span id='4' className='block w-[15px] h-[15px] relative' onClick={rateLocation}>
                    <img src="/dim-star.svg" alt="" />
                    <img src="/star-c.svg" className=' hidden' alt="" />
                </span>
            </div>
        </div>
    )
}

export default Rating
