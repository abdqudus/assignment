import React from 'react'

const Input = ({ address, handleChange }) => {
    return (
        <input type="search" id="search" value={address} onChange={handleChange} className="bg-transparent dark:text-[#999999] dark:placeholder:text-[#999999] placeholder:tracking-[0.0025em] w-[50px] placeholder:text-sm placeholder:text-[#484851] flex-grow focus:bg-transparent outline-0" placeholder="Enter Address" />
    )
}

export default Input
