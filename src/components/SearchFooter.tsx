import React from 'react'
import { CursorArrowRaysIcon, ArrowsUpDownIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

function SearchFooter() {
    return (
        <div className='absolute bottom-0 left-0 flex justify-between w-full p-2 border-t-2 border-custom'>
            <div className='flex gap-4'>
                <div className='flex items-center gap-2'>
                    <ArrowsUpDownIcon className='w-5 stroke-gray-400' />
                    <span className='text-sm text-gray-400'>Navigate</span>
                </div>
                <div className='flex items-center gap-2'>
                    <CursorArrowRaysIcon className='w-5 stroke-gray-400' />
                    <span className='text-sm text-gray-400'>Select</span>
                </div>
            </div>

            <div className='flex items-center gap-2'>
                <QuestionMarkCircleIcon className='w-5 stroke-gray-400' />
                <span className='text-sm text-gray-400'>Help</span>
            </div>
        </div>
    )
}

export default SearchFooter