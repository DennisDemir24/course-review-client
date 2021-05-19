import React from 'react'
import courseInfo from './info.json'
import CommentSection from './CommentSection.js'
import CommentBox from './CommentBox.js'
import CourseHeader from './CourseHeader.js'

const Course = (course) => {
    //Component inspiration from https://tailwindcomponents.com/component/comments
    return (
        <>
            <div className="body bg-gray-800">
                <CourseHeader courseInfo={Course}/>
                <CommentBox/>
                <CommentSection reviews={course.review}/>
            </div>
        </>
    )
}

export default Course