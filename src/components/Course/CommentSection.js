import React from 'react'
import Like from '../../images/like.svg'
import { scoreReview, setCurrent } from '../../actions/reviewActions'
import { connect } from 'react-redux'
import ReactStars from 'react-rating-stars-component'

const CommentUnique = ({scoreReview, review, auth}) => { 

    const handleCurrent = () => {
        console.log(review)
        setCurrent(review)
    }

    const handleClick = (e) => {
        //e.preventDefault()
        const reviewScore = {
            token: auth.token,
            reviewID: review._id

        }
        scoreReview(reviewScore)
    }
    return (
      <div
        key={review._id}
        className="bg-black rounded-lg p-3 justify-center items-center md:items-start shadow-lg mb-4"
      >
        <div className="flex flex-row-reverse">
            <div className="flex-shrink-o">
            { auth.isAuthenticated && review.studentID == auth.user ? (
                <button
                className="text-white"
                onClick={handleCurrent}
                >
                Edit
                </button>
            ) : null}
            </div>
            <div className="flex-1 ">
                <h3 className="text-yellow-600 font-semibold text-lg md:text-left">
                    {review.studentID}
                </h3>
            </div>
        </div>
        
        <div className="w-1/2">
          <ReactStars
            count={5}
            size={24}
            value={review.rating}
            activeColor="#ffd700"
            edit={false}
          />
        </div>
        <p className="text-gray-600 text-lg text-center md:text-left ">
          {review.message}
        </p>
        <div className="mr-2 w-full">
          <a
            href=""
            onClick={handleClick}
            className="text-gray-600 font-semibold text-lg md:text-left"
          >
            {review.score.length}{' '}
            <img src={Like} alt="Thumbs up" className={review.score.includes(auth.user) ? "w-5 h-5 inline-block bg-blue-500 rounded p-0.5" : "w-5 h-5 inline-block"} />
          </a>
        </div>
      </div>
    )
}

const CommentSection = ({scoreReview, reviews, auth}) => {
    return (
        <>
            <div className="reviews w-1/2 m-auto pb-4">
                {reviews.courseReviews.map(review => <CommentUnique scoreReview={scoreReview} review={review} auth={auth} key={review._id}/>)}
            </div>
        </>
    )
}

export default connect(null, { scoreReview, setCurrent })(CommentSection)