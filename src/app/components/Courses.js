import React from 'react'
import Link from 'next/link'

const Courses = ({ courses }) => {
    return (
        <div>
            <ul>
                {courses.map(course => (
                    <li
                        key={course.id}
                        className='mb-4 bg-white text-black rounded p-4'
                    >
                        <h2 className='text-2xl mb-4'>{course.title}</h2>
                        <small>Level: {course.level}</small>
                        <p className='my-2 text-lg'>{course.description}</p>

                        <button className='my-4 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                            <Link
                                href={course.link}
                                target='_blank'
                                className='bg-sky-800 text-white py-2 px-4 rounded'
                            >
                                Go to Course
                            </Link>
                        </button>
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default Courses