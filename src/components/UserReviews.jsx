import React from 'react'
import Header from './Header'
import UserReview from './UserReview'
import SideBar from './SideBar'

const UserReviews = () => {
    const userReviews = JSON.parse(localStorage.getItem('user-reviews'))
    return (
        <div className='bg-[#fafcfd] dark:bg-[#18181B] p-4 vlg:px-12 py-6'>
            <Header />
            <div className="mt-12 md:mt-24 lg:grid grid-cols-[200px_1fr] ">
                <SideBar />
                <div className='lg:bg-white lg:p-6 rounded-[6px]'>
                    <div>
                        <h3 className='text-xl font-medium leading-4 dark:text-[#FBFAFC] '>All Reviews Created</h3>
                        <div className='mt-8 flex flex-wrap gap-4'>
                            <form className="flex-grow basis-[20px]">
                                <div className={`h-[50px] relative px-4 flex items-center gap-2 rounded-[6px] border dark:bg-[#242428]  transition-[border] bg-[#F3F7FE] dark:border-[#242428]  border-[#D4DCF1]`}>

                                    <label htmlFor="search">
                                        <img src="/search.png" alt="" />
                                    </label>
                                    <input type="search" id="search" className="bg-transparent dark:text-[#999999] dark:placeholder:text-[#999999] placeholder:tracking-[0.0025em] w-[50px] placeholder:text-sm placeholder:text-[#484851] flex-grow focus:bg-transparent outline-0" placeholder="Search" />

                                </div>
                            </form>
                            <button className="w-[50px] rounded-[6px] lg:w-[146px] text-white bg-[#3366FF] flex items-center justify-center">
                                <img src="/search.svg" alt="" className='lg:hidden' />
                                <span className='hidden lg:block'>Search</span>
                            </button>
                        </div>
                    </div>
                    <div className='mt-4'>

                        {userReviews.map((r) => (

                            <UserReview key={r.id} review={r} />
                        ))}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserReviews
