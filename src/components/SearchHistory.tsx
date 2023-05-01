import React from 'react'
import { ShieldCheckIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'


function SearchHistory() {
    return (
        <div className='m-2'>
            <p className='px-2 text-xs text-gray-500'>Search history</p>
            {/* filter items */}
            <div className='py-2 space-y-1 text-gray-300'>
                <button className='flex items-center justify-between w-full p-2 duration-200 rounded-lg active:scale-95 hover:bg-white hover:bg-opacity-10'>
                    <span className='flex items-center gap-2'>
                        <ShieldCheckIcon className='w-5 stroke-gray-300' />
                        <p className='text-sm text-gray-300'>Security</p>
                    </span>
                    <span className='flex gap-2'>
                        <span className='flex items-center justify-center text-sm bg-white border border-white rounded-md w-7 h-7 border-opacity-10 bg-opacity-5'>
                            <span>⌘</span>
                        </span>
                        <span className='flex items-center justify-center text-sm bg-white border border-white rounded-md w-7 h-7 border-opacity-10 bg-opacity-5'>
                            <span>W</span>
                        </span></span>
                </button>
                <button className='flex items-center justify-between w-full p-2 duration-200 rounded-lg active:scale-95 hover:bg-white hover:bg-opacity-10 '>
                    <span className='flex items-center gap-2'>
                        <Cog6ToothIcon className='w-5 stroke-gray-300' />
                        <p className='text-sm text-gray-300'>Settings</p>
                    </span>
                    <span className='flex gap-2'>
                        <span className='flex items-center justify-center text-sm bg-white border border-white rounded-md w-7 h-7 border-opacity-10 bg-opacity-5'>
                            <span>⌘</span>
                        </span>
                        <span className='flex items-center justify-center text-sm bg-white border border-white rounded-md w-7 h-7 border-opacity-10 bg-opacity-5'>
                            <span>N</span>
                        </span>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default SearchHistory