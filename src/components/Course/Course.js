import React from 'react'
import courseInfo from './info.json'

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
        <div className="body">
                <div class="m-3">
                    <button class="bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                        <span class="mr-2">English</span>
                    </button>
                </div>
            <div className="courseInfo">
                <h1 className="text-2xl font-medium text-primary mt-4 mb-6 ">{courseInfo.course.courseTitle}</h1>
                <h2 className="text-2xl font-medium text-primary mt-4 mb-6 ">{courseInfo.course.courseID}</h2>
                <h1 className="text-2xl font-medium text-primary mt-4 mb-6 ">{getTotalRating(courseInfo.review)}/5</h1>
                <p className="mb-6">{courseInfo.course.prerequisites}</p>
            </div>
            <div className="reviewBox">

            </div>
            <div className="reviews">
                {courseInfo.review.courseReviews.map(review => {
                    return (
                            <div className="bg-white rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
                                <div className="flex flex-row justify-center mr-2">
                                    <h3 className="text-purple-600 font-semibold text-lg text-center md:text-left ">{review.studentID}</h3>
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