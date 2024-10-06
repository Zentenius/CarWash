import Image from 'next/image'
import React from 'react'

type Props = {}

function Misc({}: Props) {
  return (
    <div className='items-center justify-center flex mb-6 md:mb-10 px-4 md:px-0'>
  <div className='w-full md:w-[80vw] h-48 md:h-[25rem] relative'>
    <Image src={'/misc.png'} alt='misc' layout='fill' className='object-cover rounded-2xl md:rounded-3xl' />
    <span className='absolute text-white z-10 text-xl md:text-5xl lg:text-7xl font-bold w-[80%] md:w-[65%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center md:text-left md:left-1/3 md:-translate-x-1/3'>
      Professional Washing and Cleaning of your Car
    </span>
  </div>
</div>

  )
}

export default Misc