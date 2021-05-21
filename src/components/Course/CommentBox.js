import React, { useState } from 'react'
import { postReview } from '../../actions/reviewActions'
import { connect } from 'react-redux'
import ReactStars from 'react-rating-stars-component'



const CommentBox = ({ postReview, auth, course}) => {
    const [openBox, openBoxState] = useState(false)
    const [text, setText] = useState("")
    const [rating, setRating] = useState(0)
    const [anon, setAnon] = useState(false)

    const toggleOpenBox = () => openBoxState(!openBox)

    const handleChange = (e) => setText(e.target.value)

    const handleRatingChange = (e) =>  setRating(e) 

    const handleAnonChange = (e) => {
        console.log(e.target);
        setAnon(e)}

    const handleSubmit = (e) => {
        //e.preventDefault()

        if (text !== "") {
            const newReview = {
                token: auth.token,
                courseID: course.courseID,
                message:text,
                rating:rating,
                anonymous: anon,
                studentID: auth.user
            }
            postReview(newReview)
            setRating(0)
            setAnon(false)
            setText("")
        }
    }

    return (
        <> { auth.isAuthenticated ? 
            <div className="reviewBox w-1/2 m-auto pb-4">
                <button onClick={toggleOpenBox} className={openBox ? "h-0 invisible" : "font-bold py-2 px-4 w-full bg-yellow-500 text-lg text-white shadow-md rounded-lg "}>Write review </button>
                <form onSubmit={handleSubmit} className={openBox ? "" : "h-0 invisible"}>
                    <ReactStars count={5} size={30} value={0} activeColor="#ffd700" edit={true} name="rating" onChange={handleRatingChange}/>
                    <input type="checkbox" name="anon" onChange={handleAnonChange}></input>
                    <textarea className="w-full shadow-inner p-4 border-0 rounded-lg focus:shadow-outline text-1xl" placeholder="Write a review here" cols="3" rows="3" value={text} onChange={handleChange} name="text" spellCheck="false"></textarea>
                    <button typeof="submit" className="font-bold py-2 px-4 w-full bg-yellow-500 text-lg text-white shadow-md rounded-lg ">Submit review </button>
                </form>
            </div> : 
            <div className="reviewBox w-1/2 m-auto pb-4">
                <button disabled="true" className="font-bold py-2 px-4 w-full bg-gray-400 text-lg text-white shadow-md rounded-lg ">Write review </button> 
            </div>}
        </>
    )
}

export default connect(null, { postReview })(CommentBox)