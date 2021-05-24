import React, { useState, useEffect } from 'react'
import { postReview, editReview } from '../../actions/reviewActions'
import { connect } from 'react-redux'
import ReactStars from 'react-rating-stars-component'



const CommentBox = ({ postReview, auth, course, current}) => {
    const [openBox, openBoxState] = useState(false)
    const [text, setText] = useState("")
    const [rating, setRating] = useState(0)
    const [anon, setAnon] = useState(false)

    useEffect(() => {
        if (current !== null) {
            setText(current)
        } else {
            setText("")
        }
    }, [current])

    const toggleOpenBox = () => openBoxState(!openBox)

    const handleChange = (e) => setText(e.target.value)

    const handleRatingChange = (e) =>  setRating(e) 

    const handleAnonChange = (e) => setAnon(e.target.checked)

    const handleSubmit = (e) => {
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
              postReview(newReview)

              setRating(0)
              setAnon(false)
              setText('')
            }
        } else {
            handleEditReview()
        }
    }
    const handleEditReview = () => {

        if (text !== "") {
            const newReview = {
                token: auth.token,
                courseID: course.courseID,
                message:text,
                rating:rating,
                anonymous: anon,
                studentID: auth.user

            }
            editReview(newReview)
            setRating(0)
            setAnon(false)
            setText("")
        }
    }

    return (
        <> { auth.isAuthenticated ? 
            <div className="reviewBox w-1/2 m-auto pb-4">
                <button onClick={toggleOpenBox} className={openBox ? "h-0 invisible" : "font-bold py-2 px-4 w-full bg-yellow-500 text-lg text-white shadow-md rounded-lg "}>Skriv review </button>
                <form onSubmit={handleSubmit} className={openBox ? "" : "h-0 invisible"}>
                    <div className="flex flex-row-reverse">
                        <div className="flex-shrink-o">
                            <input type="checkbox" name="anon" onChange={handleAnonChange}></input>
                        </div>
                        <div className="flex-shrink-o">
                            <p className="font-bold text-white">Anonym</p>
                        </div>
                        <div className="flex-1 ">
                            <ReactStars count={5} size={30} value={0} activeColor="#ffd700" edit={true} name="rating" onChange={handleRatingChange}/>
                        </div>
                    </div>
                    <textarea className="w-full shadow-inner p-4 border-0 rounded-lg focus:shadow-outline text-1xl" placeholder="Skriv en review här" cols="3" rows="3" value={text} onChange={handleChange} name="text" spellCheck="false"></textarea>
                    <input value={current ? 'Uppdatera review' : 'Skicka review'} type="submit" className="font-bold py-2 px-4 w-full bg-yellow-500 text-lg text-white shadow-md rounded-lg " />
                </form>
            </div> : 
            <div className="reviewBox w-1/2 m-auto pb-4">
                <button disabled="true" className="font-bold py-2 px-4 w-full bg-gray-400 text-lg text-white shadow-md rounded-lg ">Skriv review </button> 
            </div>}
        </>
    )
}

const mapStateToProps = (state) => ({
  current: state.review.current,
})

export default connect(mapStateToProps, { postReview, editReview })(CommentBox)