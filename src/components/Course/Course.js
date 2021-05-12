import React from 'react'
import courseInfo from './info.json'

const Course = (course) => {
    return (
        <>
        <div className="body">
            <div className="courseInfo">
                <h1 className="text-2xl font-medium text-primary mt-4 mb-12 ">{courseInfo.course.courseTitle}</h1>
                <h2 className="text-2xl font-medium text-primary mt-4 mb-12 ">{courseInfo.course.courseID}</h2>
            </div>
            <div className="reviewBox">

            </div>
            <div className="reviews">
                {courseInfo.review.courseReviews.map(review => {
                    return (
                        <div>
                            <h1>{review.rating}</h1>
                            <p className="description">
                                {review.message}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default Course