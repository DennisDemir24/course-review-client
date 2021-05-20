import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../ui/SearchBar'
import Card from '../ui/Card'
import { connect } from 'react-redux'


const Home = ({ course: {courses}}) => {

    return (
      <div className="bg-jet-black-main min-h-screen-85 relative">
        <SearchBar />
        <div className="grid grid-cols-4 grid-rows-4 gap-2 pl-4 pr-4 pt-32">
          {courses !== null &&
            courses.map((course) => {
              return (
                <Card className="text-center px-2 pt-2 pb-2 transition duration-500 ease-in-out hover:bg-yellow-400 transform hover:-translate-y-1 hover:scale-100">
                  <Link to={`/course/${course.courseID}`}>
                    <div key={course.courseID}>
                      <h1 className="text-jet-black font-bold text-base">
                        {course.courseID}
                      </h1>
                      <h5 className="text-jext-black">{course.courseTitle}</h5>
                    </div>
                  </Link>
                </Card>
              )
            })}
        </div>
      </div>
    )
}

const mapStateToProps = (state) => ({
  course: state.course,
})

export default connect(mapStateToProps, { })(Home)
