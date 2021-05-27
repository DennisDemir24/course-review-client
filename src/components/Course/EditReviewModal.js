import React, { useState, useEffect } from 'react'
import { postReview, editReview } from '../../actions/reviewActions'

import { connect } from 'react-redux'

const Backdrop = props => {
    return <div className="" onClick={props.closeModal} />
}

const EditReviewModal = () => {
  return <div></div>
}

const mapStateToProps = (state) => ({
  current: state.review.current,
})

export default EditReviewModal

/* 
const newReview = {
  token: auth.token,
  courseID: course.courseID,
  message: text,
  rating: rating,
  anonymous: anon,
  studentID: auth.user,
}
editReview(newReview) 
 setRating(0)
    setAnon(false)
    setText('')
*/