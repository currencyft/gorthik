import React from 'react'
import { StarIcon } from '@heroicons/react/solid'

import { CurrencyDollarIcon, ArrowRightIcon, ChevronDoubleRightIcon } from '@heroicons/react/solid'

function Sublinks() {
    return (
        <div className='max-w-[1130px] w-full mx-auto mt-6 flex space-x-2 text-sm border-b-[10px] border-red-500 pb-3'>

            <div className='flex space-x-[-4px] relative top-[-5px] tracking-tighter'>

                <ChevronDoubleRightIcon className=' h-6 text-red-500 relative top-[2px]' />



            </div>
            <div>1,566 reviews</div>
            <div><StarIcon className=' h-4 text-red-300 relative top-[2px]' /></div>
            <div>#355 of 684 Shopping in Dubai</div>
            <div><StarIcon className=' h-4 text-red-300 relative top-[2px]' /></div>
            <div>City Tours</div>
            <div><StarIcon className=' h-4 text-red-300 relative top-[2px]' /></div>
            <div>Cultural Tours</div>
            <div><StarIcon className=' h-4 text-red-300 relative top-[2px]' /></div>
            <div>Shopping Tours</div>
            <div><StarIcon className=' h-4 text-red-300 relative top-[2px]' /></div>
            <div>Historical & Heritage Tours</div>
            <div className='flex space-x-[-4px] relative top-[-5px] tracking-tighter'>

                <ArrowRightIcon className=' h-6 text-red-500 relative top-[2px]' />

            </div>
        </div>
    )
}

export default Sublinks
