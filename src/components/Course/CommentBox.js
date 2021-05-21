import React, {useState} from 'react'
import { postReview } from '../../actions/reviewActions'
import { connect } from 'react-redux'



const CommentBox = ({ postReview }) => {
    const [openBox, openBoxState] = useState(false)
    const [text, setText] = useState("")

    const toggleOpenBox = () => openBoxState(!openBox)

    const handleChage = (e) => setText(e.target.value)

    const handleSubmit = (e) => {
        // e.preventDefault()

        if (text !== "" ) {
            const newReview = {
                text
            }
            postReview(newReview)

            setText("")
        }
    }

    return (
        <>
            <div className="reviewBox w-1/2 m-auto pb-4">
                <button onClick={toggleOpenBox} className={openBox ? "h-0 invisible" : "font-bold py-2 px-4 w-full bg-yellow-500 text-lg text-white shadow-md rounded-lg "}>Write review </button>
                <form onSubmit={handleSubmit} className={openBox ? "" : "h-0 invisible"}>
                    <textarea className="w-full shadow-inner p-4 border-0 rounded-lg focus:shadow-outline text-1xl" placeholder="Write a review here" cols="3" rows="3" value={text} onChange={handleChage} name="text" spellCheck="false"></textarea>
                    <button typeof="submit" className="font-bold py-2 px-4 w-full bg-yellow-500 text-lg text-white shadow-md rounded-lg ">Submit review </button>
                </form>
            </div>
        </>
    )
}

export default connect(null, { postReview })(CommentBox)