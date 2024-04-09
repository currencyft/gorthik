import React from 'react'
import Logo from './Logo'
import RightMenu from './RightMenu'
import HeaderSubmenu from './HeaderSubmenu'
import SearchComponent from './SearchComponent'
import { useRouter } from 'next/router'

function Header() {
    const router = useRouter();

    return (
        <div className=' border-b-[1px] border-b-orange-700/10 drop-shadow-md sticky w-full top-0 z-10 bg-white '>
            <div className='max-w-[1130px] w-full mx-auto '>
                <header className='flex items-center justify-between  pt-2'>
                    <div>
                        <Logo />
                    </div>
                    <div>
                        <SearchComponent />
                    </div>
                    <div className='flex'>

                        <RightMenu router={router} />
                    </div>
                </header>
                <div>
                    <HeaderSubmenu router={router} />
                </div>
            </div>


        </div>
    )
}

export default Header
