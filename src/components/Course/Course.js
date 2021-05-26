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
    dispatch(getCourseById(match.params.id, auth.token))
  }, [dispatch, match.params.id, auth.token])

  return (
    <>
        { course.course ? (
            <div className="body bg-jet-black-300 min-h-screen-85">
                <CourseHeader courseInfo={course.course}/>
                <CommentBox  auth={auth} course={course.course.course}/>
                <CommentSection reviews={course.course.review} auth={auth} />
            </div>
        ) : null}
    </>
    )
}

export default Course
