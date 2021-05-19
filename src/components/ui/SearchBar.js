import React, { useState } from 'react'
import { connect } from 'react-redux'
import { searchCourses } from '../../actions/courseActions'

const SearchBar = ({searchCourses}) => {
    const [search, setSearch] = useState("")

    const onCourseSearch = (e) => {
        setSearch(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        searchCourses(search)
    }

  return (
    <div className="p-8">
      <div className="bg-white flex items-center rounded-full shadow-xl">
        <input
          className="rounded-l-full w-full py-4 px-6 text-xl text-gray-700 leading-tight focus:outline-none"
          id="search"
          value={search}
          onChange={onCourseSearch}
          type="text"
          placeholder="Sök..."
        />

        <div className="p-4">
          <button onClick={onSubmit} className="bg-yellow-400 text-white rounded-full p-2 hover:bg-yellow-300 focus:outline-none w-12 h-12 flex items-center justify-center">
            <i className="fas fa-search text-black"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default connect(null, { searchCourses })(SearchBar)
