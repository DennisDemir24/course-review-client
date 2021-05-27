import React, { useState, useEffect } from 'react'
import { editReview } from '../../actions/reviewActions'
import { getCourseById } from '../../actions/courseActions'
import { connect } from 'react-redux'

const EditReviewModal = ({
  current,
  editReview,
  closeModal,
  auth,
  review,
}) => {
    
  const [text, setText] = useState('')
  const [rating, setRating] = useState(0)
  const [anon, setAnon] = useState(false)

  useEffect(() => {
    if (current !== null) {
      setText(current.message)
    }
  }, [current])

  const handleSubmit = async (e) => {
      e.preventDefault()
    const newReview = {
      token: auth.token,
      reviewID: review._id,
      message: text,
      studentID: auth.user,
      rating: review.rating,
      anon: review.anon
    }
    await editReview(newReview)
    // getCourseById(review.courseID, auth.token)
    /* setRating(0)
    setAnon(false)
    setText('') */
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Updatera Review</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={closeModal}
              >
                X
              </button>
            </div>
            {/*body*/}
            <div className="reviewBox w-80vw lg:w-1/2 m-auto pb-4 font-general">
              <form
                onSubmit={handleSubmit}
                className={'h-0'}
              >
                <textarea
                  className="w-full shadow-inner p-4 border-0 rounded-lg focus:shadow-outline text-1xl"
                  placeholder="Skriv en review här"
                  cols="3"
                  rows="3"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  name="text"
                  spellCheck="false"
                ></textarea>
                <input
                  value={'Uppdatera review'}
                  type="submit"
                  className="py-2 px-4 w-full bg-yellow-400 text-lg text-black shadow-md rounded-lg hover:bg-yellow-300"

                />
              </form>
            </div>
            {/*footer*/}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

const mapStateToProps = (state) => ({
  current: state.review.current,
})

export default connect(mapStateToProps, { editReview, getCourseById })(EditReviewModal)

