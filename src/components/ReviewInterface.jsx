import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Rating from './Rating'
import { reviewTags } from '../data'
import ReviewTag from './ReviewTag'
import { formatDate } from '../utils/utils'
import { v4 as uuidv4 } from 'uuid';
const ReviewInterface = ({
    place,
    isBtnEnabled,
    rating,
    setRating,
    setIsReviewSuccessful,
    setSelectedTags,
    reviewText,
    setReviewText
}) => {
    const [isDropdown, setIsDropdown] = useState(true)
    const navigate = useNavigate()

    const saveReview = () => {

        const date = formatDate()
        const userReview = JSON.parse(localStorage.getItem('user-reviews'))
        const newReview = { id: uuidv4(), place, review: reviewText, date, rating }

        userReview.push(newReview)
        localStorage.setItem('user-reviews', JSON.stringify(userReview))
        const newPlaceData = {
            text: reviewText, interactions: { like: 0, dislike: 0, comments: 0 }, reviewer: {
                dp: "/dp.png",
                name: "User .",
                rating: rating + '.0',
                date
            },
        }
        const places = JSON.parse(localStorage.getItem('places'))
        const np = places.find(p => p.name == place)
        np.reviews.push(newPlaceData)
        localStorage.setItem('places', JSON.stringify(places))
        setIsReviewSuccessful(true)
        setTimeout(() => { navigate(`/location/${place}`) }, 1500)


    }
    return (
        <div className=' p-4 bg-[#FAFCFD] dark:bg-[#1E1E1E] dark:border border-[#D4DCF1]  md:w-[695px] w-full flex flex-col  gap-4 rounded-[6px] h-[80%] '> {/*bg-[#FAFCFD] */}
            <div className=''>
                <h3 className="text-center my-4 md:my-2 font-medium text-[1.125rem] text-[#1E1E1E] dark:text-[#fafcfd] font-inter leading-6">Review Location</h3>
                <p className='font-medium text-xl text-center leading-6 dark:text-[#fafcfd] text-[#1E1E1E]'>{place}</p>
            </div>
            <div onClick={() => setIsDropdown(!isDropdown)} className={`min-h-[50px] md:mt-0 mt-8 px-2 relative dark:bg-[#242428]  bg-[#F3F7FE]  flex justify-between items-center`}>
                <p className='text-[#1E1E1E] dark:text-[#FBFAFC] text-sm leading-[16.1px]'>Select Amenities</p>
                <img src="/arrow-down.png" className={`${isDropdown ? 'rotate-180 transition' : 'transition rotate-0'} peer`} alt="" />

                <div onClick={(e) => e.stopPropagation()} className={`tags ${isDropdown ? 'py-3 h-[250px]' : 'py-0 h-0 border-0'} h-0 border  dark:border-[#D4DCF1]  bg-[#F3F7FE]  dark:bg-[#242428] z-50  left-0 overflow-hidden rounded-[6px] absolute top-[101%] w-full`}>

                    <div className='md:grid grid-cols-4  dark:text-[#FBFAFC]'>
                        {reviewTags.map(i => (
                            <ReviewTag setSelectedTags={setSelectedTags} key={i} tag={i} />
                        ))}
                    </div>
                </div>
            </div>
            <Rating setRating={setRating} />
            <p className='text-[#1E1E1E] leading-[16.94px] dark:text-[#FBFAFC]  mt-4'>Write Review</p>
            <textarea onChange={(e) => setReviewText(e.target.value)} className='border text-[#1E1E1E] dark:text-[#FBFAFC] dark:bg-[#242428] text-sm leading-[16.1px] border-[#D4DCF1] bg-[#FBFAFC] p-4 rounded-[6px] outline-0' placeholder='Enter your comment here ' value={reviewText} name="" id="" cols="30" rows="10"></textarea>
            <div className='flex gap-[10px] flex-wrap mt-4'>
                <button onClick={saveReview} disabled={!isBtnEnabled} className='w-[143.5px] h-[50px] font-medium leading-[19.36px] text-white disabled:bg-[#E4E9FB] bg-[#3366FF] rounded-[6px]'>SUBMIT</button>
                <button className='w-[143.5px] h-[50px] font-medium leading-[19.36px] border border-[#3366FF] dark:bg-transparent bg-white text-[#3366FF] rounded-[6px]'>
                    <Link to={`/location/${place}`}>CANCEL</Link></button>
            </div>
        </div>
    )
}

export default ReviewInterface
