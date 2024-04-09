import React from 'react'
import Link from 'next/link'

function HeaderSubmenu({ router }) {
    const submenu = [
        {
            title: "Hotels",
            img: "/img/english.jpg",
            link: "/activity/hotels"
        },
        {
            title: "Things to do",
            link: "/activity/things-to-do"
        },
        {
            title: "Restaurants",
            link: "/activity/restaurants"
        },
        {
            title: "Flights",
            link: "/activity/flights"
        },
        {
            title: "Vacation Rentals",
            link: "/activity/vacation-rentals"
        },
        {
            title: "Cruises",
            link: "/activity/cruises"
        },
        {
            title: "Rental Cars",
            link: "/activity/car-rentals"
        },
        {
            title: "Forums",
            link: "/activity/forums"
        },
        {
            title: "Golf",
            link: "/activity/golf"
        },

    ]
    return (
        <>
            <div className=' '>
                <div className='flex space-x-10 h-[50px]'>
                    {
                        submenu.map(function (item) {
                            let isActive = false;
                            if (router.asPath === item.link) {
                                isActive = true;
                            }

                            return <Link href={item.link}>
                                <div className={`${isActive ? "border-b-[5px] border-b-red-500" : ""} relative my-2  hover:border-b-red-500 pt-2 pb-[10px] hover:border-b-[5px]  cursor-pointer font-semibold text-[15px]`}>

                                    {item.title}

                                </div>
                            </Link>
                        })
                    }

                </div>
            </div>


        </>
    )
}

export default HeaderSubmenu
