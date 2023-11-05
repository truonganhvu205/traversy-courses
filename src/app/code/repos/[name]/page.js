import React from 'react'
import Link from 'next/link'
import { Suspense } from 'react'
import Repo from '@/app/components/Repo'
import RepoDirs from '@/app/components/RepoDirs'

const page = ({ params: { name } }) => {
    return (
        <div className='my-5'>
            <div className='bg-white text-black rounded p-4'>
                <button className='my-4 ml-4 bg-sky-800 text-white p-2 px-4 rounded transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                    <Link href='/code/repos'>
                        Back to Repositories
                    </Link>
                </button>

                <Suspense fallback={<div className='animate-spin h-5 w-5 mr-3'>.</div>}>
                    <Repo name={name} />
                </Suspense>

                <Suspense fallback={<div className='animate-spin h-5 w-5 mr-3'>.</div>}>
                    <RepoDirs name={name} />
                </Suspense>
            </div>
        </div>
    )
}

export default page