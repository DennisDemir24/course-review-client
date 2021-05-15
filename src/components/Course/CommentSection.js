import React from 'react'
import Like from '../../images/like.svg'
import ReactStars from 'react-rating-stars-component'

const CommentUnique = ({review}) => {  
    return (
        <div key={review._id} className="bg-black rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
            <div className="flex flex-row mr-2 w-full" >
                <h3 className="text-yellow-600 font-semibold text-lg md:text-left">{review.studentID}</h3>
                <ReactStars
                    count={5}
                    size={24}
                    value={review.rating}
                    activeColor="#ffd700"
                    edit={false}
                    classNames="float-right"
                    />
            </div>
            <p className="text-gray-600 text-lg text-center md:text-left ">{review.message}</p>
            <div className="flex flex-row mr-2 w-full">
                {(review.score.length ? <p className="text-gray-600 font-semibold text-lg md:text-left">{review.score.length} <img src={Like} alt="Thumbs up" className="w-5 h-5 inline-block"/></p> : null)} 
            </div>
        </div>
    )
}

const CommentSection = ({reviews}) => {
    return (
        <>
            <div className="reviews w-1/2 m-auto">
                {reviews.courseReviews.map(review => <CommentUnique review={review} key={review._id}/>)}
            </div>
        </>
    )
}

export default CommentSection