import React from 'react'
import courseInfo from './info.json'

const Course = (course) => {
    return (
        <>
            <h1>{courseInfo.course.courseTitle}</h1>
            <h2>{courseInfo.course.courseID}</h2>
        </>
    )
}

export default Course