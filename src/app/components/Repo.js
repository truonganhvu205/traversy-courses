import React from 'react'
import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'

const fetchRepo = async (name) => {
    const response = await fetch(`https://api.github.com/repos/bradtraversy/${name}`, {
        next: {
            revalidate: 60,
        },
    })
    const repo = await response.json()

    return repo
}

const Repo = async ({ name }) => {
    const repo = await fetchRepo(name)

    return (
        <div>
            <h2 className='text-2xl my-4 font-semibold'>{repo.name}</h2>
            <p className='mb-4'>{repo.description}</p>

            <div className='flex space-x-8 text-slate-500 mb-4'>
                <div className='flex justify-center items-center space-x-2'>
                    <FaStar />
                    <span>{repo.stargazers_count}</span>
                </div>
                <div className='flex justify-center items-center space-x-2'>
                    <FaCodeBranch />
                    <span>{repo.forks_count}</span>
                </div>
                <div className='flex justify-center items-center space-x-2'>
                    <FaEye />
                    <span>{repo.watchers_count}</span>
                </div>
            </div>
        </div>
    )
}

export default Repo