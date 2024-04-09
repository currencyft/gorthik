import React from 'react'
import Link from 'next/link'

function RightMenu({ router }) {

    const menuJson = [
        {
            title: "Discover",
            img: "/img/english.jpg",
            link: "/activity/discover"
        },
        {
            title: "Trips",
            link: "/activity/tips"
        },
        {
            title: "Review",
            link: "/activity/review"
        },

    ]

    return (
        <>
            <div className='flex'>
                {
                    menuJson.map(function (item) {
                        let isActive = false;
                        if (router.asPath === item.link) {
                            isActive = true;
                        }

                        return <Link href={item.link}>
                            <div className={`${isActive ? " bg-red-500  text-white" : "text-gray-500"} relative  rounded-full hover:bg-red-200/40 hover:text-black px-4 py-2 cursor-pointer`}>

                                {item.title}

                            </div>
                        </Link>
                    })
                }

                <button className='bg-black text-white px-5 pb-1 font-light tracking-wide rounded-full text-[15px] ml-2'>
                    Sign in
                </button>
            </div>


        </>
    )
}

export default RightMenu
