import React from 'react'
import courseInfo from './info.json'
import ReactStars from 'react-rating-stars-component'
import OpenBook from '../../images/open-book.svg'
import FileSVG from '../../images/file.svg'
import LangSVG from '../../images/global.svg'

const getTotalRating = (reviews) => {
    let score = 0
    reviews.courseReviews.forEach(review => score += review.rating)
    let total = score / reviews.courseReviews.length
    return total
}

const Course = (course) => {


    //Component inspiration from https://tailwindcomponents.com/component/comments
    return (
        <>
        <div className="body width-10 bg-jet-black">
            <div className="pb-12">
                <h3 className="font-bold tracking-wide text-5xl mb-2 text-white">
                    {courseInfo.course.courseTitle}
                </h3>
            <div className="md:space-x-5 md:space-y-0 space-y-1 px-2 flex md:flex-row flex-col pb-4">
                <span className="inline-flex text-white space-x-2 items-center">
                    <ReactStars
                        count={5}
                        size={24}
                        value={getTotalRating(courseInfo.review)}
                        activeColor="#ffd700"
                        edit={false}/>
                    ({courseInfo.review.courseReviews.length} reviews)
                </span>
                <span className="inline-flex text-white space-x-2 items-center">
                    <img src={OpenBook} alt="open book" className="w-5 h-5"></img>
                    <span>{courseInfo.course.courseID}</span>
                </span>
                <span className="inline-flex text-white space-x-2 items-center">
                    <img src={FileSVG} alt="file" className="w-5 h-5"></img>
                    <span>
                        <a href={courseInfo.course.syllabus}>Kursplan</a>
                        </span>
                </span>
                <span className="inline-flex text-white space-x-2 items-center">
                    <img src={LangSVG} alt="language" className="w-5 h-5"></img>
                    <span>{courseInfo.course.teachingLanguage}</span>
                </span>
            </div>
            <div>
                <span className="inline-flex text-white space-x-2 items-center">
                    <span>{courseInfo.course.prerequisites}</span>
                </span>
            </div>
            </div>
            <div className="reviewBox w-1/2 m-auto pb-4">
                    <textarea className="w-full shadow-inner p-4 border-0 rounded-lg focus:shadow-outline text-1xl" placeholder="Write a review here" cols="3" rows="3" id="comment_content" spellCheck="false"></textarea>
                    <button className="font-bold py-2 px-4 w-full bg-yellow-500 text-lg text-white shadow-md rounded-lg ">Comment </button>
            </div>
            <div className="reviews w-1/2 m-auto">
                {courseInfo.review.courseReviews.map(review => {
                    return (
                            <div key={review._id} className="bg-white rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
                                <div className="flex flex-row justify-center mr-2">
                                    <h3 className="text-yellow-600 font-semibold text-lg text-center md:text-left ">{review.studentID}</h3>
                                </div>


                                <p className="text-gray-600 text-lg text-center md:text-left ">{review.message}</p>

                            {(review.score.length ? <p>{review.score.length} Found this review helpful!</p> : null)} 
                        </div>
                    )
                })}
            </div>
            <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
        </>
    )
}

export default Course