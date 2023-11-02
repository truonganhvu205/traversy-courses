import React from 'react'
import Link from 'next/link'
import { Suspense } from 'react'
import Repo from '@/app/components/Repo'
import RepoDirs from '@/app/components/RepoDirs'

const page = ({ params: { name } }) => {
    return (
        <div>
            <Link href='/code/repos'>Back to Repositories</Link>

            <Suspense fallback={<div>Loading Repo...</div>}>
                <Repo name={name} />
            </Suspense>

            <Suspense fallback={<div>Loading Directories...</div>}>
                <RepoDirs name={name} />
            </Suspense>
        </div>
    )
}

export default page