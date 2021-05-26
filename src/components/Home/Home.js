import React, { useEffect } from 'react'
import {v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'
import SearchBar from '../ui/SearchBar'
import Card from '../ui/Card'
import { connect } from 'react-redux'

const CourseCard = ({course}) => (
  <Card className="text-center bg-jet-black-300 text-yellow-400 px-2 pt-2 pb-2 transition duration-500 ease-in-out hover:bg-yellow-400 transform hover:-translate-y-1 hover:scale-100 hover:text-black">
    <Link to={`/course/${course.courseID}`}>
      <div key={course.courseID}>
        <h1 className="text-jet-black-500 font-bold text-base">
          {course.courseID}
        </h1>
        <h5 className="text-white">{course.courseTitle}</h5>
      </div>
    </Link>
  </Card>
)

const Home = ({ course: {courses}}) => {
    return (
      <div className="bg-jet-black-400 min-h-screen-85 relative pb-4">
        <SearchBar searchPerformed={courses && courses.length > 0}/>
        <div className="grid grid-cols-4 grid-rows-4 gap-2 pl-4 pr-4 pt-32">
          {courses !== null &&
            courses.map((course) => {
              return <CourseCard course={course} key={uuidv4()}/>
            })}
        </div>
      </div>
    )
}

const mapStateToProps = (state) => ({
  course: state.course,
})

export default connect(mapStateToProps, { })(Home)
