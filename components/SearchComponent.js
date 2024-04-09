import { React, useState } from 'react'
import { SearchIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { useSearchParams } from 'next/navigation'



function SearchComponent({ placeholder }) {
    const [searchInput, setSearchInput] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams();
    const searchQry = searchParams.get('search')


    const search = () => {
        router.push({
            pathname: "/search",
            query: {
                search: searchInput
            }
        });
    }

    return (
        <>
            <div className='flex border-[1px] bg-red-200/15 border-red-500 w-[400px] rounded-full pl-3 py-1 px-1'>

                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder={searchQry || 'Start your search'}
                    type="text"
                    className='flex-grow bg-transparent outline-none text-sm uppercase'
                />
                <SearchIcon
                    onClick={search}
                    className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer' />
            </div>
        </>
    )
}

export default SearchComponent
