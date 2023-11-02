import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <div>
            <Link href='/'>Traversy Media</Link>

            <ul>
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
        </div>
    )
}

export default Header