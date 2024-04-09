import React from 'react'

function MiniSubtitle({ title }) {
    return (
        <div className='max-w-[1130px] w-full mx-auto'>
            <div className=' mt-8 font-semibold text-[24px] border-b-[1px] pb-3'>
                {title}
            </div>
        </div>
    )
}

export default MiniSubtitle
