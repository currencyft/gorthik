import React from 'react'
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid'
import Link from 'next/link';

function showStars(total) {
    if (total < 2) {

    }
}

function computeRating(totalx) {
    return Math.round(totalx);
}

function getSubstring(str) {
    const maxLen = 100;
    let finalString = "";
    if (str.length > maxLen) {
        finalString += str.substring(0, maxLen) + "...";
    } else {
        finalString = str;
    }
    return finalString;
}

function getLink(lnk) {
    return "item?id=" + lnk
}
function CardLists() {
    const cardjson = [
        {
            id: 1,
            title: "Dubai Aladdin Tour: Souks, Creek, Old Dubai and Tastings",
            category: "Historical Tours",
            price: 32,
            currency: "USD",
            symbol: "$",
            tour_duration: "2 hours",
            quantity: "per adult",
            description: "Experience the city like a local as we embark on a personalized tour in the comfort of my personal vehicle. ",
            terms: "free cancellation",
            img: "/img/caption.jpg",
            link: "https://google.com",
            recommendation: "Recommended by 98% of travelers",
            rating: 4.4,
        },
        {
            id: 2,
            title: "Dubai Top Ten Must-see Sights with Burj Khalifa and Transfers",
            category: "Business Tours",
            price: 47,
            currency: "USD",
            symbol: "$",
            tour_duration: "2 hours",
            quantity: "per adult",
            description: "Experience the city like a local as we embark on a personalized tour in the comfort of my personal vehicle.",
            terms: "free cancellation",
            img: "/img/caption2.jpg",
            link: "https://google.com",
            recommendation: "Recommended by 98% of travelers",
            rating: 3.4,
        },
        {
            id: 3,
            title: "Dubai Top 20 Must-see Attractions with Burj Khalifa and Souks",
            category: "Gaming Tours",
            price: 68,
            currency: "USD",
            symbol: "$",
            tour_duration: "2 hours",
            quantity: "per adult",
            description: "Enjoy this excellent choice for first-time visitors in a small group Tour around the city covering the Top Attractions in…",
            terms: "free cancellation",
            img: "/img/caption3.jpg",
            link: "https://google.com",
            recommendation: "Recommended by 98% of travelers",
            rating: 2.1,
        },
        {
            id: 4,
            title: "Dubai Layover Private Tour",
            category: "Architectural Tours",
            price: 33,
            currency: "USD",
            symbol: "$",
            tour_duration: "2 hours",
            quantity: "per adult",
            description: "Experience the city like a local as we embark on a personalized tour in the comfort of my personal vehicle.",
            terms: "free cancellation",
            img: "/img/caption4.jpg",
            link: "https://google.com",
            recommendation: "Recommended by 98% of travelers",
            rating: 1.4,
        },
        {
            id: 5,
            title: "Abu Dhabi Tour from Dubai:The Mosque, Qasr Al watan, Etihad Tower",
            category: "Rental Tours",
            price: 45,
            currency: "USD",
            symbol: "$",
            tour_duration: "2 hours",
            quantity: "per adult",
            description: "Experience the city like a local as we embark on a personalized tour in the comfort of my personal vehicle.",
            terms: "free cancellation",
            img: "/img/caption3.jpg",
            link: "https://google.com",
            recommendation: "Recommended by 98% of travelers",
            rating: 1.5,
        },
        {
            id: 6,
            title: "Dubai Aladdin Tour: Souks, Creek, Old Dubai and Tastings",
            category: "Boating Scenes",
            price: 12,
            currency: "USD",
            symbol: "$",
            tour_duration: "2 hours",
            quantity: "per adult",
            description: "Experience the city like a local as we embark on a personalized tour in the comfort of my personal vehicle.",
            terms: "free cancellation",
            img: "/img/caption6.jpg",
            link: "https://google.com",
            recommendation: "Recommended by 98% of travelers",
            rating: 3.9,
        },
    ]

    return (
        <>
            <div className='max-w-[1130px] w-full mx-auto mt-5'>
                <div className='grid grid-cols-12 gap-5'>
                    <div className='col-span-8'>
                        {

                            cardjson.map(function (item) {

                                return <div className=' mb-5 hover:opacity-90 group'>
                                    <div className=' flex space-x-4 '>

                                        <div className='relative h-60 min-w-[200px]'>
                                            <Link href={getLink(item.link)} id={item.id}>
                                                <Image src={item.img} layout="fill" objectFit="cover" className='rounded-md' />
                                            </Link>
                                            <div className=' absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-black/55 to-transparent rounded-lg'>

                                            </div>
                                        </div>
                                        <div className='min-w-[500px]'>
                                            <Link href={getLink(item.link)}>
                                                <div className='font-semibold text-lg leading-5 text-gray-500 w-full group-hover:underline'>{item.title}</div>
                                            </Link>
                                            <div className=' flex mt-2 space-x-10'>
                                                <div className=' w-full'>
                                                    <div className='text-sm'>{item.category}</div>
                                                    <div className=' text-gray-500 mt-3 '>{item.tour_duration}</div>
                                                    <div className=' text-gray-500 mt-3  text-[13px]'>{getSubstring(item.description)}</div>
                                                    <div className=' capitalize mt-2 text-[14px] font-bold'>{item.terms}</div>
                                                    <div className=' capitalize mt-[3px] text-sm text-gray-500'>{item.recommendation}</div>
                                                    <div className=' capitalize mt-1 text-gray-500 flex ml-[-3px]'>


                                                        {
                                                            (
                                                                () => {

                                                                    let i = 0;
                                                                    let limit = computeRating(item.rating);
                                                                    let stars = [];
                                                                    for (i = 0; i < limit; i++) {
                                                                        stars.push(<StarIcon className=' h-4 text-red-400' />)
                                                                    }
                                                                    return stars;
                                                                }
                                                            )()
                                                        }
                                                        <div className=' relative top-[-2px] ml-2 mr-[-3px] h-[20px] border-r-[1px] border-gray-400'></div>
                                                        <span className=' text-[15px] font-bold relative top-[-3.5px] text-gray-500 ml-2'>{item.rating}</span>
                                                    </div>
                                                </div>

                                                <div className=''>
                                                    <div>from</div>
                                                    <div className='font-bold text-xl'>{item.symbol}{item.price}</div>
                                                    <div>{item.quantity}</div>
                                                    <div>
                                                        <Link href={getLink(item.link)}>
                                                            <button className=' bg-orange-300 px-5 py-2 h-10 rounded-full mt-2 ml-[-3px] hover:bg-orange-200'>Reserve</button>
                                                        </Link>
                                                    </div>

                                                </div>
                                            </div>


                                        </div>
                                    </div >
                                </div >
                            })
                        }
                    </div>
                    <div className='col-span-4'></div>
                </div>
            </div>
            <div className='max-w-[1130px] w-full mx-auto mt-5 '>

            </div >
        </>
    )
}

export default CardLists
