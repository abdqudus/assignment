import { Link, useParams, Outlet } from "react-router-dom"
import NoReview from './NoReview'
import { tags } from "../data"
import ChildNav from "./ChildNav"
import Reviews from "./Reviews"
import { useState } from "react"

const Child = () => {

    const { place } = useParams()
    const places = JSON.parse(localStorage.getItem('places'))
    const selectedplace = places.find(p => p.name == place)

    const isReviewPresent = selectedplace.reviews.length > 0
    const [inputValue, setInputValue] = useState(place)

    return (
        <div className="min-h-screen dark:bg-black pb-6 dark:text-[#E6E6E6] bg-[#FBFAFC]">
            <ChildNav selectedplace={selectedplace} isReviewPresent={isReviewPresent} place={place} />


            <div className="md:px-12 px-4 ">
                <form className="max-w-[557px] mt-6 md:hidden">
                    <div className={`h-[50px] relative px-4 flex items-center gap-2 rounded-[6px] border dark:bg-[#242428]  transition-[border] bg-[#F3F7FE] dark:border-[#242428] border-[#D4DCF1]`}>

                        <label htmlFor="search">
                            <img src="/search.png" alt="" />
                        </label>
                        <input type="search" id="search" value={inputValue} onChange={e => setInputValue(e.target.value)} className="bg-transparent dark:text-[#999999] dark:placeholder:text-[#999999] placeholder:tracking-[0.0025em] w-[50px] placeholder:text-sm placeholder:text-[#484851] flex-grow focus:bg-transparent outline-0" placeholder="Enter Address" />

                    </div>
                </form>
                <h3 className="mt-6 md:hidden font-inter font-medium text-2xl leading-[19.2px] dark:text-[#FBFAFC]  text-[#1E1E1E]">{place}</h3>
                {isReviewPresent ?
                    <p className="mt-4 font-bold md:hidden text-[.75rem] md:text-2xl dark:text-[#FBFAFC] "><span className="text-[#18181B]  dark:text-[#FBFAFC]  font-semibold">{`"${selectedplace.reviews.length}"`} </span>Reviews (People are raving about the location) </p>
                    :
                    <p className="mt-4 font-bold md:hidden text-[.75rem] md:text-2xl dark:text-[#FBFAFC] "><span className="text-[#18181B]  dark:text-[#FBFAFC]  font-semibold">“0” </span>Reviews </p>
                }
                <div className="flex flex-wrap gap-x-2 gap-y-3 mt-4">
                    {tags.map(t => (
                        <p key={t} className="px-2 flex justify-center items-center border-[.2px] border-[#1E1E1E]  dark:border-[#FBFAFC] text-[.75rem] dark:text-[#FBFAFC] rounded-[4px] py-1">
                            <span> {t}</span>
                        </p>


                    ))}
                </div>
                <div className="mt-4 flex gap-4 md:hidden items-center flex-wrap ">
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
                {isReviewPresent ? <Reviews images={selectedplace.images} reviews={selectedplace.reviews} /> : <NoReview />}
                <Outlet />
            </div>
        </div>
    )
}

export default Child
