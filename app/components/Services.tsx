"use client"
import Image from 'next/image'
import React, {useState} from 'react'

type Props = {}
const services = [
    {
      title: "Upholstery and Surface Cleaning",
      description: "Revitalize your vehicle's interior with our comprehensive upholstery and surface cleaning service. We use specialized cleaning agents, applicators, and advanced cleaning devices to remove dirt, stains, and allergens, ensuring a fresh and inviting environment."
    },
    {
      title: "Vinyl and Leather Revitalization",
      description: "Protect and enhance your vinyl and leather surfaces with our revitalization service. We apply high-quality preservation agents that nourish and protect, ensuring your materials remain supple and resistant to wear, while maintaining their luxurious appearance."
    },
    {
      title: "Fabric Protection Treatment",
      description: "Keep your fabrics looking pristine with our spot- and stain-resistant treatment. We treat all fabric surfaces with advanced chemicals designed to repel spills and stains, preserving the beauty and integrity of your vehicle's interior components."
    },
    {
      title: "Sticker Removal and Dealer Branding",
      description: "Enhance your vehicle's appearance with our sticker removal and dealer branding service. We carefully remove factory stickers and protective items from new vehicles, replacing them with dealership decal stickers and logo plates for a polished, professional look."
    },
    {
      title: "Quality Assurance Inspection",
      description: "Your satisfaction is our priority. Our quality assurance inspection service ensures that every detail of our work meets the highest standards. We meticulously inspect the results of our services to guarantee that you leave with a vehicle that exceeds your expectations."
    }
  ]

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