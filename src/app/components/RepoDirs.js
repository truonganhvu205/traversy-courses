import React from 'react'
import Link from 'next/link'

const fetchRepoContents = async (name) => {
    await new Promise(resolve => setTimeout(resolve, 3000))

    const response = await fetch(`https://api.github.com/repos/bradtraversy/${name}/contents`, {
        next: {
            revalidate: 60,
        },
    })
    const contents = await response.json()

    return contents

}

const RepoDirs = async ({ name }) => {
    const contents = await fetchRepoContents(name)
    const dirs = contents.filter(content => content.type === 'dir')

    return (
        <div>
            <h3 className='text-lg font-bold mb-4'>Directories</h3>
            <ul className='list-disc ml-8 mb-4'>
                {
                    dirs.map(dir => (
                        <li key={dir.path} className='underline hover:no-underline'>
                            <Link href={`/code/repos/${name}/${dir.path}`}>
                                {dir.path}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default RepoDirs