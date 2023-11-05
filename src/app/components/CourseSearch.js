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
            <form
                action=""
                onSubmit={handleSubmit}
                className='mx-20 mb-8 flex items-center flex'
            >
                <input
                    type="text"
                    placeholder='Search...'
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    className='text-black rounded-l p-2 grow border-l border-y border-white'
                />

                <button
                    type='submit'
                    className='bg-sky-800 text-white p-2 px-8 rounded-r border border-white'
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default CoursesSearch