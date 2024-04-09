import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/solid'

function Breadcrumb() {
    return (
        <>
            <div className='max-w-[1130px] w-full mx-auto mt-4'>
                <div className='text-sm font-light flex space-x-2'>
                    <div>Activity</div>
                    <div><ChevronRightIcon className=' h-4 mt-[3px]' /></div>
                    <div>Hotels</div>
                    <div><ChevronRightIcon className=' h-4 mt-[3px]' /></div>
                    <div>Location</div>
                    <div><ChevronRightIcon className=' h-4 mt-[3px]' /></div>
                    <div className=' tracking-wider'>Explore destinations, activities, investments and many more </div>
                </div>
            </div>
        </>
    )
}

export default Breadcrumb
