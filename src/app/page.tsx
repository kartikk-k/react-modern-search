"use client"

import { Inter } from 'next/font/google'
import SearchBar from '@/components/SearchBar'
import Suggestions from '@/components/Suggestions'
import SearchHistory from '@/components/SearchHistory'
import SearchFooter from '@/components/SearchFooter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main className='w-screen min-h-screen overflow-hidden main'>
      {/* gradients */}
      <div className='grad-1'></div>
      <div className='grad-2'></div>

      <div className='relative z-10 flex items-center justify-center min-h-screen '>
        {/* search component */}
        <div className='min-h-[70vh] shadow-2xl relative flex flex-col justify-between rounded-2xl border-[4px] border-[#6E6AA0] border-opacity-40 min-w-[600px] bg-black bg-opacity-60'>
          <div className='py-4'>
            {/* search input */}
            <SearchBar />

            {/* search suggestions and history */}
            <div className='h-full py-2'>
              <Suggestions />
              <SearchHistory />
            </div>
          </div>

          {/* footer */}
          <SearchFooter />
        </div>
      </div>

    </main>
  )
}
