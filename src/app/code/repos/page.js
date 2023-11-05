export const metadata = {
    title: 'Traversy Courses - Repositories',
}

import React from 'react'
import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'

const fetchRepos = async () => {
    const response = await fetch('https://api.github.com/users/bradtraversy/repos', {
        next: {
            revalidate: 60,
        },
    })
    const repos = await response.json()

    await new Promise(resolve => setTimeout(resolve, 1000))

    return repos
}

const page = async () => {
    const repos = await fetchRepos()

    return (
        <div>
            <h2 className='my-4 text-4xl'>Repositories</h2>

            <ul>
                {
                    repos.map(repo => (
                        <li
                            key={repo.id}
                            className='mb-4 bg-white text-black rounded p-4 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'
                        >
                            <Link href={`/code/repos/${repo.name}`}>
                                <h3 className='text-2xl mb-4 font-semibold'>{repo.name}</h3>
                                <p className='mb-4'>{repo.description}</p>

                                <div className='flex space-x-8 text-slate-500'>
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
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default page