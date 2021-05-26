import React from 'react'
import { useSelector } from 'react-redux'
import OpenBook from '../../images/open-book.svg'
import FileSVG from '../../images/file.svg'
import LangSVG from '../../images/global.svg'
import ReactStars from 'react-rating-stars-component'

const InfoLabels = ({ labelInfo, SVGFile, isLink }) => {
  return (
    <>
      <span className="inline-flex text-white space-x-2 items-center">
        <img src={SVGFile} className="w-5 h-5"></img>
        {isLink ? <a href={labelInfo} className="underline">Kursplan</a> : <span>{labelInfo}</span>}
      </span>
    </>
  )
}

const CourseHeader = ({courseInfo}) => {
  const course = useSelector(state => state.course)

  return (
    <>
      <div className="p-4 pb-0 font-general">
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
        <div className="space-x-5 space-y-0 space-y-1 px-2 flex-row flex-col pb-4">
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
        <div className="text-white float-left max-h-course-info overflow-y-scroll w-80 hidden xl:block p-6 rounded bg-jet-black-400">
          <h2 className="font-bold text-xl">Kursplan</h2>
          <p className="border-yellow-400"><span dangerouslySetInnerHTML={{__html: courseInfo.course.courseDescription }}></span></p>
          <h2 className="font-bold text-xl mt-2">Krav</h2>
          <p className="border-yellow-400">{courseInfo.course.prerequisites}</p>
        </div>
      </div>
    </>
  )
}


export default CourseHeader
