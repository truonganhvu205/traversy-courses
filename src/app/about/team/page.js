export const metadata = {
    title: 'Traversy Courses - Our Team',
}

import React from 'react'
import Image from 'next/image'
import bradTraversy from '../../images/brad-traversy.png'
import Link from 'next/link'
import { FaExternalLinkAlt, FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const page = () => {
    return (
        <div>
            <h1 className='my-4 text-4xl'>Our Team</h1>

            <div className='my-4 grid grid-cols-2 place-items-center space-x-8'>
                <div>
                    <Image
                        src={bradTraversy}
                        alt='image'
                        width={200}
                        height={200}
                        className='rounded-full mb-4 block mx-auto'
                    />

                    <p className='flex justify-center items-center mb-4 text-2xl font-bold'>Brad Traversy</p>

                    <ul className='flex justify-center items-center space-x-8 mb-4 text-2xl'>
                        <li>
                            <Link href='https://www.traversymedia.com/'>
                                <FaExternalLinkAlt />
                            </Link>
                        </li>
                        <li>
                            <Link href='https://twitter.com/traversymedia'>
                                <FaTwitter />
                            </Link>
                        </li>
                        <li>
                            <Link href='https://www.facebook.com/traversymedia'>
                                <FaFacebook />
                            </Link>
                        </li>
                        <li>
                            <Link href='https://www.linkedin.com/in/bradtraversy/'>
                                <FaLinkedin />
                            </Link>
                        </li>
                        <li>
                            <Link href='https://www.youtube.com/traversymedia'>
                                <FaYoutube />
                            </Link>
                        </li>
                    </ul>


                    <p className='flex justify-center items-center mb-4 text-lg font-semibold'>Full Stack Web Developer & Instructor at Traversy Media</p>

                    <div className='flex justify-center items-center space-x-8 mb-8'>
                        <div>
                            <h1 className='font-semibold text-slate-400'>Total students</h1>
                            <p className='text-2xl font-bold text-center'>455,941</p>
                        </div>

                        <div>
                            <h1 className='font-semibold text-slate-400 text-center'>Reviews</h1>
                            <p className='text-2xl font-bold'>161,857</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='mb-4'>
                        <h1 className='mb-2 text-2xl font-semibold'>About me</h1>

                        <p className='w-4/5 h-1/2 text-justify'>
                            Brad Traversy has been programming for around 12 years and teaching for almost 5 years.
                            He is the owner of Traversy Media which is a successful web development YouTube channel
                            and specializes in everything from HTML5 to front end frameworks like Angular as well as
                            server side technologies like Node.js, PHP and Python. Brad has mastered explaining very complex
                            topics in a simple manner that is very understandable.
                            Invest in your knowledge by watching Brad's courses.
                        </p>
                    </div>
                    <div>
                        <h1 className='mb-2 text-xl font-semibold'>About Courses</h1>

                        <p className='w-4/5 h-1/2 text-justify'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Nobis, laborum dolores ducimus velit eligendi sint voluptas!
                            Obcaecati adipisci iusto distinctio id dicta eligendi, quo officiis
                            dignissimos optio maxime consequuntur et, a nam dolorem nihil minus
                            aspernatur earum fugiat laudantium veritatis. In quasi, commodi,
                            fugit dolore aliquam excepturi fuga placeat error quos consequatur,
                            autem sapiente et! Earum accusamus voluptates sapiente ullam omnis impedit
                            obcaecati provident minus incidunt ducimus perferendis ex in veritatis sit
                            doloribus similique, placeat autem. Neque voluptatum accusamus sapiente quibusdam
                            dolor fugit recusandae tenetur dignissimos inventore veritatis perferendis,
                            sequi a, illo officia repellat voluptatibus corrupti fugiat libero, doloremque ab.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page