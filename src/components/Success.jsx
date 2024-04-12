import React from 'react'

const Success = () => {
    return (
        <div className='w-full h-full '>

            <div className='w-[80%]  max-w-[339px]  left-1/2 -translate-x-1/2 top-1/4 absolute bg-[#F2FDF2] h-[50px] gap-4 flex justify-center items-center border border-[#0F920F] rounded-[6px]'>
                <img src="/check-circle.svg" alt="" />
                <p className='text-[#0F920F] font-medium text-sm leading-[18px]'>Review Submitted</p>
            </div>
        </div>

    )
}

export default Success
