import React from 'react'
import Link from 'next/link'

function ImageCards() {
    const imgjson = [
        {
            img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0e/f0/9e/5b.jpg",
            link: "https://google.com",
        },
        {
            img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0e/f0/9e/5c.jpg",
            link: "https://google.com",
        },
        {
            img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0e/f0/9e/5d.jpg",
            link: "https://google.com",
        },
        {
            img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0e/f0/9e/63.jpg",
            link: "https://google.com",
        },
    ]
    return (
        <>
            <div className='max-w-[1130px] w-full mx-auto mt-5'>
                <div className=' grid grid-cols-4 space-x-5'>
                    {
                        imgjson.map(function (item) {
                            return <div className=' relative'>
                                <Link href={item.link}>
                                    <img src={item.img} alt="" className=' hover:opacity-90 rounded-lg h-[200px] object-cover' />
                                </Link>
                                <div className='absolute bottom-0 w-[100%] h-[40%] bg-gradient-to-t from-black/55 to-transparent rounded-lg'></div>
                            </div>


                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ImageCards
