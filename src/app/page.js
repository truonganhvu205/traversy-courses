'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Loading from './loading'
import Courses from './components/Courses'
import CourseSearch from './components/CourseSearch'

export default function Home() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3000/api/courses')
      .then(response => response.json())
      .then(data => setCourses(data))

    setLoading(false)
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      <h1>Welcome to Traversy Media</h1>

      <CourseSearch getSearchResult={(result) => setCourses(result)} />
      <Courses courses={courses} />
    </div>
  )
}
