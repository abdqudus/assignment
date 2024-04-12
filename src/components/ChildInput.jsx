import React from 'react'

const ChildInput = ({ id }) => {
    return (
        <form className="flex-grow md:max-w-[778px]">
            <div className={`h-[50px] relative px-4 flex items-center gap-2 rounded-[6px] border dark:bg-[#242428]  transition-[border] bg-[#F3F7FE] dark:border-[#242428] border-[#D4DCF1]`}>

                <label htmlFor="search">
                    <img src="/search.png" alt="" />
                </label>
                <input type="search" id="search" value={id} readOnly className="bg-transparent dark:text-[#999999] dark:placeholder:text-[#999999] placeholder:tracking-[0.0025em] w-[50px] placeholder:text-sm placeholder:text-[#484851] flex-grow focus:bg-transparent outline-0" placeholder="Enter Address" />

            </div>
        </form>
    )
}

export default ChildInput
