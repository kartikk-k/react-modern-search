import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='w-screen min-h-screen overflow-hidden main'>
      {/* gradients */}
      <div className='grad-1'></div>
      <div className='grad-2'></div>

      <div className='relative z-10 flex items-center justify-center min-h-screen '>
        {/* search component */}
        <div className='min-h-[70vh] rounded-2xl border-[4px] border-[#6E6AA0] border-opacity-40 min-w-[600px] bg-black bg-opacity-60'>
        </div>
      </div>

    </main>
  )
}
