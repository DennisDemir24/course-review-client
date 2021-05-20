import React, { useEffect } from 'react'
import {createStore} from 'redux'
import { useSelector, useDispatch} from 'react-redux'
import { getCourseById } from '../../actions/courseActions'
import { loadState, saveState } from '../../utils/localStorage.js'
import CommentSection from './CommentSection.js'
import CommentBox from './CommentBox.js'
/* import CourseHeader from './CourseHeader.js' */
import ReactStars from 'react-rating-stars-component'
import OpenBook from '../../images/open-book.svg'
import FileSVG from '../../images/file.svg'
import LangSVG from '../../images/global.svg'


const Course = ({match}) => {
    //Component inspiration from https://tailwindcomponents.com/component/comments
    let course = useSelector((state) => state.course.courses)
    const dispatch = useDispatch()
   
    useEffect(() => {
        dispatch(getCourseById(match.params.id))
    }, [match, match.params.id])




    const InfoLabels = ({ labelInfo, SVGFile, isLink }) => {
        return (
        <>
            <span className="inline-flex text-white space-x-2 items-center">
            <img src={SVGFile} className="w-5 h-5"></img>
            {isLink ? <a href={labelInfo}>Kursplan</a> : <span>{labelInfo}</span>}
            </span>
        </>
        )
    }


    return (
    <>
        { course.course ? (
            <div className="body bg-gray-800">
        <>
            <div className="pb-12">
            <h3 className="font-bold tracking-wide text-5xl mb-2 text-white">
                {course.course.courseTitle}
            </h3>
            <span className="inline-flex text-white space-x-2 items-center">
                <ReactStars
                count={5}
                size={30}
                value={course.review.totalRating}
                activeColor="#ffd700"
                edit={false}
                isHalf={true}
                />
                ({course.review.courseReviews.length} reviews)
            </span>
            <div className="md:space-x-5 md:space-y-0 space-y-1 px-2 flex md:flex-row flex-col pb-4">
                <InfoLabels
                labelInfo={course.course.courseID}
                SVGFile={OpenBook}
                />
                <InfoLabels
                labelInfo={course.course.syllabus}
                SVGFile={FileSVG}
                isLink={true}
                />
                <InfoLabels
                labelInfo={course.course.teachingLanguage}
                SVGFile={LangSVG}
                />
            </div>
            <div>
                <span className="inline-flex text-white space-x-2 items-center">
                <span>{course.course.courseDescription}</span>
                <span>{course.course.prerequisites}</span>
                </span>
            </div>
            </div>
        </>
        <CommentBox />
        <CommentSection reviews={course.review} />
        </div>
        ) : null}
    </>
    )
}

export default Course
