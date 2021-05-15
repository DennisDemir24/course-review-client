import React from 'react'
import OpenBook from '../../images/open-book.svg'
import FileSVG from '../../images/file.svg'
import LangSVG from '../../images/global.svg'
import ReactStars from 'react-rating-stars-component'

const getTotalRating = (reviews) => {
    let score = 0
    reviews.courseReviews.forEach(review => score += review.rating)
    let total = score / reviews.courseReviews.length
    return total
}

const CourseHeader = ({courseInfo}) => {

    return (
        <>
            <div className="pb-12">
                <h3 className="font-bold tracking-wide text-5xl mb-2 text-white">
                    {courseInfo.course.courseTitle}
                </h3>
                
                <span className="inline-flex text-white space-x-2 items-center">
                    <ReactStars
                        count={5}
                        size={30}
                        value={getTotalRating(courseInfo.review)}
                        activeColor="#ffd700"
                        edit={false}/>
                    ({courseInfo.review.courseReviews.length} reviews)
                </span>
                <div className="md:space-x-5 md:space-y-0 space-y-1 px-2 flex md:flex-row flex-col pb-4">
                    <span className="inline-flex text-white space-x-2 items-center">
                        <img src={OpenBook} alt="open book" className="w-5 h-5"></img>
                        <span>{courseInfo.course.courseID}</span>
                    </span>
                    <span className="inline-flex text-white space-x-2 items-center">
                        <img src={FileSVG} alt="file" className="w-5 h-5"></img>
                        <span>
                        <a href={courseInfo.course.syllabus}>Kursplan</a>
                        </span>
                    </span>
                    <span className="inline-flex text-white space-x-2 items-center">
                        <img src={LangSVG} alt="language" className="w-5 h-5"></img>
                        <span>{courseInfo.course.teachingLanguage}</span>
                    </span>
                </div>
                <div>
                    <span className="inline-flex text-white space-x-2 items-center">
                        <span>{courseInfo.course.prerequisites}</span>
                    </span>
                </div>
            </div>
        </>
    )
}

export default CourseHeader
