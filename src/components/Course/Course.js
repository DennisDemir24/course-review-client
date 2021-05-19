import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCourseById } from '../../actions/courseActions'
import courseInfo from './info.json'
import CommentSection from './CommentSection.js'
import CommentBox from './CommentBox.js'
import CourseHeader from './CourseHeader.js'

const Course = ({ match }) => {
  //Component inspiration from https://tailwindcomponents.com/component/comments
  const course = useSelector((state) => state.course)
  const dispatch = useDispatch()
  console.log(course.courses.course)

  useEffect(() => {
    dispatch(getCourseById(match.params.id))
  }, [dispatch, match.params.id])



  return (
    <>
      { course.courses.course ? (
          <div className="body bg-gray-800">
        <>
          <div className="pb-12">
            <h3 className="font-bold tracking-wide text-5xl mb-2 text-white">
              {course.courses.course.courseTitle}
            </h3>
            {/* <span className="inline-flex text-white space-x-2 items-center">
              <ReactStars
                count={5}
                size={30}
                value={courseInfo.review.totalRating}
                activeColor="#ffd700"
                edit={false}
                isHalf={true}
              />
              ({courseInfo.review.courseReviews.length} reviews)
            </span> */}
            {/* <div className="md:space-x-5 md:space-y-0 space-y-1 px-2 flex md:flex-row flex-col pb-4">
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
            </div> */}
            <div>
              <span className="inline-flex text-white space-x-2 items-center">
                <span>{course.courses.course.courseDescription}</span>
                <span>{course.courses.course.prerequisites}</span>
              </span>
            </div>
          </div>
        </>
        {/* <CommentBox />
        <CommentSection reviews={course.courses.review} /> */}
      </div>
      ) : null}
    </>
  )
}

export default Course
