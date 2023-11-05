export const metadata = {
    title: 'Traversy Courses - About',
}

import React from 'react'
import Image from 'next/image'
import traversyMediaLogo from '../images/traversy-media-logo.png'

const page = () => {
    return (
        <div>
            <h1 className='my-4 text-4xl'>About Traversy Media</h1>

            <div className='my-4 flex items-center space-x-4'>
                <Image
                    src={traversyMediaLogo}
                    alt="logo"
                    width={200}
                    height={200}
                    className='rounded-full'
                />

                <div className='text-justify'>
                    <p className='my-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Assumenda aliquam quaerat explicabo maiores velit perferendis,
                        expedita atque iusto repellendus laborum a nam voluptatibus nemo magni,
                        voluptate inventore dignissimos corrupti cum possimus corporis!
                        Atque consectetur hic consequatur quos animi dicta, esse excepturi
                        fugiat architecto vel voluptates placeat possimus repellat ea!
                        Sequi dolorem quam nisi aut excepturi totam quisquam minus,
                        rem fugit tempora impedit similique, labore, modi tenetur?
                        Odio modi adipisci quam placeat mollitia, quidem alias,
                        deserunt nisi eligendi nam commodi totam,
                        suscipit iste non optio nihil quae voluptas sed.
                        Eveniet ipsam perspiciatis error asperiores quis corporis temporibus iure nobis excepturi alias.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Assumenda aliquam quaerat explicabo maiores velit perferendis,
                        expedita atque iusto repellendus laborum a nam voluptatibus nemo magni,
                        voluptate inventore dignissimos corrupti cum possimus corporis!
                        Atque consectetur hic consequatur quos animi dicta, esse excepturi
                        fugiat architecto vel voluptates placeat possimus repellat ea!
                        Sequi dolorem quam nisi aut excepturi totam quisquam minus,
                        rem fugit tempora impedit similique, labore, modi tenetur?
                        Odio modi adipisci quam placeat mollitia, quidem alias,
                        deserunt nisi eligendi nam commodi totam,
                        suscipit iste non optio nihil quae voluptas sed.
                        Eveniet ipsam perspiciatis error asperiores quis corporis temporibus iure nobis excepturi alias.
                    </p>
                </div>
            </div>

            <p className='text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda aliquam quaerat explicabo maiores velit perferendis,
                expedita atque iusto repellendus laborum a nam voluptatibus nemo magni,
                voluptate inventore dignissimos corrupti cum possimus corporis!
                Atque consectetur hic consequatur quos animi dicta, esse excepturi
                fugiat architecto vel voluptates placeat possimus repellat ea!
                Sequi dolorem quam nisi aut excepturi totam quisquam minus,
                rem fugit tempora impedit similique, labore, modi tenetur?
                Odio modi adipisci quam placeat mollitia, quidem alias,
                deserunt nisi eligendi nam commodi totam,
                suscipit iste non optio nihil quae voluptas sed.
                Eveniet ipsam perspiciatis error asperiores quis corporis temporibus iure nobis excepturi alias.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda aliquam quaerat explicabo maiores velit perferendis,
                expedita atque iusto repellendus laborum a nam voluptatibus nemo magni,
                voluptate inventore dignissimos corrupti cum possimus corporis!
                Atque consectetur hic consequatur quos animi dicta, esse excepturi
                fugiat architecto vel voluptates placeat possimus repellat ea!
                Sequi dolorem quam nisi aut excepturi totam quisquam minus,
                rem fugit tempora impedit similique, labore, modi tenetur?
                Odio modi adipisci quam placeat mollitia, quidem alias,
                deserunt nisi eligendi nam commodi totam,
                suscipit iste non optio nihil quae voluptas sed.
                Eveniet ipsam perspiciatis error asperiores quis corporis temporibus iure nobis excepturi alias.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda aliquam quaerat explicabo maiores velit perferendis,
                expedita atque iusto repellendus laborum a nam voluptatibus nemo magni,
                voluptate inventore dignissimos corrupti cum possimus corporis!
                Atque consectetur hic consequatur quos animi dicta, esse excepturi
                fugiat architecto vel voluptates placeat possimus repellat ea!
                Sequi dolorem quam nisi aut excepturi totam quisquam minus,
                rem fugit tempora impedit similique, labore, modi tenetur?
                Odio modi adipisci quam placeat mollitia, quidem alias,
                deserunt nisi eligendi nam commodi totam,
                suscipit iste non optio nihil quae voluptas sed.
                Eveniet ipsam perspiciatis error asperiores quis corporis temporibus iure nobis excepturi alias.
            </p>
        </div>
    )
}

export default page