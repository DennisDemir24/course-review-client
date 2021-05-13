import React, { useEffect } from 'react'
import SearchBar from '../ui/SearchBar'
import { connect } from 'react-redux'
import { searchCourses } from '../../actions/courseActions'

const Home = ({ course: {courses}}) => {

    useEffect(() => {

    }, [])

    return (
      <div className="bg-gray-900">
        <div className="text-white">NAVBAR</div>
        <SearchBar />
        {courses !== null && courses.map((course) => {
          return (
            <div key={course.courseID}>
              <h5 className="text-white">{course.courseID}</h5>
              <h5 className="text-white">{course.courseTitle}</h5>
            </div>
          )
        })}
      </div>
    )
}

const mapStateToProps = (state) => ({
  course: state.course,
})

export default connect(mapStateToProps, { })(Home)
