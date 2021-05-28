import React, {useState, useEffect} from 'react'
import {editReview} from '../../actions/reviewActions'
import {getCourseById} from '../../actions/courseActions'
import {connect} from 'react-redux'
import ReactStars from "react-rating-stars-component";

const EditReviewModal = ({
                             current,
                             editReview,
                             closeModal,
                             auth,
                             review, getCourseById
                         }) => {

    const [text, setText] = useState(review.message)

    // if the anonymous flag was not set in the database give it false now.
    if (review.anonymous === undefined) {
        review.anonymous = false
    }
    const [rating, setRating] = useState(review.rating)
    const [anon, setAnon] = useState(review.anonymous)

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
            rating: rating,
            anonymous: anon
        }
        await editReview(newReview)
        getCourseById(review.courseID, auth.token)
        closeModal()
        //
        /* setRating(0)
        setAnon(false)
        setText('') */
    }

    /**
     * Updates anon flag
     * @param e
     */
    const handleChange = (e) => {
        setAnon(e.target.checked)
    }
    /**
     * Updates rating.
     * @param e
     */
    const handleRatingChange = (e) => {
        setRating(e)
    }
    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div
                        className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div
                            className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
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
                                <div>
                                    <input type="checkbox" id="anonym" defaultChecked={review.anonymous}
                                           onChange={handleChange}/>
                                    <label for="anonym">Anonym</label>
                                    <ReactStars
                                        count={5}
                                        size={30}
                                        value={review.rating}
                                        activeColor="#ffd700"
                                        edit={true}
                                        name="rating"
                                        onChange={handleRatingChange}
                                    />

                                </div>

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

export default connect(mapStateToProps, {editReview, getCourseById})(EditReviewModal)

