import React from 'react'
import courseInfo from './info.json'
import ReactStars from 'react-rating-stars-component'

const getTotalRating = (reviews) => {
    let score = 0
    reviews.courseReviews.map(review => {
        score += review.rating
    })
    let total = score / reviews.courseReviews.length
    return total
}

const Course = (course) => {


    //Component inspiration from https://tailwindcomponents.com/component/comments
    return (
        <>
        <div className="body width-10 bg-jet-black">
        <div>
            <h3 className="font-bold tracking-wide text-5xl mb-2 text-white">
            {courseInfo.course.courseTitle}
            </h3>
            <div className="md:space-x-5 md:space-y-0 space-y-1 px-2 flex md:flex-row flex-col">
                <span className="inline-flex text-white space-x-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-5 h-5" viewBox="0 0 24 24"><path d="M12.23 15.5c-6.801 0-10.367-1.221-12.23-2.597v9.097h24v-8.949c-3.218 2.221-9.422 2.449-11.77 2.449zm1.77 2.532c0 1.087-.896 1.968-2 1.968s-2-.881-2-1.968v-1.032h4v1.032zm-14-8.541v-2.491h24v2.605c0 5.289-24 5.133-24-.114zm9-7.491c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6z"/></svg>
                    <span>{courseInfo.course.courseID}</span>
                </span>
                <span className="inline-flex text-white space-x-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-5 h-5" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
                    <span><ReactStars
                            count={5}
                            size={24}
                            value={getTotalRating(courseInfo.review)}
                            activeColor="#ffd700"
                            edit={false}/> ({courseInfo.review.courseReviews.length} reviews)</span>
                </span>
                <span className="inline-flex text-white space-x-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-5 h-5" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.947v1.053h-1v-.998c-1.035-.018-2.106-.265-3-.727l.455-1.644c.956.371 2.229.765 3.225.54 1.149-.26 1.384-1.442.114-2.011-.931-.434-3.778-.805-3.778-3.243 0-1.363 1.039-2.583 2.984-2.85v-1.067h1v1.018c.724.019 1.536.145 2.442.42l-.362 1.647c-.768-.27-1.617-.515-2.443-.465-1.489.087-1.62 1.376-.581 1.916 1.712.805 3.944 1.402 3.944 3.547.002 1.718-1.343 2.632-3 2.864z"/></svg>
                    <span>{courseInfo.course.teachingLanguage}</span>
                </span>
                <span className="inline-flex text-white space-x-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-5 h-5" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.947v1.053h-1v-.998c-1.035-.018-2.106-.265-3-.727l.455-1.644c.956.371 2.229.765 3.225.54 1.149-.26 1.384-1.442.114-2.011-.931-.434-3.778-.805-3.778-3.243 0-1.363 1.039-2.583 2.984-2.85v-1.067h1v1.018c.724.019 1.536.145 2.442.42l-.362 1.647c-.768-.27-1.617-.515-2.443-.465-1.489.087-1.62 1.376-.581 1.916 1.712.805 3.944 1.402 3.944 3.547.002 1.718-1.343 2.632-3 2.864z"/></svg>
                    <span>
                        <a href={courseInfo.course.syllabus}>Kursplan</a>
                        </span>
                </span>
                <span className="inline-flex text-white space-x-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-5 h-5" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.947v1.053h-1v-.998c-1.035-.018-2.106-.265-3-.727l.455-1.644c.956.371 2.229.765 3.225.54 1.149-.26 1.384-1.442.114-2.011-.931-.434-3.778-.805-3.778-3.243 0-1.363 1.039-2.583 2.984-2.85v-1.067h1v1.018c.724.019 1.536.145 2.442.42l-.362 1.647c-.768-.27-1.617-.515-2.443-.465-1.489.087-1.62 1.376-.581 1.916 1.712.805 3.944 1.402 3.944 3.547.002 1.718-1.343 2.632-3 2.864z"/></svg>
                    <span>{courseInfo.course.prerequisites}</span>
                </span>
            </div>
            </div>
            <div className="reviewBox w-1/2 m-auto">
                    <textarea className="w-full shadow-inner p-4 border-0 mb-4 rounded-lg focus:shadow-outline text-1xl" placeholder="Write a review here" cols="3" rows="3" id="comment_content" spellCheck="false"></textarea>
                    <button className="font-bold py-2 px-4 w-full bg-yellow-500 text-lg text-white shadow-md rounded-lg ">Comment </button>
            </div>
            <div className="reviews w-1/2 m-auto">
                {courseInfo.review.courseReviews.map(review => {
                    return (
                            <div key={review._id} className="bg-white rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
                                <div className="flex flex-row justify-center mr-2">
                                    <h3 className="text-yellow-600 font-semibold text-lg text-center md:text-left ">{review.studentID}</h3>
                                </div>


                                <p className="text-gray-600 text-lg text-center md:text-left ">{review.message}</p>

                            {(review.score.length ? <p>{review.score.length} Found this review helpful!</p> : null)} 
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default Course