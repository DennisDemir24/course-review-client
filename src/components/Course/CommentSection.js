import React from 'react'

const CommentUnique = ({review}) => {  
    return (
        <div key={review._id} className="bg-white rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
            <div className="flex flex-row justify-center mr-2">
                <h3 className="text-yellow-600 font-semibold text-lg text-center md:text-left ">{review.studentID}</h3>
            </div>
            <p className="text-gray-600 text-lg text-center md:text-left ">{review.message}</p>
            {(review.score.length ? <p>{review.score.length} Found this review helpful!</p> : null)} 
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