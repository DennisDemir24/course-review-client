import React from 'react'

const HandleSubmit = event => {
    console.log(event.message);
    alert('tes')
}

const CommentBox = () => {
    return (
        <>
            <div className="reviewBox w-1/2 m-auto pb-4">
                <form onSubmit={HandleSubmit}>
                    <textarea className="w-full shadow-inner p-4 border-0 rounded-lg focus:shadow-outline text-1xl" placeholder="Write a review here" cols="3" rows="3" name="message" spellCheck="false"></textarea>
                    <button typeof="submit" className="font-bold py-2 px-4 w-full bg-yellow-500 text-lg text-white shadow-md rounded-lg ">Comment </button>
                </form>
            </div>
        </>
    )
}

export default CommentBox