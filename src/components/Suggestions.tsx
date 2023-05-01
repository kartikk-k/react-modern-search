import React from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'

const items = [
    { title: "People", isSelected: true },
    { title: "Files", isSelected: false },
    { title: "Settings", isSelected: false }
]

function Suggestions() {
    return (
        <div className='mx-4 my-2'>
            <p className='text-xs text-gray-500'>Suggestions</p>
            {/* filter items */}
            <div className='flex gap-4 py-2 text-gray-300'>
                {items.map((item, index) => (
                    <button className={`${item.isSelected ? 'bg-opacity-20' : ''} flex items-center gap-2 px-4 py-1 text-sm duration-200 bg-white border-2 rounded-full active:scale-95 border-custom bg-opacity-5`}>
                        <span>{item.title}</span>
                        {/* <CheckIcon className='w-4 fill-gray-300' /> */}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Suggestions