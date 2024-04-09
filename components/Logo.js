import React from 'react'
import Link from 'next/link'

function Logo() {
    return (
        <div className=' flex '>
            {/* <img src="img/signal.jpg" alt="" className=' h-[40px] relative w-[60px]' /> */}
            <Link href={"/"}>
                <span className=' text-[38px] font-sans font-black text-red-700 tracking-tighter capitalize top-[1px] relative '>Gorthik</span>
            </Link>
        </div>
    )
}

export default Logo
