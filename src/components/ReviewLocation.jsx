import { useParams } from 'react-router-dom'

import { useState } from 'react'

import Success from './Success';
import ReviewInterface from './ReviewInterface';
const ReviewLocation = () => {
    const { place } = useParams()
    const [rating, setRating] = useState(0)

    const [isReviewSuccessful, setIsReviewSuccessful] = useState(false)

    const [selectedTags, setSelectedTags] = useState([])
    const [reviewText, setReviewText] = useState('')
    const isBtnEnabled = reviewText !== '' && selectedTags.length > 0




    return (
        <div className=" bg-[#1D3045] dark:bg-[#1E1E1E]  p-4 pb-0 flex justify-center items-center overflow-hidden h-screen ">
            {isReviewSuccessful ? <Success /> :
                <ReviewInterface
                    setIsReviewSuccessful={setIsReviewSuccessful}
                    isBtnEnabled={isBtnEnabled}
                    rating={rating}
                    reviewText={reviewText}
                    setReviewText={setReviewText}
                    setRating={setRating}
                    place={place}
                    setSelectedTags={setSelectedTags}
                />}
        </div>
    )
}

export default ReviewLocation
