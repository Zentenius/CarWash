"use client"
import Image from 'next/image'
import React, {useState} from 'react'

type Props = {}
const services = [
  {
      title: "Interior Detailing",
      description: "Transform your vehicle's interior with our expert detailing service. We clean, polish, and restore every surface for a fresh, inviting space."
  },
  {
      title: "Polish",
      description: "Enhance your car's shine with our professional polishing service. We remove imperfections and leave your paint looking flawless."
  },
  {
      title: "Waxing",
      description: "Protect your vehicle's exterior with our premium waxing service, ensuring a long-lasting shine and defense against the elements."
  },
  {
      title: "Ceramic Coating",
      description: "Provide superior protection for your car’s paint with our ceramic coating service, offering durability and a stunning finish."
  },
  {
      title: "Engine Detailing",
      description: "Keep your engine clean and running smoothly with our meticulous engine detailing service, enhancing performance and appearance."
  },
  {
      title: "Headlight Restoration",
      description: "Improve visibility and safety with our headlight restoration service, removing fog and yellowing for clearer lights."
  },
  {
      title: "Restoration",
      description: "Revive your vehicle's beauty with our comprehensive restoration services, bringing back its original charm."
  }
];


const Services = (props: Props) => {
    const [currentService, setCurrentService] = useState(0)
  return (
    <section id='service' className=' bg-white text-black'>
  <h1 className='text-center font-bold text-3xl md:text-5xl mt-10 md:mt-20 px-4'>Our Services</h1>

  <div className='flex flex-col md:flex-row justify-center items-center md:h-[30rem] p-4 md:p-10'>
    <div className='flex flex-col w-full md:w-1/3 md:h-full p-3 md:p-5 space-y-3 mb-6 md:mb-0'>
      <h1 className='text-xl md:text-2xl font-bold'>{services[currentService].title}</h1>
      <p className='text-sm md:text-base'>{services[currentService].description}</p>
    </div>

    <div className='flex flex-col w-full md:w-1/2 md:h-full p-3 md:p-5'>
      <div className="carousel carousel-center bg-slate-300 rounded-box w-full space-x-2 md:space-x-4 p-2 md:p-4">
        {services.map((service, index) => (
          <div key={index} className="carousel-item w-[12rem] md:w-[17rem] h-[15rem] md:h-[20rem] relative" onClick={() => setCurrentService(index)}>
            <Image
              src={`/car${index + 1}.png`}
              layout='fill'
              className="rounded-box object-cover cursor-pointer"
              alt={service.title}
            />
          </div>
        ))}
      </div>
      <span className='text-xs md:text-sm mt-2 text-center'>Click carousel images for further services</span>
    </div>
  </div>
</section>

  )
}

export default Services