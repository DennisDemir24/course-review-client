import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { getCourseById } from '../../actions/courseActions'
import CommentSection from './CommentSection.js'
import CommentBox from './CommentBox.js'
import CourseHeader from './CourseHeader.js'

const Course = ({ match }) => {
  //Component inspiration from https://tailwindcomponents.com/component/comments
  const course = useSelector((state) => state.course)
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCourseById(match.params.id))
  }, [dispatch, match.params.id])
  
  return (
    <>
        { course.course ? (
            <div className="body bg-gray-800">
                <CourseHeader courseInfo={course.course}/>
                <CommentBox  auth={auth} course={course.course.course}/>
                <CommentSection reviews={course.course.review}/>
            </div>
        ) : null}
    </>
    )
}

export default Course
