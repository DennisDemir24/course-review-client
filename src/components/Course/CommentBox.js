import React, { useState, useEffect } from 'react'
import { postReview, editReview } from '../../actions/reviewActions'
import { getCourseById } from '../../actions/courseActions'
import { connect } from 'react-redux'
import ReactStars from 'react-rating-stars-component'



const CommentBox = ({ postReview, getCourseById, auth, course, current }) => {
  const [openBox, openBoxState] = useState(false)
  const [text, setText] = useState("")
  const [rating, setRating] = useState(0)
  const [anon, setAnon] = useState(false)

  useEffect(() => {
    if (current !== null) {
      setText(current.message)
    } else {
      setText("")
    }
  }, [current])

  const toggleOpenBox = () => openBoxState(!openBox)

  const handleChange = (e) => setText(e.target.value)

  const handleRatingChange = (e) => setRating(e)

  const handleAnonChange = (e) => setAnon(e.target.checked)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (current === null) {
      if (text !== '') {
        const newReview = {
          token: auth.token,
          courseID: course.courseID,
          message: text,
          rating: rating,
          anonymous: anon,
          studentID: auth.user,
        }
        await postReview(newReview)
        getCourseById(course.courseID, auth.token)

      }
    } else {
      const newReview = {
        token: auth.token,
        courseID: course.courseID,
        message: text,
        rating: rating,
        anonymous: anon,
        studentID: auth.user,
      }
      editReview(newReview)
    }

    setRating(0)
    setAnon(false)
    setText('')
  }

  return (
    <>
      {' '}
      {auth.isAuthenticated ? (
        <div className="reviewBox w-80vw lg:w-1/2 m-auto pb-4 font-general">
          <button
            onClick={toggleOpenBox}
            className={
              openBox
                ? 'h-0 invisible'
                : 'py-2 px-4 w-full bg-yellow-400 text-lg text-black shadow-md rounded-lg hover:bg-yellow-300'
            }
          >
            Skriv review
          </button>
          <form
            onSubmit={handleSubmit}
            className={openBox ? '' : 'h-0 invisible'}
          >
            <div className="flex flex-row-reverse items-center">
              <div className="flex-shrink-o">
                <input
                  type="checkbox"
                  name="anon"
                  onChange={handleAnonChange}
                ></input>
              </div>
              <div className="flex-shrink-o pr-2">
                <p className="font-bold text-white">Anonym:</p>
              </div>
              <div className="flex-1 ">
                <ReactStars
                  count={5}
                  size={30}
                  value={0}
                  activeColor="#ffd700"
                  edit={true}
                  name="rating"
                  onChange={handleRatingChange}
                />
              </div>
            </div>
            <textarea
              className="w-full shadow-inner p-4 border-0 rounded-lg focus:shadow-outline text-1xl"
              placeholder="Skriv en review här"
              cols="3"
              rows="3"
              value={text}
              onChange={handleChange}
              name="text"
              spellCheck="false"
            ></textarea>
            <input
              value={current ? 'Uppdatera review' : 'Skicka review'}
              type="submit"
              className="py-2 px-4 w-full bg-yellow-400 text-lg text-black shadow-md rounded-lg hover:bg-yellow-300"
            />
          </form>
        </div>
      ) : (
        <div className="reviewBox w-1/2 m-auto pb-4">
          <button
            disabled="true"
            className="font-bold py-2 px-4 w-full bg-gray-400 text-lg text-white shadow-md rounded-lg hover:bg-yellow-300"
          >
            Skriv review
          </button>
        </div>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  current: state.review.current,
})

export default connect(mapStateToProps, { postReview, editReview, getCourseById })(CommentBox)
