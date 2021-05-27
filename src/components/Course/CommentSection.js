/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { scoreReview, setCurrent } from '../../actions/reviewActions'
import { getCourseById } from '../../actions/courseActions'
import EditReviewModal from './EditReviewModal'

import { connect } from 'react-redux'
import ReactStars from 'react-rating-stars-component'
import { ReactComponent as LikeBtn } from '../../images/like.svg'

const CommentUnique = ({ scoreReview, getCourseById, review, auth }) => {
  const [toggleModal, setToggleModal] = useState(false)

  const handleCurrent = () => {
    setToggleModal(true)
    setCurrent(review.message)
  }

  const handleClick = async (e) => {
    e.preventDefault()
    const reviewScore = {
      token: auth.token,
      reviewID: review._id

    }
    await scoreReview(reviewScore)
    getCourseById(review.courseID, auth.token)

  }
  const closeModalHandler = () => setToggleModal(false)
  return (
    <>
    {toggleModal ? <EditReviewModal review={review} auth={auth} closeModal={closeModalHandler} /> : null}
    <div
      key={review._id}
      className="bg-jet-black-400 w-full rounded-lg p-3 justify-center md:justify-start items-center md:items-start shadow-lg mb-4"
    >
      <div className="flex flex-row-reverse">
        <div className="flex-shrink-o">
          {auth.isAuthenticated && review.studentID === auth.user ? (
            <button
              className="text-white"
              onClick={handleCurrent}
            >
              Edit
            </button>
          ) : null}
        </div>
        <div className="flex-1 ">
          <h3 className="text-yellow-600 font-semibold text-lg">
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
      <p className="text-white text-lg text-left ">
        {review.message}
      </p>
      <div className="mr-2 w-full">
        {review.studentID == auth.user || !auth.isAuthenticated ? <span className="text-gray-600 text-lg font-semibold">
          {review.score.length + ' '}<LikeBtn className={review.score.includes(auth.user) ? "w-5 h-5 inline-block text-yellow-400 fill-current" : "w-5 h-5 inline-block text-white fill-current"}/>
        </span> :
        <a
          href="#"
          onClick={handleClick}
          className="text-white font-semibold text-lg md:text-left"
        >
          {review.score.length + ' '}
          <LikeBtn className={review.score.includes(auth.user) ? "w-5 h-5 inline-block text-yellow-400 fill-current" : "w-5 h-5 inline-block text-white fill-current"}/>
        </a>}

      </div>
    </div>
    </>
  )
}

const CommentSection = ({ scoreReview, reviews, getCourseById, auth }) => {
  return (
    <>
      <div className="reviews w-4/5 lg:w-1/2 m-auto pb-4 font-general">
        {reviews.courseReviews.map(review => <CommentUnique scoreReview={scoreReview} review={review} getCourseById={getCourseById} auth={auth} key={review._id} />)}
      </div>
    </>
  )
}

export default connect(null, { scoreReview, setCurrent, getCourseById })(CommentSection)
