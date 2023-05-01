import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

function SearchBar() {
    return (
        <div className='flex items-center gap-4 p-2 mx-4 bg-white border-2 border-custom bg-opacity-5 rounded-xl'>
            <MagnifyingGlassIcon className='w-6 h-6 fill-gray-500' />
            <input type="text" placeholder='search here...' className='w-full placeholder:text-gray-500 bg-transparent text-[#AFB8C3] rounded-none outline-none' />
        </div>
    )
}

export default SearchBar