import React from 'react'
import Image from 'next/image'
import image from '../../public/image.jpg'
import heroimage from '../../public/heroimage.png'
import heropop from '../../public/heropop.png'

type Props = {}

function Hero({}: Props) {
  return (
    <div id="hero"
  className="hero min-h-screen bg-white relative"
>
<Image
        src={image}
        alt="Hero background"
        className='h-[80vh] w-[90vw] rounded-xl'
        quality={100}
      />

  <div className="hero-content text-neutral-content text-center">
  </div>
  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-black "backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white w-[70%] h-[65vh] rounded-xl p-10'>
        {/* Content for the centered div */}

        <div className=' md:flex-row flex-col hidden md:flex'>
            <div className='flex w-1/2 md:flex-col flex-row p-5'>
                <p className='font-semibold'>We’re all about making your car shine! Open Every Day Except Sunday - <strong>Appointment Only!</strong></p>
                <h1 className='text-left md:text-7xl text-3xl font-bold w-[22rem] mt-36'>Keep Your <span className='text-red-500'>Car Clean</span> Always</h1>
            </div>
            <div className='flex w-1/2 md:flex-col flex-row h-[30rem]'>
            <div className='w-full h-full rounded-lg  '>
                  <Image src={heroimage} alt="Hero Image" className='w-full h-full rounded-lg object-cover' />
            </div>
            </div>
        </div>
        <div className='flex flex-col md:hidden'>
  <div className='flex flex-col p-4'>
    <p className='font-semibold text-sm mb-4'>We're all about making your car shine! Open Every Day Except Sunday - <strong>Appointment Only!</strong></p>
    <h1 className='text-left text-3xl font-bold mb-4'>Keep Your <span className='text-red-500'>Car Clean</span> Always</h1>
  </div>
  <div className='h-32 w-56 px-4'>
    <div className='w-full h-full rounded-lg'>
      <Image src={heroimage} alt="Hero Image" className='w-full h-full rounded-lg object-cover' />
    </div>
  </div>
</div>
        
      </div>
      <Image src={heropop} alt="Hero Image" className='w-[5rem] left-[82%] top-[12%] rotate-[40deg] absolute h-[5rem] rounded-lg object-cover' />
</div>
  )
}

export default Hero