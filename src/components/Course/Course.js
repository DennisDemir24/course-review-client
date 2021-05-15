import React from 'react'
import courseInfo from './info.json'
import CommentSection from './CommentSection.js'
import CommentBox from './CommentBox.js'
import CourseHeader from './CourseHeader.js'

const Course = (course) => {
    //Component inspiration from https://tailwindcomponents.com/component/comments
    return (
        <>
            <div className="body width-10 bg-jet-black">
                <CourseHeader courseInfo={courseInfo}/>
                <CommentBox/>
                <CommentSection reviews={courseInfo.review}/>
            </div>
        </>
    )
}

export default Course