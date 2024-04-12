import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ChildNav = ({ place, isReviewPresent, selectedplace }) => {
    const [input, setInput] = useState(place)
    return (
        <header className="md:bg-[#F2F6FD] dark:bg-[#18181B]  p-4 md:px-12 md:py-6">
            <nav className="flex bg-inherit  justify-between items-center">
                <div className="dark:hidden" >
                    <Link to='/'>
                        <img src="/ic_logo.svg" />
                    </Link>
                </div>
                <div className="hidden dark:block" >
                    <Link to='/'>
                        <img src="/logo-dark.svg" />
                    </Link>
                </div>
                <form className="flex-grow hidden md:block max-w-[778px]">
                    <div className={`h-[50px] relative px-4 flex items-center gap-2 rounded-[6px] border dark:bg-[#242428]  transition-[border] bg-[#F3F7FE] dark:border-[#242428] border-[#D4DCF1]`}>

                        <label htmlFor="search">
                            <img src="/search.png" alt="" />
                        </label>
                        <input type="search" id="search" value={input} onChange={e => setInput(e.target.value)} className="bg-transparent dark:text-[#999999] dark:placeholder:text-[#999999] placeholder:tracking-[0.0025em] w-[50px] placeholder:text-sm placeholder:text-[#484851] flex-grow focus:bg-transparent outline-0" placeholder="Enter Address" />

                    </div>
                </form>
                <div className=" flex justify-center items-center gap-2">
                    <p className="text-[#101012] hidden vlg:block text-[1rem] font-medium">Welcome</p>
                    <div className="w-[36px] h-[36px] rounded-full">
                        <Link to='/reviews'>
                            <img src="/dp.png" width='36' height='36' className="rounded-full " alt="profile picture" />
                        </Link>
                    </div>
                </div>

            </nav>
            <div className="hidden  md:flex justify-between items-center">
                <div>

                    <h3 className="mt-6 font-inter font-medium text-2xl leading-[19.2px] dark:text-[#FBFAFC]  text-[#1E1E1E]">{place}</h3>

                    {isReviewPresent ? <p className="mt-4 font-bold text-[.75rem] md:text-2xl dark:text-[#FBFAFC] "><span className="text-[#18181B]  dark:text-[#FBFAFC]  font-semibold">{`"${selectedplace.reviews.length}"`} </span>Reviews (People are raving about the location) </p>
                        : <p className="mt-4 font-bold text-[.75rem] md:text-2xl dark:text-[#FBFAFC] "><span className="text-[#18181B]  dark:text-[#FBFAFC]  font-semibold">“0” </span>Reviews </p>}
                </div>
                <div className="mt-4 flex gap-4  items-center flex-wrap ">
                    <Link to='review'>
                        <button className="py-4 px-10 bg-[#3366FF]  text-white font-medium font-inter text-sm rounded-[6px] leading-[16.94px]">Leave a Review</button>
                    </Link>
                    <div className="w-[56px] h-[47px] rounded-[6px] flex justify-center items-center border border-[#3366FF]">
                        <img src="/location.svg" alt="" />
                    </div>
                    <div className="w-[56px] h-[47px] rounded-[6px] flex justify-center items-center border border-[#3366FF]">
                        <img src="/share.svg" alt="" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default ChildNav
