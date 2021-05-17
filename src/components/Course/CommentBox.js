import React from 'react'

const CommentBox = () => {

    return (
        <>
            <div className="reviewBox w-1/2 m-auto pb-4">
                <textarea className="w-full shadow-inner p-4 border-0 rounded-lg focus:shadow-outline text-1xl" placeholder="Write a review here" cols="3" rows="3" id="comment_content" spellCheck="false"></textarea>
                <button className="font-bold py-2 px-4 w-full bg-yellow-500 text-lg text-white shadow-md rounded-lg ">Comment </button>
            </div>
        </>
    )
}

export default CommentBox