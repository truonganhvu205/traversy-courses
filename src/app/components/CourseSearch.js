'use client'

import React, { useState } from 'react'

const CoursesSearch = ({ getSearchResult }) => {
    const [query, setQuery] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setQuery('')

        const res = await fetch(`/api/courses/search?query=${query}`)
        const courses = await res.json()

        getSearchResult(courses)
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Search Courses...'
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />

                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default CoursesSearch