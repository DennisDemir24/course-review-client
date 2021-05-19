import React, { useEffect } from 'react'
import CommentSection from './CommentSection.js'
import CommentBox from './CommentBox.js'
import { useSelector, useDispatch } from 'react-redux'
import { getCourseById } from '../../actions/courseActions'
import OpenBook from '../../images/open-book.svg'
import FileSVG from '../../images/file.svg'
import LangSVG from '../../images/global.svg'
import ReactStars from 'react-rating-stars-component'

const InfoLabels = ({ labelInfo, SVGFile, isLink }) => {
  console.log(labelInfo)
  return (
    <>
      <span className="inline-flex text-white space-x-2 items-center">
        <img src={SVGFile} className="w-5 h-5"></img>
        {isLink ? <a href={labelInfo}>Kursplan</a> : <span>{labelInfo}</span>}
      </span>
    </>
  )
}

const CourseHeader = ({courseInfo}) => {
  const course = useSelector(state => state.course)

  console.log(course)

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
            value={courseInfo.review.totalRating}
            activeColor="#ffd700"
            edit={false}
            isHalf={true}
          />
          ({courseInfo.review.courseReviews.length} reviews)
        </span>
        <div className="md:space-x-5 md:space-y-0 space-y-1 px-2 flex md:flex-row flex-col pb-4">
          <InfoLabels
            labelInfo={courseInfo.course.courseID}
            SVGFile={OpenBook}
          />
          <InfoLabels
            labelInfo={courseInfo.course.syllabus}
            SVGFile={FileSVG}
            isLink={true}
          />
          <InfoLabels
            labelInfo={courseInfo.course.teachingLanguage}
            SVGFile={LangSVG}
          />
        </div>
        <div>
          <span className="inline-flex text-white space-x-2 items-center">
            <span>{courseInfo.course.courseDescription}</span>
            <span>{courseInfo.course.prerequisites}</span>
          </span>
        </div>
      </div>
    </>
  )
}


export default CourseHeader
