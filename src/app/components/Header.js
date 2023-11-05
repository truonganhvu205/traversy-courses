import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <div className='mb-px min-w-screen bg-sky-800 text-white'>
            <div className='inline-block flex justify-center items-center py-4 text-4xl'>
                <Link href='/'>Traversy Media</Link>
            </div>

            <ul className='pb-4 flex justify-center items-center space-x-12 text-xl'>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/about/team'>Our Team</Link>
                </li>
                <li>
                    <Link href='/code/repos'>Code</Link>
                </li>
            </ul>
        </div >
    )
}

export default Header