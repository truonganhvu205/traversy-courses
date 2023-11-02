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
            <h2>Repositories</h2>

            <ul>
                {
                    repos.map(repo => (
                        <li key={repo.id}>
                            <Link href={`/code/repos/${repo.name}`}>
                                <h3>{repo.name}</h3>
                                <p>{repo.description}</p>

                                <div>
                                    <span>
                                        <FaStar /> {repo.stargazers_count}
                                    </span>
                                    <span>
                                        <FaCodeBranch /> {repo.forks_count}
                                    </span>
                                    <span>
                                        <FaEye /> {repo.watchers_count}
                                    </span>
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